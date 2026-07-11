import React from 'react';

export const OurStorySection: React.FC = () => {
  return (
    <section id="story">
      <div className="narrow">
        <span className="eyebrow rv">Our story</span>
        <h2 className="rv d1" style={{ marginTop: '16px' }}>
          We didn't build a resort. <em>We stayed.</em>
        </h2>
        <div className="letter rv d2" style={{ marginTop: '50px' }}>
          <p className="salute">From Dilip &amp; Vinita</p>
          <p>
            In 2007, on one of our drives out of Mumbai, we took a wrong-ish turn off the
            Pen–Khopoli road and ended up at the edge of a lake nobody we knew had ever
            mentioned. Twenty-one kilometres of winding road through a reserve forest, and
            then — water in every direction, hills behind it, and a silence we hadn't
            heard in years.
          </p>
          <p>
            We're engineers by training and software people by profession. We've spent our
            working lives in front of screens, which is probably why this place hit us the
            way it did. We bought four acres that year. We never really left.
          </p>
          <p>
            Over nearly two decades, the villagers of Dhamni became our neighbours and then
            our friends. They taught us to build with what the land gives — the laterite
            brick came from here, the stone steps were laid by hands that knew this hill,
            and the food Vinita cooks carries recipes the Adivasi community has held for
            generations. Today we live and run a small homestay on
            <strong> thirty-five acres between the lake and the forest</strong> — planted
            the permaculture way, powered mostly by the sun, with two kilometres of
            shoreline that still looks the way it did the day we found it.
          </p>
          <p>
            What we offer now is not luxury as the brochures mean it. It's the rarer thing:
            <strong> an entire landscape, kept quiet</strong> — and a place in it, for very
            few people at a time. Lalalandlakehouse is the next chapter. We hope it becomes
            yours too.
          </p>
          <div className="sign">
            Dilip &amp; Vinita Lala
            <small>Dhamni village, Raigad · with Mohit, two dogs &amp; the herons</small>
          </div>
        </div>
      </div>
    </section>
  );
};
