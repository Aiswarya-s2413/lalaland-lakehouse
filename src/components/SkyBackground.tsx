import React, { useEffect, useState } from 'react';

export const SkyBackground: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const progress = window.scrollY / docHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parabolic path: x goes from 15vw to 85vw across the viewport
  const x = 15 + scrollProgress * 70;
  // y follows a parabola: peaks high (22vh) at 50% scroll, sinks low (78vh) at 0% and 100% scroll
  const y = 22 + 224 * Math.pow(scrollProgress - 0.5, 2);

  // Dynamic backgrounds based on day timeline scroll
  let skyBg = 'linear-gradient(180deg, #081B22, #123740)';
  let orbBg = 'radial-gradient(circle, rgba(224,138,78,.55), rgba(224,138,78,.12) 45%, transparent 70%)';

  if (scrollProgress < 0.25) {
    // Dawn to Morning (0% - 25% Scroll)
    const t = scrollProgress / 0.25;
    skyBg = 'linear-gradient(180deg, #081B22, #123740)';
    orbBg = `radial-gradient(circle, rgba(224, 138, 78, ${0.55 - t * 0.05}), rgba(217, 164, 65, ${0.12 + t * 0.15}) 45%, transparent 70%)`;
  } else if (scrollProgress < 0.6) {
    // Morning to High Noon (25% - 60% Scroll)
    const t = (scrollProgress - 0.25) / 0.35;
    skyBg = 'linear-gradient(180deg, #0a252f, #144453)';
    orbBg = `radial-gradient(circle, rgba(217, 164, 65, ${0.5 + t * 0.1}), rgba(217, 164, 65, ${0.27 - t * 0.07}) 45%, transparent 70%)`;
  } else if (scrollProgress < 0.85) {
    // Noon to Sunset (60% - 85% Scroll)
    const t = (scrollProgress - 0.6) / 0.25;
    // Deep orange/amber sunset gradients
    skyBg = `linear-gradient(180deg, #091f27, #211c1d)`;
    orbBg = `radial-gradient(circle, rgba(${217 + t * 7}, ${164 - t * 26}, 65, ${0.6 + t * 0.1}), rgba(${217 + t * 7}, 138, 65, 0.2) 45%, transparent 70%)`;
  } else {
    // Sunset to Deep Night (85% - 100% Scroll)
    const t = (scrollProgress - 0.85) / 0.15;
    skyBg = 'linear-gradient(180deg, #030d12, #081a22)';
    // Sun turns into a soft silver moon
    orbBg = `radial-gradient(circle, rgba(241, 235, 217, ${0.7 - t * 0.3}), rgba(241, 235, 217, 0.08) 45%, transparent 70%)`;
  }

  return (
    <>
      <div id="sky" style={{ background: skyBg }}></div>
      <div
        id="orb"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          background: orbBg,
          transition: 'none', // Absolute synchronization with scroll coordinates
        }}
      ></div>
      <div id="grain"></div>
    </>
  );
};
