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
          total: items.length,
          isOpen: openIndex === idx,
          onToggle: () => setOpenIndex((p) => (p === idx ? -1 : idx)),
        })
      )}
    </div>
  );
}

export function AccordionItem({
  title,
  subtitle,
  media,
  children,
  isOpen,
  onToggle,
}) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // ⚡ прапорець, щоб не скролило при першому рендері
  const hasInteracted = useRef(false);
  const prevOpen = useRef(false);

  // оновлення висоти контенту
  useEffect(() => {
    function updateHeight() {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    }

    if (isOpen) {
      updateHeight();
      const timer = setTimeout(updateHeight, 400);
      window.addEventListener("resize", updateHeight);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", updateHeight);
      };
    }
  }, [isOpen, children, media]);

  // прокрутка тільки після взаємодії
  useEffect(() => {
    if (isOpen && sectionRef.current && hasInteracted.current && !prevOpen.current) {
      setTimeout(() => {
        const headerOffset = 80; // висота фіксованого меню
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;

        // позиція для центру акордеону
        const scrollToY =
          scrollY + rect.top + rect.height / 2 - viewportHeight / 2 - headerOffset / 2;

        window.scrollTo({
          top: scrollToY,
          behavior: "smooth",
        });
      }, 400);
    }
    prevOpen.current = isOpen;
  }, [isOpen]);

  const handleToggle = () => {
    hasInteracted.current = true; // 🔹 тепер скролимо тільки після кліку користувача
    onToggle();
  };

  return (
    <section
      ref={sectionRef}
      className={`brandbook-acc__item ${isOpen ? "brandbook-acc__item--open" : ""}`}
    >
      <button type="button" className="brandbook-acc__header" onClick={handleToggle}>
        <div className="brandbook-acc__title-wrap">
          <h3 className="brandbook-acc__title">{title}</h3>
        </div>
        <span
          aria-hidden
          className={`brandbook-acc__arrow ${
            isOpen ? "brandbook-acc__arrow--up" : "brandbook-acc__arrow--down"
          }`}
        />
      </button>

      <div
        className="brandbook-acc__content"
        style={{ maxHeight: isOpen ? height : 0 }}
      >
        <div ref={contentRef} className="brandbook-acc__inner">
          {subtitle && (
            <p
              className={`brandbook-acc__subtitle ${
                isOpen ? "brandbook-acc__subtitle--visible" : ""
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
