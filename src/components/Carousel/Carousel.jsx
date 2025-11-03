import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Carousel.scss";

export default function Carousel({
  items = [],
  initialIndex = 0,
  loop = true,
  title = "Gallery",
  onChange,
  mouseDrag = false, // мишкою не тягнемо
}) {
  const [index, setIndex] = useState(
    Math.min(Math.max(initialIndex, 0), Math.max(items.length - 1, 0))
  );

  const trackRef = useRef(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);
  const slideWidth = useRef(0);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

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

  // клавіші ← →
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // drag / swipe (мишкою тільки якщо дозволено)
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
      trackRef.current.style.transition = "";
      viewport.classList.remove("carousel__viewport--dragging");
      isDragging.current = false;

      if (dx > threshold) prev();
      else if (dx < -threshold) next();
      else trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    };

    if (mouseDrag) {
      viewport.addEventListener("mousedown", onDown);
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    }

    viewport.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      if (mouseDrag) {
        viewport.removeEventListener("mousedown", onDown);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      }
      viewport.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [index, next, prev, mouseDrag]);

  // плавний перехід
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 320ms ease";
      trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  // центрування стрілок по viewport
  useEffect(() => {
    const viewport = trackRef.current?.parentElement;
    const container = viewport?.parentElement;
    if (!viewport || !container || !prevBtnRef.current || !nextBtnRef.current) return;

    const positionArrows = () => {
      const vr = viewport.getBoundingClientRect();
      const cr = container.getBoundingClientRect();
      const centerY = vr.top - cr.top + vr.height / 2;
      [prevBtnRef.current, nextBtnRef.current].forEach((btn) => {
        btn.style.top = `${centerY}px`;
        btn.style.transform = "translateY(-50%)";
      });
    };

    positionArrows();
    window.addEventListener("resize", positionArrows);
    let ro;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(positionArrows);
      ro.observe(viewport);
    }
    return () => {
      window.removeEventListener("resize", positionArrows);
      if (ro) ro.disconnect();
    };
  }, []);

  const canPrev = loop || index > 0;
  const canNext = loop || index < items.length - 1;

  // пагінація: 3 точки з циклічною активною (1→2→3→1…)
  const { dots, activePos } = useMemo(() => {
    const n = items.length;
    if (n === 0) return { dots: [], activePos: 0 };
    if (n <= 3)
      return { dots: Array.from({ length: n }, (_, i) => i), activePos: Math.min(index, n - 1) };

    if (loop) {
      const base = index - (index % 3);
      const dots = [0, 1, 2].map((p) => (base + p) % n);
      const activePos = index % 3;
      return { dots, activePos };
    } else {
      const start = Math.max(0, Math.min(index - 1, n - 3));
      const dots = [start, start + 1, start + 2];
      const activePos = Math.min(index - start, 2);
      return { dots, activePos };
    }
  }, [items.length, index, loop]);

  return (
    <div className="carousel" aria-roledescription="carousel">
      <div className="carousel__viewport">
        <div className="carousel__track" ref={trackRef}>
          {items.map((src, i) => (
            <div className="carousel__slide" role="group" aria-label={`${i + 1}/${items.length}`} key={i}>
              <img className="carousel__img" src={src} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* стрілки поза viewport */}
      <button
        ref={prevBtnRef}
        className="carousel__arrow carousel__arrow--prev"
        onClick={prev}
        disabled={!canPrev}
        aria-label="Previous slide"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="15.999" cy="15.999" r="13.038" stroke="#0C0C0B" />
          <path
            d="M9.57 16.354c-.195-.195-.195-.512 0-.707l3.182-3.182c.195-.195.511-.195.707 0 .195.195.195.512 0 .707L10.63 16l2.828 2.828c.195.195.195.512 0 .707a.5.5 0 0 1-.707 0L9.57 16.354ZM21 16v.5H9.923V16v-.5H21V16Z"
            fill="#0C0C0B"
          />
        </svg>
      </button>

      <button
        ref={nextBtnRef}
        className="carousel__arrow carousel__arrow--next"
        onClick={next}
        disabled={!canNext}
        aria-label="Next slide"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="15.999" cy="15.999" r="13.038" stroke="#0C0C0B" />
          <path
            d="M9.57 16.354c-.195-.195-.195-.512 0-.707l3.182-3.182c.195-.195.511-.195.707 0 .195.195.195.512 0 .707L10.63 16l2.828 2.828c.195.195.195.512 0 .707a.5.5 0 0 1-.707 0L9.57 16.354ZM21 16v.5H9.923V16v-.5H21V16Z"
            fill="#0C0C0B"
          />
        </svg>
      </button>

      {/* пагінація 3 точки */}
      <div className="carousel__dots" role="tablist" aria-label="Пагінація">
        {dots.map((slideIdx, pos) => (
          <button
            key={`dot-${slideIdx}-${pos}`}
            role="tab"
            aria-selected={pos === activePos}
            className={`carousel__dot${pos === activePos ? " carousel__dot--active" : ""}`}
            onClick={() => goTo(slideIdx)}
            aria-label={`Go to slide ${slideIdx + 1}`}
            type="button"
          />
        ))}
      </div>

      <h3 className="carousel__title">{title}</h3>
    </div>
  );
}
