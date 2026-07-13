import React, { useState } from 'react';

export const ArrivalSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const distances = [
    { label: 'Colaba, South Mumbai', value: '85 km · ~2 hr via Atal Setu' },
    { label: 'Pune', value: '118 km · ~2 hr 40' },
    { label: 'Navi Mumbai Airport', value: '58 km (upcoming)' },
    { label: 'Pen railway station', value: '26 km' },
    { label: 'Hetvane Dam', value: '15 km' },
    { label: 'Caravans', value: 'Welcome · call for route notes' },
  ];

  const faqs = [
    {
      question: 'Is the road bike-friendly?',
      answer: 'Yes — the last stretch through reserve forest is a favourite with biking groups. Single-lane, scenic, manageable for most riders.',
    },
    {
      question: 'Do we need to bring food?',
      answer: 'No — meals are included and mandatory given the remote location. Just confirm preferences in advance.',
    },
    {
      question: 'What\'s the best time to visit?',
      answer: 'Post-monsoon through winter (October–February) for the clearest skies and easiest road conditions. Monsoon has its own beauty but the drive needs more care.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="arrive">
      <div className="wrap">
        <h2 className="rv d1" style={{ marginTop: '16px', fontFamily: 'var(--display)', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 58px)', color: 'var(--day)' }}>
          Getting Here
        </h2>
        <div className="arrive-grid" style={{ marginTop: '30px' }}>
          <div className="rv d2">
            <p style={{ fontWeight: 500, color: 'var(--sun)', fontSize: '18px', marginBottom: '16px' }}>
              Close enough for a weekend. Far enough to actually disappear.
            </p>
            <p>
              We're 21 km off the Pen–Khopoli road in Raigad district. The last stretch winds through 
              reserve forest on a single-lane road. Take it slow — that's not a warning, it's the 
              beginning of the rediscovery. Bikers especially: this road is yours. Regular cars can access the property. 
              The last 2 km is a rural road - comfortable in good weather. During monsoon, we recommend 
              checking with us before you set out.
            </p>
            <p style={{ marginTop: '16px', marginBottom: '24px' }}>
              Arriving after 5pm? Just let us know. Caretaker on-site daily 8am–8pm. 
              Exact address shared after booking. Free parking for cars, bikes, and caravans 
              just outside the gate.
            </p>
          </div>
          <div className="dist rv d3" aria-label="Distances">
            {distances.map((dist, idx) => (
              <div key={idx}>
                <span>{dist.label}</span>
                <span>{dist.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion FAQ block */}
        <div className="faq-accordion rv d2" style={{ marginTop: '48px' }}>
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
              <button className="faq-header" onClick={() => toggleFaq(index)}>
                <span className="faq-question">{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
