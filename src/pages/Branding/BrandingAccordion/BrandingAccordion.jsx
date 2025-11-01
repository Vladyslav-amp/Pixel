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
  title, subtitle, media, children, isOpen, onToggle,
}) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);


  const hasInteracted = useRef(false);
  const prevOpen = useRef(false);
  const didScrollForThisOpen = useRef(false);


  useEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;


    setHeight(el.scrollHeight);


    const ro = new ResizeObserver(() => {
      if (isOpen && contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    });
    ro.observe(el);

    const imgs = Array.from(el.querySelectorAll('img'));
    const onImgLoad = () => {
      if (contentRef.current) setHeight(contentRef.current.scrollHeight);
    };
    imgs.forEach(img => img.addEventListener('load', onImgLoad, { once: true }));

    return () => {
      ro.disconnect();
      imgs.forEach(img => img.removeEventListener('load', onImgLoad));
    };
  }, [isOpen, children, media, subtitle]);

  useEffect(() => {
    if (!isOpen || !sectionRef.current || !hasInteracted.current) {
      prevOpen.current = isOpen;
      return;
    }
    if (!prevOpen.current) didScrollForThisOpen.current = false;

    const panel = sectionRef.current.querySelector('.brandbook-acc__content');
    if (!panel) {
      prevOpen.current = isOpen;
      return;
    }

    const onEnd = (e) => {
      if (e.propertyName !== 'max-height' || didScrollForThisOpen.current) return;

      const headerOffset = 80;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      const fullyVisible = rect.top >= headerOffset && rect.bottom <= vh;
      if (fullyVisible) {
        panel.removeEventListener('transitionend', onEnd);
        return;
      }

      const targetY = scrollY + rect.top + rect.height / 2 - vh / 2 - headerOffset / 2;

      const delta = Math.abs(window.scrollY - targetY);
      if (delta > 24) {
        didScrollForThisOpen.current = true;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      }

      panel.removeEventListener('transitionend', onEnd);
    };

    panel.addEventListener('transitionend', onEnd);
    prevOpen.current = isOpen;
    return () => panel.removeEventListener('transitionend', onEnd);
  }, [isOpen]);

  const handleToggle = () => {
    hasInteracted.current = true;
    onToggle();
  };

  return (
    <section
      ref={sectionRef}
      className={`brandbook-acc__item ${isOpen ? 'brandbook-acc__item--open' : ''}`}
    >
      <button type="button" className="brandbook-acc__header" onClick={handleToggle}>
        <div className="brandbook-acc__title-wrap">
          <h3 className="brandbook-acc__title">{title}</h3>
        </div>
        <span
          aria-hidden
          className={`brandbook-acc__arrow ${isOpen ? 'brandbook-acc__arrow--up' : 'brandbook-acc__arrow--down'}`}
        />
      </button>

      <div className="brandbook-acc__content" style={{ maxHeight: isOpen ? height : 0 }}>
        <div ref={contentRef} className="brandbook-acc__inner">
          {subtitle && (
            <p className={`brandbook-acc__subtitle ${isOpen ? 'brandbook-acc__subtitle--visible' : ''}`}>
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
