// hooks/useActiveSection.js
import { useEffect, useState } from 'react';

export default function useActiveSection(sectionIds = [], options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] || null);
  const { offsetTop = 0.2 } = options; // 20% від висоти в’юпорту

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;

      if (y < 8) {
        if (sectionIds[0] && activeId !== sectionIds[0]) setActiveId(sectionIds[0]);
        return;
      }

      const vh = window.innerHeight;
      const trigger = vh * offsetTop;

      let current = sectionIds[0];
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= trigger) current = sectionIds[i];
        else break;
      }

      if (current !== activeId) setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds, offsetTop, activeId]);


  return activeId;
}
