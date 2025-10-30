import { useEffect, useState } from 'react';

export default function useSectionVisible(id, options = { threshold: 0.5 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [id, options]);

  return isVisible;
}
