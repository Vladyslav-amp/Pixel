import React, {
  Children,
  cloneElement,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import "./BrandingAccordion.scss";

export function Accordion({ children, defaultOpen = 0 }) {
  const items = Children.toArray(children);
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="brandbook-acc" role="tablist" aria-multiselectable="false">
      {items.map((child, idx) =>
        cloneElement(child, {
          _idx: idx,
          total: items.length,
          isOpen: openIndex === idx,
          onToggle: () =>
            setOpenIndex((p) => (p === idx ? -1 : idx)),
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
  const innerRef = useRef(null);

  const [heightStyle, setHeightStyle] = useState(0);
  const isAnimatingRef = useRef(false);
  const hasInteracted = useRef(false);
  const didMountRef = useRef(false); // 🟢 прапор, щоб пропустити анімацію на монті

  // керуємо анімацією height (0 ↔ scrollHeight ↔ 'auto')
  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    const measure = () => inner.scrollHeight;

    // 🟢 перший рендер — без анімації
    if (!didMountRef.current) {
      didMountRef.current = true;
      setHeightStyle(isOpen ? "auto" : 0);
      isAnimatingRef.current = false;
      return;
    }

    // 🟡 звичайна поведінка для наступних відкриттів/закриттів
    if (isOpen) {
      isAnimatingRef.current = true;
      setHeightStyle(0);
      requestAnimationFrame(() => {
        setHeightStyle(measure());
      });
    } else {
      isAnimatingRef.current = true;
      setHeightStyle(measure());
      requestAnimationFrame(() => {
        setHeightStyle(0);
      });
    }
  }, [isOpen]); // 🔸 тільки isOpen — щоб не тригерилось через контент

  // після завершення transition фіксуємо 'auto' і делікатно скролимо
  useLayoutEffect(() => {
    const wrapper = sectionRef.current?.querySelector(".brandbook-acc__content");
    if (!wrapper) return;

    const onEnd = (e) => {
      if (e.propertyName !== "height") return;
      if (!isAnimatingRef.current) return;
      isAnimatingRef.current = false;

      if (isOpen) {
        setHeightStyle("auto");
        if (hasInteracted.current) {
          sectionRef.current?.scrollIntoView({
            block: "nearest",
            behavior: "smooth",
          });
        }
      }
    };

    wrapper.addEventListener("transitionend", onEnd);
    return () => wrapper.removeEventListener("transitionend", onEnd);
  }, [isOpen]);

  // ResizeObserver + img load → оновлюємо висоту лише коли відкрито і не 'auto'
  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const update = () => {
      if (!isOpen) return;
      if (heightStyle === "auto") return;
      setHeightStyle(inner.scrollHeight);
    };

    const ro = new ResizeObserver(update);
    ro.observe(inner);

    const imgs = Array.from(inner.querySelectorAll("img"));
    const onImgLoad = () => update();
    imgs.forEach((img) => img.addEventListener("load", onImgLoad, { once: true }));

    return () => {
      ro.disconnect();
      imgs.forEach((img) =>
        img.removeEventListener("load", onImgLoad)
      );
    };
  }, [isOpen, heightStyle]);

  const handleToggle = () => {
    hasInteracted.current = true;
    onToggle();
  };

  const contentId = `acc-panel-${title
    ?.toString()
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  return (
    <section
      ref={sectionRef}
      className={`brandbook-acc__item ${
        isOpen ? "brandbook-acc__item--open" : ""
      }`}
    >
      <button
        type="button"
        className="brandbook-acc__header"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        role="tab"
      >
        <div className="brandbook-acc__title-wrap">
          <h3 className="brandbook-acc__title">{title}</h3>
        </div>
        <span
          aria-hidden
          className={`brandbook-acc__arrow ${
            isOpen
              ? "brandbook-acc__arrow--up"
              : "brandbook-acc__arrow--down"
          }`}
        />
      </button>

      <div
        id={contentId}
        className="brandbook-acc__content"
        role="tabpanel"
        style={{
          height: heightStyle === "auto" ? "auto" : `${heightStyle}px`,
        }}
      >
        <div ref={innerRef} className="brandbook-acc__inner">
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
