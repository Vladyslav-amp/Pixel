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

}) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

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

  useEffect(() => {
  if (isOpen && sectionRef.current) {
    setTimeout(() => {
      const headerOffset = 80;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const offsetBottom = rect.top + scrollY - headerOffset - 16;

      window.scrollTo({
        top: offsetBottom,
        behavior: "smooth",
      });
    }, 350);
  }
}, [isOpen]);


  return (
    <section
      ref={sectionRef}
      className={`brandbook-acc__item ${isOpen ? "brandbook-acc__item--open" : ""}`}
    >
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
