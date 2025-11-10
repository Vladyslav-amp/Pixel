import React, { useMemo, useState, useEffect } from 'react';
import './ContactUs.scss';

import Header from '../../components/Header/Header.jsx';
import MainButton from '../Home/Home-button/Main-button.jsx';
import ContactModal from '../../components/ContactModal/ContactModal.jsx';
import { NAV } from '../../constants/home-sections.js';
import ContactMain from './Contact-sections/contactUs-main/contactUs-main.jsx';

export default function ContactUs() {
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
    <section className="contact-page" id="contactPage">
      <div className="contact-page__top">
        <div className="contact-page__head">
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

      <main className="contact-page__main">
        <ContactMain />
      </main>
    </section>
  );
}
