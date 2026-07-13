import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`topbar ${isScrolled ? 'scrolled' : ''}`} id="topbar">
      <div className="wrap">
        <a className="logo-lockup" href="#top" onClick={closeMobileMenu}>
          <svg className="logo-crest" viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <path id="ringPath" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
            </defs>
            <circle cx="50" cy="50" r="48" fill="none" stroke="#D9A441" stroke-width="1.4" />
            <circle cx="50" cy="50" r="27" fill="none" stroke="rgba(217,164,65,.55)" stroke-width="1" />
            <g className="ring-text">
              <text fontFamily="'IBM Plex Mono',monospace" fontSize="8.6" letterSpacing="2.1" fill="#F1EBD9">
                <textPath href="#ringPath">LALALAND LAKEHOUSE · EST. 2007 ·</textPath>
              </text>
            </g>
            <g stroke="#D9A441" strokeWidth="2.6" strokeLinecap="round" fill="none">
              <line x1="50" y1="33" x2="50" y2="58" />
            </g>
            <ellipse cx="50" cy="63" rx="4.6" ry="7.5" fill="#D9A441" />
            <path d="M36 72 q4.5 -4 9 0 q4.5 4 9 0 q4.5 -4 10 0" fill="none" stroke="#F1EBD9" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M40 78 q4 -3.4 8 0 q4 3.4 8 0 q4 -3.4 8 0" fill="none" stroke="rgba(241,235,217,.6)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className="logo-words">
            <span className="name">Lala<b>land</b>lakehouse</span>
            <span className="club">The Modern Life Antidote</span>
          </span>
        </a>
        
        <button 
          className={`mobile-nav-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={isMobileMenuOpen ? 'open' : ''}>
          <a href="#why" onClick={closeMobileMenu}>Antidote</a>
          <a href="#who" onClick={closeMobileMenu}>Who comes</a>
          <a href="#stays" onClick={closeMobileMenu}>Stays</a>
          <a href="#do" onClick={closeMobileMenu}>Do</a>
          <a href="#food" onClick={closeMobileMenu}>Food</a>
          <a href="#land" onClick={closeMobileMenu}>The land</a>
          <a href="#arrive" onClick={closeMobileMenu}>Arrival</a>
        </nav>
      </div>
    </div>
  );
};
