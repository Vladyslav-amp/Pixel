import React, { Children, cloneElement, useEffect, useRef, useState } from "react";
import "./BrandingAccordion.scss";

export function Accordion({ children, defaultOpen = 0 }) {
  const items = Children.toArray(children);
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="brandbook-acc">
      {items.map((child, idx) =>
        cloneElement(child, {
          _idx: idx,
          total: items.length, // передаємо загальну кількість пунктів
          isOpen: openIndex === idx,
          onToggle: () => setOpenIndex((p) => (p === idx ? -1 : idx)),
        })
      )}
    </div>
  );
}

export function AccordionItem({
  title,
  subtitle,   // тепер показуємо тільки після відкриття
  media,
  children,
  isOpen,
  onToggle,
  _idx,
  total,
}) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // обчислення висоти контенту для плавного відкриття
  useEffect(() => {
    if (contentRef.current) setHeight(contentRef.current.scrollHeight);
  }, [children, media, subtitle, isOpen]);

  // авто-прокрутка, якщо відкривається останній акордіон
  useEffect(() => {
    if (isOpen && sectionRef.current) {
      // невелика затримка, щоб блок встиг розкритися
      setTimeout(() => {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const bottomVisible = window.innerHeight - 40; // трохи запасу знизу

        // якщо низ акордіону виходить за межі екрана — докручуємо
        if (rect.bottom > bottomVisible) {
          window.scrollTo({
            top: scrollTop + (rect.bottom - bottomVisible),
            behavior: "smooth",
          });
        }
      }, 350);
    }
  }, [isOpen, _idx, total]);


  return (
    <section
      ref={sectionRef}
      className={`brandbook-acc__item ${isOpen ? "brandbook-acc__item--open" : ""}`}
    >
      {/* Хедер – лише заголовок і стрілка */}
      <button type="button" className="brandbook-acc__header" onClick={onToggle}>
        <div className="brandbook-acc__title-wrap">
          <h3 className="brandbook-acc__title">{title}</h3>
        </div>
        <span
          aria-hidden
          className={`brandbook-acc__arrow ${isOpen ? "brandbook-acc__arrow--up" : "brandbook-acc__arrow--down"
            }`}
        />
      </button>

      {/* Контент: під хедером — subtitle, картинка, текст */}
      <div
        className="brandbook-acc__content"
        style={{ maxHeight: isOpen ? height : 0 }}
      >
        <div ref={contentRef} className="brandbook-acc__inner">
          {subtitle && (
            <p
              className={`brandbook-acc__subtitle ${isOpen ? "brandbook-acc__subtitle--visible" : ""
                }`}
            >
              {subtitle}
            </p>
          )}
          {media && <div className="brandbook-acc__media">{media}</div>}
          <div className="brandbook-acc__body">{children}</div>
        </div>
      </div>
    </section>
  );
}
