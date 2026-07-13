import React, { useState } from 'react';

export const TimelineSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const timelineItems = [
    {
      time: 'Before dawn',
      title: 'The world wakes up without asking you.',
      desc: 'Birdsong arrives before the light does. You can ignore it - the beds are deep, the blinds are thick — or you can be there for the moment the lake turns gold. Either is the right choice.',
    },
    {
      time: 'Morning',
      title: 'Tea on the aangan. No plan required.',
      desc: "Mrs. Lala's breakfast arrives - farm-fresh, unhurried, made with the kind of care that makes you eat more slowly. The jhoola is already occupied by someone who got there first.",
    },
    {
      time: 'Mid-morning',
      title: 'Walk the land with Mr. Lala.',
      desc: "35 acres, two kilometres of shoreline, and someone who has been watching this place change for nearly two decades. He knows where the kingfishers nest. He'll tell you the story of the submerged trees. You won't look at the lake the same way after.",
    },
    {
      time: 'Afternoon',
      title: 'The hammock wins every argument.',
      desc: 'A picnic by the lake. A board game that goes longer than expected. Binoculars trained on something slow-moving in the canopy. Or absolutely nothing. All equally valid.',
    },
    {
      time: 'Dusk',
      title: 'The fire pit. The BBQ. The sky doing something embarrassing.',
      desc: 'The lake holds the last light longer than seems fair. Conversations drift somewhere honest. The kind you meant to have six months ago.',
    },
    {
      time: 'Night',
      title: 'A sky you forgot was possible.',
      desc: "No streetlights. No city glow. The telescope comes out. Someone who has never cared about astronomy starts asking questions. You sleep in a way you'd forgotten.",
    },
  ];

  return (
    <section id="days">
      <div className="wrap">
        <h2 className="rv d1" style={{ marginTop: '16px', fontFamily: 'var(--display)', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 58px)', color: 'var(--day)' }}>
          A day here, roughly
        </h2>

        <div className="timeline-container rv d2" style={{ marginTop: '40px' }}>
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-label" style={{ color: 'var(--sun)', fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'lowercase', letterSpacing: '0.15em' }}>
                  {item.time}
                </span>
                <h3 className="timeline-title" style={{ fontSize: '20px', fontWeight: 300, marginTop: '6px' }}>{item.title}</h3>
                <p className="timeline-desc" style={{ color: 'rgba(241,235,217,0.7)', fontSize: '15px', fontWeight: 300, marginTop: '8px' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
