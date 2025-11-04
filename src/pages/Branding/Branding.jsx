import React, { useMemo, useState, useEffect } from 'react';
import './Branding.scss';

import Header from '../../components/Header/Header.jsx';
import Main from '../Branding/Branding-sections/Main/Main.jsx';
import Brandbook from './Branding-sections/Brandbook/Brandbook.jsx';
import Contact from './Branding-sections/Contact/Contact.jsx';
import Gameover from './Branding-sections/Gameover/Gameover.jsx';
import MainButton from '../Home/Home-button/Main-button.jsx';
import ContactModal from '../../components/ContactModal/ContactModal.jsx';
import { NAV } from '../../constants/home-sections.js';

export default function Branding() {
  const SECTION_IDS = useMemo(
    () => NAV.filter(item => item.type === 'section').map(s => s.id),
    []
  );

  const [isContactOpen, setContactOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  // 👉 pokazuj guzik po przewinięciu > 100vh
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const triggerPoint = window.innerHeight; // 100vh
      setShowBtn(scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // wywołaj raz na start (np. gdy user odświeży niżej)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="branding-main" id="branding">
      <div className="branding-zone">
        <div className="branding-zone__inner">
          <Header sections={NAV} />
        </div>

        <div
          className={`header-zone__btn header-zone__btn--relative ${
            showBtn ? 'is-visible' : ''
          }`}
        >
          {!isContactOpen ? (
            <MainButton
              text="try $0 consultation"
              variant="dark"
              onClick={() => setContactOpen(true)}
            />
          ) : (
            <MainButton
              text="close form"
              variant="dark"
              onClick={() => setContactOpen(false)}
            />
          )}

          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setContactOpen(false)}
            position="below"
          />
        </div>
      </div>

      <div className="page__offset" aria-hidden />

      <main className="main">
        <Main />
        <Brandbook />
        <Contact />
        <Gameover />
      </main>
    </section>
  );
}
