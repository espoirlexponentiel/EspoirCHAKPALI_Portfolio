import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <div className="scroll-to-top">
      <button
        onClick={scrollToTop}
        className="scroll-btn"
        aria-label="Retour en haut de page"
        title="Retour en haut"
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
}
