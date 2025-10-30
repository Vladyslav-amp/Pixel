import React, { useMemo, useState } from 'react';
import './Branding.scss';

import Header from '../../components/Header/Header.jsx';
import useActiveSection from '../../hooks/useActiveSection.js';
import useSectionVisible from '../../hooks/useSectionVisible.js';
import MainButton from './Home-button/Main-Button.jsx';
import ContactModal from '../../components/ContactModal/ContactModal.jsx';

import { NAV } from '../../constants/home-sections.js';
import Branding from './Branding-sections/Brandbook/Brandbook.jsx';

export default function Brandbook() {
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

      <main className="branding">
        <Branding id="Branding" />
      </main>
    </section>
  );
}
