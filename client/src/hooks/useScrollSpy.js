import { useEffect, useRef, useState } from "react";

const useScrollSpy = (sectionIds, offset = 80) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const lastActive = useRef(activeId);

  useEffect(() => {
    if (!sectionIds.length) return;

    const observers = [];

    const onIntersect = (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length === 0) return;

      const nextId = visibleSections[0].target.id;

      // prevent flickering
      if (lastActive.current !== nextId) {
        requestAnimationFrame(() => {
          lastActive.current = nextId;
          setActiveId(nextId);
        });
      }
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(onIntersect, {
        root: null,
        rootMargin: `-${offset}px 0px -45% 0px`,
        threshold: [0.2, 0.4, 0.6],
      });

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
