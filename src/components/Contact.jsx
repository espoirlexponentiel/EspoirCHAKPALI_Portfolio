import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending message
    setSubmitted(true);
    setTimeout(() => {
      // Create mailto link as fallback
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Contact depuis votre portfolio'
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 1200);
  };

  return (
    <section id="contact" className="section-alt">
      <div className="section-head">
        <span className="tag">ME CONTACTER</span>
        <h2>Discutons de vos Projets & Opportunités</h2>
        <p>
          Vous avez une problématique de modélisation IA, un projet web/mobile à concrétiser,
          ou une opportunité professionnelle ? Échangeons dès aujourd'hui.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left: Formulaire */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="form-feedback" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#16834d', fontSize: '18px', fontWeight: 700 }}>
                <CheckCircle2 size={24} />
                <span>Message préparé avec succès !</span>
              </div>
              <p style={{ marginTop: '10px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                Votre client de messagerie s'ouvre pour envoyer l'email directement à {personalInfo.email}. Merci de votre prise de contact !
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn btn-secondary"
                style={{ marginTop: '18px' }}
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Votre Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Ex. Jean Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Votre Adresse Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Ex. jean.dupont@entreprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet de votre demande</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Ex. Opportunité de poste / Projet IA & Fullstack"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Votre Message *</label>
                <textarea
                  id="message"
                  required
                  placeholder="Décrivez votre besoin, les détails de votre projet ou votre proposition..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                <Send size={16} />
                <span>Envoyer mon message</span>
              </button>
            </form>
          )}
        </div>

        {/* Right: Coordonnées & Cartes Directes */}
        <div className="contact-info-list">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Mail size={24} />
            </div>
            <div className="contact-info-body">
              <h4>Adresse Email</h4>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Phone size={24} />
            </div>
            <div className="contact-info-body">
              <h4>Téléphone / WhatsApp</h4>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phoneFormatted}</a>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <MapPin size={24} />
            </div>
            <div className="contact-info-body">
              <h4>Localisation</h4>
              <p>{personalInfo.location}</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <GithubIcon size={24} />
            </div>
            <div className="contact-info-body">
              <h4>Profil GitHub</h4>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                github.com/espoirlexponentiel
              </a>
            </div>
          </div>

          <div className="contact-info-card" style={{ background: '#ffffff', borderColor: 'var(--gold-border)' }}>
            <div className="contact-info-icon" style={{ background: '#ffffff' }}>
              <MessageSquare size={24} className="accent-gold" />
            </div>
            <div className="contact-info-body">
              <h4 style={{ color: 'var(--gold-deep)' }}>Disponibilité</h4>
              <p style={{ fontSize: '14.5px', color: 'var(--navy-deep)', fontWeight: 600 }}>
                Disponible pour opportunités professionnelles, missions d'ingénierie et projets d'innovation IA & Data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
