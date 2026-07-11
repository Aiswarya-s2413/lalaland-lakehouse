import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { Preloader } from './components/Preloader';
import { SkyBackground } from './components/SkyBackground';
import { Navbar } from './components/Navbar';
import { WaterShimmer } from './components/WaterShimmer';
import { WordCycler } from './components/WordCycler';
import { StatsCounter } from './components/StatsCounter';
import { WhyComeSection } from './components/WhyComeSection';
import { WhoRediscoversSection } from './components/WhoRediscoversSection';
import { DroneFilmSection } from './components/DroneFilmSection';
import { OurStorySection } from './components/OurStorySection';
import { TheWaterSection } from './components/TheWaterSection';
import { StaysSection } from './components/StaysSection';
import { TheLandSection } from './components/TheLandSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { FoodSection } from './components/FoodSection';
import { TimelineSection } from './components/TimelineSection';
import { ArrivalSection } from './components/ArrivalSection';
import { InvitationSection } from './components/InvitationSection';
import { Footer } from './components/Footer';

// Ambient looping drone footage behind the hero text
const VideoBackground: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        opacity: 0.18, // subtle background blend
        pointerEvents: 'none',
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/iWJyFAAXEbY?autoplay=1&mute=1&controls=0&loop=1&playlist=iWJyFAAXEbY&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
        style={{
          width: '100vw',
          height: '56.25vw',
          minHeight: '100vh',
          minWidth: '177.77vh',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="Hero background drone film loop"
      />
    </div>
  );
};

function App() {
  // Activate scroll-reveal intersection observers
  useIntersectionObserver();

  return (
    <>
      {/* Sky Background system */}
      <SkyBackground />

      {/* Ripple Preloader */}
      <Preloader />

      {/* Navigation Top bar */}
      <Navbar />

      {/* Hero section */}
      <header className="hero" id="top">
        {/* Ambient Video Background */}
        <VideoBackground />
        
        {/* Canvas Shimmer particle overlay */}
        <WaterShimmer />

        <div className="ridges" aria-hidden="true">
          <svg viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path
              id="ridge1"
              fill="rgba(8,22,26,.55)"
              d="M0,170 C160,120 300,190 480,150 C660,110 800,180 980,140 C1160,100 1300,170 1440,135 L1440,300 L0,300 Z"
            />
            <path
              id="ridge2"
              fill="rgba(6,17,21,.8)"
              d="M0,220 C200,180 360,240 560,205 C760,170 900,235 1100,200 C1260,172 1360,225 1440,205 L1440,300 L0,300 Z"
            />
            <path
              id="ridge3"
              fill="rgba(4,12,16,.95)"
              d="M0,265 C240,235 420,280 640,255 C860,230 1020,278 1240,255 C1340,245 1400,262 1440,256 L1440,300 L0,300 Z"
            />
          </svg>
        </div>

        <div className="wrap hero-inner">
          <span className="crest-pill rv in">The Modern Life Antidote</span>
          <h1 style={{ maxWidth: '18ch' }}>
            <span className="ink">
              <span>Modern life is stressful,</span>
            </span>
            <span className="ink">
              <span>
                <em>lonely &amp; predictable.</em>
              </span>
            </span>
          </h1>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 300, marginTop: '20px', color: 'var(--day)' }} className="rv in d1">
            Come Re/Discover <WordCycler />
          </h2>
          <p className="hero-sub rv in d2">
            Thirty-five acres of forest and shoreline on an undiscovered lake so pure a city drinks from it. 
            A handful of rooms, hand-stitched canvas, silent boats — and the kind of quiet that can't be built, 
            only found at Lalaland Lakehouse.
          </p>
          <div className="hero-cta rv in d3">
            <a className="btn btn-sun" href="#invite">
              Plan Your Stay
            </a>
            <a className="btn btn-ghost" href="#why">
              Explore Lalaland
            </a>
          </div>
        </div>
        <span className="coords">18°55′ N · 73°14′ E · HETVANE BACKWATERS</span>
        <div className="scroll-cue">One scroll · one day</div>
      </header>

      {/* Manifesto Marquee line */}
      <div className="manifesto rv">
        <p>
          no wifi by the water <b>·</b> no jet skis, ever <b>·</b> no menus, just what's cooking <b>·</b> limited rooms, on
          purpose <b>·</b> no two sunsets alike
        </p>
      </div>
      <div className="hr-glow"></div>

      {/* Numbers Stats Strip */}
      <section style={{ paddingTop: '90px', paddingBottom: '70px' }}>
        <div className="wrap">
          <span className="eyebrow rv">The estate, in numbers</span>
          <div className="numbers">
            <StatsCounter target={35} suffix="AC" label="Private acres" delayClass="d1" />
            <StatsCounter target={2} suffix="KM" label="Own shoreline" delayClass="d2" />
            <StatsCounter target={270} suffix="°" label="Of open water" delayClass="d3" />
            <StatsCounter target={85} suffix="KM" label="From Colaba" delayClass="d4" />
            <StatsCounter target={0} label="Jet skis, ever" delayClass="d4" />
          </div>
        </div>
      </section>

      {/* Section 2: What Modern Life Takes */}
      <WhyComeSection />

      {/* Section 3: Who Rediscovers Here */}
      <WhoRediscoversSection />

      {/* YouTube Drone Film Section */}
      <DroneFilmSection />

      {/* Vinita & Dilip's Story (Letter) */}
      <OurStorySection />

      {/* Water Logbook section */}
      <TheWaterSection />

      {/* Stays & Specifications Section */}
      <StaysSection />

      {/* Section 4: The Place (The Land) */}
      <TheLandSection />

      {/* Activities Grid (Included/Add-on Tab Switcher) */}
      <ActivitiesSection />

      {/* Vinita's Kitchen Food Section */}
      <FoodSection />

      {/* Interactive Timeline: A Day Here, Roughly */}
      <TimelineSection />

      {/* Section 5: Getting Here (Distances & FAQ accordion) */}
      <ArrivalSection />

      {/* Referral introduction invite section with fireflies */}
      <InvitationSection />

      {/* Simple Footer */}
      <Footer />
    </>
  );
}

export default App;
