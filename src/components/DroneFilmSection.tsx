import React from 'react';

export const DroneFilmSection: React.FC = () => {
  return (
    <section id="film" style={{ paddingTop: '40px' }}>
      <div className="wrap">
        <div className="film-frame rv">
          <iframe
            src="https://www.youtube-nocookie.com/embed/iWJyFAAXEbY?rel=0"
            title="Drone film over the lake at Lalalandlakehouse"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="film-cap rv d1">
          <span>Three minutes over the lake — flown one winter morning</span>
          <span>Hetvane backwaters, Raigad</span>
        </p>
      </div>
    </section>
  );
};
