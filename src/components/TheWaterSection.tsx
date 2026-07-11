import React from 'react';

export const TheWaterSection: React.FC = () => {
  const logs = [
    {
      no: 'LOG 01',
      name: 'Swim off the rocks',
      desc: 'Clear, deep, cool water off our own shoreline. Morning swims are a religion here.',
    },
    {
      no: 'LOG 02',
      name: 'Paddle at first light',
      desc: 'The water turns to glass before 8 am. Standing on it feels like cheating.',
    },
    {
      no: 'LOG 03',
      name: 'Kayak the backwaters',
      desc: 'Coves, inlets and islands across 270° of open lake — and monsoon waterfalls to paddle to.',
    },
    {
      no: 'LOG 04',
      name: 'The silent boat',
      desc: 'An electric sundowner cruise along the forest\'s edge. Herons, kingfishers, the long gold hour.',
    },
    {
      no: 'LOG 05',
      name: 'Do absolutely nothing',
      desc: 'Our most-booked activity. A hammock, the waterline, a phone left back at the shack.',
    },
  ];

  return (
    <section id="water">
      <div className="wrap">
        <span className="eyebrow rv">The water</span>
        <h2 className="rv d1" style={{ marginTop: '16px' }}>
          This lake is so clean, <em>a city drinks it.</em>
        </h2>
        <p className="lede rv d2">
          The Hetvane backwaters supply drinking water to Navi Mumbai — which is why
          petrol engines are banned here, and the loudest thing on the lake is a paddle.
          Swimmable, drinkable, and shared with almost no one.
        </p>
        <div className="logbook rv d2">
          {logs.map((log, index) => (
            <div key={index} className="log-row">
              <span className="log-no">{log.no}</span>
              <span className="log-name">{log.name}</span>
              <span className="log-desc">{log.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
