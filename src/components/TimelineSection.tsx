import React, { useState } from 'react';

export const TimelineSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const timelineItems = [
    {
      time: 'Before Dawn',
      label: 'Rediscover: Your Own Pace',
      title: 'The world wakes without asking you',
      desc: 'Birdsong arrives before the light does. The beds are deep and the room is dark and nobody needs you anywhere. If you get up, it\'s because you want to — and the lake in the first light is something you won\'t want to have missed.',
    },
    {
      time: 'Morning',
      label: 'Rediscover: What a Meal is Supposed to Feel Like',
      title: 'Breakfast that came from the ground outside',
      desc: 'Farm vegetables, Mrs. Lala\'s kitchen, and no reason to rush. You eat slowly. You notice the taste. Someone has already claimed the jhoola. There is no agenda. This is the whole plan.',
    },
    {
      time: 'Mid-Morning',
      label: 'Rediscover: Curiosity',
      title: 'Walk the land with Mr. Lala',
      desc: 'Dilip has been watching this place change for nearly twenty years. He knows where the kingfishers nest, why the submerged trees are still standing, which path leads to the part of the shoreline nobody else finds. You won\'t look at the lake the same way after.',
    },
    {
      time: 'Afternoon',
      label: 'Rediscover: Stillness',
      title: 'The hammock wins every argument',
      desc: 'A picnic by the lake. Binoculars on something slow-moving in the canopy. A board game that goes longer than expected. Or just lying in the shade doing precisely nothing — and noticing that nothing is, in fact, everything.',
    },
    {
      time: 'Dusk',
      label: 'Rediscover: Real Conversation',
      title: 'The fire pit. The BBQ. The sky doing something embarrassing.',
      desc: 'The lake holds the last light longer than seems fair. The fire gets going. Something about a flame and the absence of anything else competing for attention makes people say the things they\'ve been meaning to say.',
    },
    {
      time: 'Night',
      label: 'Rediscover: Wonder',
      title: 'A sky you forgot was possible',
      desc: 'No light pollution. No city glow. The telescope comes out. Someone who has never cared about astronomy starts asking questions. You sleep in a way you\'d forgotten — the kind that actually restores you.',
    },
  ];

  return (
    <section id="days">
      <div className="wrap">
        <span className="eyebrow rv">Days here</span>
        <h2 className="rv d1" style={{ marginTop: '16px' }}>
          Time moves differently <em>on the water.</em>
        </h2>

        <div className="timeline-container rv d2">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-label">{item.time} &middot; {item.label}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
