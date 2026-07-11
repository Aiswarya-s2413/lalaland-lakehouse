import React, { useEffect, useState, useRef } from 'react';

interface StatsCounterProps {
  target: number;
  suffix?: string;
  label: string;
  delayClass?: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ target, suffix = '', label, delayClass = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    if (target === 0) {
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 1500; // 1.5 seconds total duration
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = duration / frameRate;
    const increment = target / totalFrames;

    let currentFrame = 0;
    const timer = setInterval(() => {
      currentFrame++;
      start += increment;
      if (currentFrame >= totalFrames || start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div ref={elementRef} className={`num rv ${delayClass}`}>
      <div className="val">
        <span>{count}</span>
        {suffix && <i>{suffix}</i>}
      </div>
      <div className="lab">{label}</div>
    </div>
  );
};
