import React from 'react';
import logoImg from '../assets/logo.png';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Download, Sparkles, Terminal, Cpu, Database, Layers, Smartphone, BarChart2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="hero">
      <div className="hero-glow-bg"></div>

      <div className="hero-text">
        <h1>
          Concepteur d'architectures logicielles et de{' '}
          <span className="highlight">solutions intelligentes.</span>
        </h1>

        <p className="hero-pitch">
          Titulaire d'une <strong>Licence en Intelligence Artificielle et Big Data</strong>. 
          J'associe la puissance de l'apprentissage automatique, l'analyse prédictive 
          et le développement Full Stack (React, Flutter, Python, Node, Java) pour bâtir des outils technologiques à fort impact.
        </p>

        <div className="hero-actions">
          <button
            onClick={() => scrollTo('projets')}
            className="btn btn-primary"
          >
            <span>Explorer mes projets</span>
            <ArrowRight size={16} />
          </button>

          <a
            href={personalInfo.cvFile}
            download="CV_Espoir_Chakpali.pdf"
            className="btn btn-secondary"
          >
            <Download size={16} />
            <span>Télécharger mon CV</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            title="Consulter mon profil GitHub"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
        </div>

        <div className="hero-stats">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="hero-stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit-system">
          <div className="net-ring nr1"></div>
          <div className="net-ring nr2"></div>
          <div className="net-ring nr3"></div>

          {/* Central Logo Core */}
          <div className="net-core">
            <img src={logoImg} alt="Espoir Monogram" className="core-logo-img" />
            <span className="core-badge">ESPOIR.DEV</span>
          </div>

          {/* Orbiting skill badges */}
          <div className="floating-pill pill-pos-1">
            <span className="pill-dot"></span>
            <Cpu size={14} className="accent-gold" />
            <span>Python & FastAPI</span>
          </div>

          <div className="floating-pill pill-pos-2">
            <span className="pill-dot"></span>
            <Layers size={14} className="accent-gold" />
            <span>React & TypeScript</span>
          </div>

          <div className="floating-pill pill-pos-3">
            <span className="pill-dot"></span>
            <Sparkles size={14} className="accent-gold" />
            <span>IA & Machine Learning</span>
          </div>

          <div className="floating-pill pill-pos-4">
            <span className="pill-dot"></span>
            <Smartphone size={14} className="accent-gold" />
            <span>Flutter & Mobile</span>
          </div>

          <div className="floating-pill pill-pos-5">
            <span className="pill-dot"></span>
            <Database size={14} className="accent-gold" />
            <span>PostgreSQL & BigQuery</span>
          </div>

          <div className="floating-pill pill-pos-6">
            <span className="pill-dot"></span>
            <BarChart2 size={14} className="accent-gold" />
            <span>Power BI & Data</span>
          </div>
        </div>
      </div>
    </section>
  );
}
