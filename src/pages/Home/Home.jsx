import React, { useMemo, useState } from 'react';
import './Home.scss';

import Header from '../../components/Header/Header.jsx';
import useActiveSection from '../../hooks/useActiveSection.js';
import useSectionVisible from '../../hooks/useSectionVisible.js';
import MainButton from '../../pages/Home/Home-button/Main-button.jsx';
import ContactModal from '../../components/ContactModal/ContactModal.jsx';

import Main from './Home-sections/Main/Main.jsx';
import Reviews from './Home-sections/Reviews/Reviews.jsx';
import ServicesAndUsecases from './Home-sections/ServicesAndUsecases/ServicesAndUsecases.jsx';

import { NAV } from '../../constants/home-sections.js';

export default function Home() {
  const SECTION_IDS = useMemo(
    () => NAV.filter(item => item.type === 'section').map(s => s.id),
    []
  );

  const activeId = useActiveSection(SECTION_IDS, { threshold: [0.5] });
  const isMainVisible = useSectionVisible('Main', {
    rootMargin: '-72px 0px 0px 0px',
    threshold: 0.01,
  });

  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <section className='header-main'>
      <div className="header-zone">
        <div className="header-zone__inner">
          <Header sections={NAV} activeId={activeId} />
        </div>
        {!isMainVisible && (
          <div className="header-zone__btn header-zone__btn--relative">
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
        )}
      </div>

      <div className="page__offset" aria-hidden />

      <main className="home">
        <Main id="Main" />
        <ServicesAndUsecases id="ServicesAndUsecases" />
        <Reviews id="Reviews" />
      </main>
    </section>
  );
}
