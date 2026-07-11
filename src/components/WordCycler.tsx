import React, { useEffect, useState } from 'react';

const words = ['Nature.', 'Play.', 'Connections.', 'Yourself.'];

export const WordCycler: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setTransitioning(false);
      }, 400); // Matches the CSS transition duration
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`word-cycler ${transitioning ? 'transitioning' : ''}`}>
      {words[index]}
    </span>
  );
};
