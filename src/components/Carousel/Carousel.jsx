import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Carousel.scss";

export default function Carousel({
  items = [],
  initialIndex = 0,
  loop = true,
  title = "Галерея",      // тайтл задаєш тут іззовні
  onChange,               // опційно: (i) => void
}) {
  const [index, setIndex] = useState(
    Math.min(Math.max(initialIndex, 0), Math.max(items.length - 1, 0))
  );
  const trackRef = useRef(null);

  // drag/swipe
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);
  const slideWidth = useRef(0);

  const goTo = useCallback(
    (next) => {
      if (!items.length) return;
      let i = next;
      if (loop) i = (next + items.length) % items.length;
      else i = Math.min(Math.max(next, 0), items.length - 1);
      setIndex(i);
      onChange?.(i);
    },
    [items.length, loop, onChange]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // клавіші
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // pointer/touch drag
  useEffect(() => {
    const viewport = trackRef.current?.parentElement;
    if (!viewport) return;

    const onDown = (e) => {
      isDragging.current = true;
      startX.current = e.touches ? e.touches[0].clientX : e.clientX;
      currentX.current = startX.current;
      slideWidth.current = viewport.clientWidth;
      viewport.classList.add("carousel__viewport--dragging");
    };

    const onMove = (e) => {
      if (!isDragging.current) return;
      currentX.current = e.touches ? e.touches[0].clientX : e.clientX;
      const dx = currentX.current - startX.current;
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(calc(-${index * 100}% + ${dx}px))`;
    };

    const onUp = () => {
      if (!isDragging.current) return;
      const dx = currentX.current - startX.current;
      const threshold = Math.max(40, slideWidth.current * 0.15);
      trackRef.current.style.transition = ""; // повертаємо анімацію
      viewport.classList.remove("carousel__viewport--dragging");
      isDragging.current = false;

      if (dx > threshold) prev();
      else if (dx < -threshold) next();
      else {
        trackRef.current.style.transform = `translateX(-${index * 100}%)`;
      }
    };

    viewport.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    viewport.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      viewport.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      viewport.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [index, next, prev]);

  // позиція
  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = "transform 320ms ease";
    trackRef.current.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  const canPrev = loop || index > 0;
  const canNext = loop || index < items.length - 1;

  return (
    <div className="carousel" aria-roledescription="carousel">
      <div className="carousel__viewport">
        <div className="carousel__track" ref={trackRef}>
          {items.map((src, i) => (
            <div
              className="carousel__slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${items.length}`}
              key={i}
            >
              <img className="carousel__img" src={src} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* ПАГІНАЦІЯ — під каруселлю */}
      <div className="carousel__dots" role="tablist" aria-label="Пагінація">
        {items.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            className={`carousel__dot${i === index ? " carousel__dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ТАЙТЛ + стрілки — під пагінацією, стрілки біля тайтла */}
      <div className="carousel__header">
        <button
          className="carousel__arrow carousel__arrow--prev"
          onClick={prev}
          disabled={!canPrev}
          aria-label="prev slide"
        >
          ‹
        </button>

        <h3 className="carousel__title">{title}</h3>

        <button
          className="carousel__arrow carousel__arrow--next"
          onClick={next}
          disabled={!canNext}
          aria-label="next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}
