import { useEffect } from 'react';

export function useIntersectionObserver() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const targets = document.querySelectorAll('.rv, .ink');

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);
}
