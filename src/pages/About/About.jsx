import React, { useMemo, useState, useEffect } from 'react';
import './About.scss';

import Header from '../../components/Header/Header.jsx';
import MainButton from '../Home/Home-button/Main-button.jsx';
import ContactModal from '../../components/ContactModal/ContactModal.jsx';
import { NAV } from '../../constants/home-sections.js';

import AboutMain from './about-sections/about-main/about-main.jsx';
import Lena from './about-sections/lena/lena.jsx';
import Oksana from './about-sections/oksana/oksana.jsx';
import Salvador from './about-sections/salvador/salvador.jsx';
import Vladyslav from './about-sections/vladyslav/vladyslav.jsx';
import Ava from './about-sections/ava/ava.jsx';

export default function About() {
  const SECTION_IDS = useMemo(
    () => NAV.filter(item => item.type === 'section').map(s => s.id),
    []
  );

  const [isContactOpen, setContactOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const triggerPoint = window.innerHeight;
      setShowBtn(scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="aboutus" id="aboutus">
      <div className="aboutus__top">
        <div className="contact-page__head">
          <Header sections={NAV} />
        </div>

        <div
          className={`header-zone__btn header-zone__btn--relative ${showBtn ? 'is-visible' : ''
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

      <main className="aboutus__main">
        <AboutMain />
        <Lena />
        <Oksana />
        <Salvador />
        <Vladyslav />
        <Ava />
      </main>
    </section>
  );
}
