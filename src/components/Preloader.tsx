import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={done ? 'done' : ''} aria-hidden="true">
      <div className="ripples">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="word">
        Lala<b>land</b>lakehouse
      </div>
    </div>
  );
};
