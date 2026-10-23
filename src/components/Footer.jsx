import React from 'react';
import logoImg from '../assets/logo.png';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Download, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {/* Brand Col */}
        <div className="footer-brand">
          <div className="footer-logo" onClick={() => scrollTo('accueil')} style={{ cursor: 'pointer' }}>
            <div className="footer-logo-box">
              <img src={logoImg} alt="Espoir Chakpali Logo" className="footer-logo-img" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, fontSize: '18px', color: 'var(--navy-deep)' }}>
                ESPOIR CHAKPALI
              </span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold-deep)', letterSpacing: '0.04em' }}>
                CONCEPTEUR DÉVELOPPEUR FULL STACK & IA
              </span>
            </div>
          </div>

          <p className="footer-desc">
            Conception d'architectures logicielles, modélisation d'intelligence artificielle 
            et analyse de données au service de la performance et de la transformation digitale.
          </p>

          <div className="footer-socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-link"
              title="Email"
            >
              <Mail size={17} />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="footer-social-link"
              title="Téléphone"
            >
              <Phone size={17} />
            </a>
            <a
              href={personalInfo.cvFile}
              download="CV_Espoir_Chakpali.pdf"
              className="footer-social-link"
              title="Télécharger mon CV"
            >
              <Download size={17} />
            </a>
          </div>
        </div>

        {/* Navigation Rapide */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#accueil" onClick={(e) => { e.preventDefault(); scrollTo('accueil'); }}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#a-propos" onClick={(e) => { e.preventDefault(); scrollTo('a-propos'); }}>
                Qui suis-je
              </a>
            </li>
            <li>
              <a href="#expertises" onClick={(e) => { e.preventDefault(); scrollTo('expertises'); }}>
                Expertises
              </a>
            </li>
            <li>
              <a href="#parcours" onClick={(e) => { e.preventDefault(); scrollTo('parcours'); }}>
                Parcours
              </a>
            </li>
            <li>
              <a href="#projets" onClick={(e) => { e.preventDefault(); scrollTo('projets'); }}>
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Spécialités */}
        <div className="footer-col">
          <h4>Spécialités</h4>
          <ul>
            <li><a href="#expertises" onClick={(e) => { e.preventDefault(); scrollTo('expertises'); }}>Modélisation & NLP</a></li>
            <li><a href="#expertises" onClick={(e) => { e.preventDefault(); scrollTo('expertises'); }}>React & TypeScript</a></li>
            <li><a href="#expertises" onClick={(e) => { e.preventDefault(); scrollTo('expertises'); }}>Python (FastAPI, Flask)</a></li>
            <li><a href="#expertises" onClick={(e) => { e.preventDefault(); scrollTo('expertises'); }}>Flutter & Mobile Money</a></li>
            <li><a href="#expertises" onClick={(e) => { e.preventDefault(); scrollTo('expertises'); }}>Power BI & BigQuery</a></li>
            <li><a href="#expertises" onClick={(e) => { e.preventDefault(); scrollTo('expertises'); }}>Spring Boot & Docker</a></li>
          </ul>
        </div>

        {/* Contact direct */}
        <div className="footer-col">
          <h4>Coordonnées</h4>
          <ul>
            <li style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              📍 {personalInfo.location}
            </li>
            <li>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </li>
            <li>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phoneFormatted}</a>
            </li>
            <li style={{ marginTop: '10px' }}>
              <a
                href={personalInfo.cvFile}
                download="CV_Espoir_Chakpali.pdf"
                style={{ fontWeight: 700, color: 'var(--gold-deep)' }}
              >
                📥 Télécharger CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} <strong>Chakpali Ahlin Espoir</strong>. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
