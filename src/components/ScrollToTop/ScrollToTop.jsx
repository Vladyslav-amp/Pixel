import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const nav = performance.getEntriesByType?.("navigation")?.[0];
const IS_INITIAL_RELOAD =
  (nav && "type" in nav && nav.type === "reload") ||
  (performance?.navigation?.type === performance?.navigation?.TYPE_RELOAD);

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const initialPath = useRef(pathname);

  useEffect(() => {
    if (initialPath.current === pathname) {
      if (IS_INITIAL_RELOAD) {
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        requestAnimationFrame(() => {
          html.style.scrollBehavior = prev || "";
        });
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    window.scrollTo({ top: 0, left: 0, behavior: prefersReduced ? "auto" : "smooth" });
  }, [pathname]);

  return null;
}
