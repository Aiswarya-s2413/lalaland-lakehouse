import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { Preloader } from './components/Preloader';
import { SkyBackground } from './components/SkyBackground';
import { Navbar } from './components/Navbar';
import { WaterShimmer } from './components/WaterShimmer';
import { WhyComeSection } from './components/WhyComeSection';
import { WhoRediscoversSection } from './components/WhoRediscoversSection';
import { DroneFilmSection } from './components/DroneFilmSection';
import { StaysSection } from './components/StaysSection';
import { TheLandSection } from './components/TheLandSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { FoodSection } from './components/FoodSection';
import { WhatYouLeaveWithSection } from './components/WhatYouLeaveWithSection';
import { TimelineSection } from './components/TimelineSection';
import { ArrivalSection } from './components/ArrivalSection';
import { WhatsAppButton } from './components/WhatsAppButton';


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

        <div className="wrap hero-inner" style={{ position: 'relative', zIndex: 3 }}>
          <span className="crest-pill rv in">Modern life is stressful, lonely and predictable</span>
          <h1 style={{ maxWidth: '18ch' }}>
            <span className="ink">
              <span>Come</span>
            </span>
            <span className="ink">
              <span>
                <em>Re/Discover</em>
              </span>
            </span>
          </h1>
          
          <ul className="mono rv in d1" style={{ 
            listStyle: 'none', 
            marginTop: '24px', 
            fontSize: '18px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px',
            color: 'var(--sun)'
          }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--sun)' }}></span>
              Nature.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--sun)' }}></span>
              Play.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--sun)' }}></span>
              Connections.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--sun)' }}></span>
              Yourself.
            </li>
          </ul>

          <p className="hero-sub rv in d2" style={{ marginTop: '30px', fontWeight: 500 }}>
            Do it at Lalaland Lakehouse. The Modern Life Antidote.
          </p>
          <div className="hero-cta rv in d3">
            <a className="btn btn-sun" href="#stays">
              Plan Your Stay
            </a>
            <a className="btn btn-ghost" href="#why">
              Explore Lalaland
            </a>
          </div>
        </div>
      </header>

      {/* Section 2: What Modern Life Takes */}
      <WhyComeSection />

      {/* Section 3: Who Rediscovers Here */}
      <WhoRediscoversSection />

      {/* YouTube Drone Film Section */}
      <DroneFilmSection />

      {/* Stays & Specifications Section */}
      <StaysSection />

      {/* Section 4: The Place (The Land) */}
      <TheLandSection />

      {/* Activities Grid (Included/Add-on Tab Switcher) */}
      <ActivitiesSection />

      {/* Vinita's Kitchen Food Section */}
      <FoodSection />

      {/* What You Leave With Section */}
      <WhatYouLeaveWithSection />

      {/* Interactive Timeline: A Day Here, Roughly */}
      <TimelineSection />

      {/* Section 5: Getting Here (Distances & FAQ accordion) */}
      <ArrivalSection />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </>
  );
}

export default App;
