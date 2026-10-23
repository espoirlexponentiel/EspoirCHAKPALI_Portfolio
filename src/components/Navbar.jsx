import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { Send } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['accueil', 'a-propos', 'expertises', 'parcours', 'projets', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-brand" onClick={() => scrollTo('accueil')}>
        <div className="nav-logo-box">
          <img src={logoImg} alt="Espoir Chakpali Logo" className="nav-logo-img" />
        </div>
        <div className="nav-brand-text">
          <span className="nav-brand-name">ESPOIR CHAKPALI</span>
          <span className="nav-brand-title">Full Stack & IA</span>
        </div>
      </div>

      <nav className="nav-links" aria-label="Navigation Principale">
        <button
          className={`nav-link ${activeSection === 'accueil' ? 'active' : ''}`}
          onClick={() => scrollTo('accueil')}
        >
          Accueil
        </button>
        <button
          className={`nav-link ${activeSection === 'a-propos' ? 'active' : ''}`}
          onClick={() => scrollTo('a-propos')}
        >
          Qui suis-je
        </button>
        <button
          className={`nav-link ${activeSection === 'expertises' ? 'active' : ''}`}
          onClick={() => scrollTo('expertises')}
        >
          Expertises
        </button>
        <button
          className={`nav-link ${activeSection === 'parcours' ? 'active' : ''}`}
          onClick={() => scrollTo('parcours')}
        >
          Parcours
        </button>
        <button
          className={`nav-link ${activeSection === 'projets' ? 'active' : ''}`}
          onClick={() => scrollTo('projets')}
        >
          Projets
        </button>
      </nav>

      <div className="navbar-actions">
        <button
          onClick={() => scrollTo('contact')}
          className="btn btn-primary"
        >
          <Send size={15} />
          <span>Me Contacter</span>
        </button>

        <button
          className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          <button
            className={`mobile-nav-link ${activeSection === 'accueil' ? 'active' : ''}`}
            onClick={() => scrollTo('accueil')}
          >
            Accueil
          </button>
          <button
            className={`mobile-nav-link ${activeSection === 'a-propos' ? 'active' : ''}`}
            onClick={() => scrollTo('a-propos')}
          >
            Qui suis-je
          </button>
          <button
            className={`mobile-nav-link ${activeSection === 'expertises' ? 'active' : ''}`}
            onClick={() => scrollTo('expertises')}
          >
            Expertises
          </button>
          <button
            className={`mobile-nav-link ${activeSection === 'parcours' ? 'active' : ''}`}
            onClick={() => scrollTo('parcours')}
          >
            Parcours
          </button>
          <button
            className={`mobile-nav-link ${activeSection === 'projets' ? 'active' : ''}`}
            onClick={() => scrollTo('projets')}
          >
            Projets
          </button>
          <button
            className="btn btn-primary"
            style={{ marginTop: '10px', width: '100%', justifyContent: 'center' }}
            onClick={() => scrollTo('contact')}
          >
            <Send size={15} />
            <span>Me Contacter</span>
          </button>
        </div>
      )}
    </header>
  );
}
