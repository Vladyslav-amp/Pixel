import React, {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import './Header.scss';
import Icon from '../Icons/Icon.jsx';
import MainButton from '../../pages/Home/Home-button/Main-button.jsx';
import ContactModal from '../ContactModal/ContactModal.jsx';
import useSectionVisible from '../../hooks/useSectionVisible.js';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header({ sections = [], activeId: activeIdProp }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isMainVisible = useSectionVisible('Main', {
    rootMargin: '-72px 0px 0px 0px',
    threshold: 0.1,
  });

  const [open, setOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const anchorRef = useRef(null);
  const dropdownRef = useRef(null);

  const activeTitle = useMemo(() => {
    if (!sections?.length) return '';
    const found =
      sections.find((s) =>
        s.type === 'section'
          ? s.id === activeIdProp
          : pathname === s.to
      ) || sections[0];
    return found.label || found.title || '';
  }, [activeIdProp, sections, pathname]);

  const toggleMenu = useCallback(() => {
    if (isContactOpen) setContactOpen(false);
    setOpen((v) => !v);
  }, [isContactOpen]);

  const closeMenu = useCallback(() => setOpen(false), []);

  const handleGo = useCallback(
    (item) => {
      closeMenu();
      if (item.type === 'route') {
        navigate(item.to);
      } else {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [closeMenu, navigate]
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (anchorRef.current && !anchorRef.current.contains(e.target))
        closeMenu();
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, closeMenu]);


  useEffect(() => {
    if (!dropdownRef.current) return;
    const panel = dropdownRef.current.querySelector('.site-dropdown__panel');
    if (!panel) return;

    const updateHeight = () => {
      const h = open ? panel.scrollHeight : 0;
      const rootZone = document.querySelector('.header-zone');
      if (rootZone) rootZone.style.setProperty('--dd-h', `${h}px`);
    };

    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    ro.observe(panel);
    return () => ro.disconnect();
  }, [open]);

  // Логіка кнопки
  const handleButtonClick = useCallback(() => {
    if (isContactOpen) {
      setContactOpen(false);
      return;
    }

    if (open) {
      setOpen(false);
      setTimeout(() => setContactOpen(true), 350);
      return;
    }

    setContactOpen(true);
  }, [open, isContactOpen]);

  // Якщо відкривається меню → закрити форму
  useEffect(() => {
    if (open && isContactOpen) {
      setContactOpen(false);
    }
  }, [open, isContactOpen]);

  // Кнопку показуємо лише якщо:
  // — користувач прокрутив нижче Main
  // — або меню / форма відкриті
  const shouldShowButton = !isMainVisible || open || isContactOpen;

  return (
    <>
      <header className="site-header" role="banner">
        <div
          ref={anchorRef}
          className={`site-header__anchor ${open ? 'is-open' : ''}`}
        >
          <div className="site-header__pill">
            <button
              onClick={toggleMenu}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="header-nav"
            >
              <Icon open={open} size={16} color="#0C0C0B" />
            </button>
            <div className="site-header__title">{activeTitle}</div>
          </div>

          <nav
            ref={dropdownRef}
            className={`site-dropdown ${open ? 'site-dropdown--open' : ''}`}
            aria-hidden={!open}
          >
            <div className="site-dropdown__panel">
              <ul className="site-dropdown__list">
                {sections.map((item) => (
                  <li key={item.label} className="site-dropdown__item">
                    <button
                      className={`site-dropdown__link ${
                        (item.type === 'section' && item.id === activeIdProp) ||
                        (item.type === 'route' && pathname === item.to)
                          ? 'is-active'
                          : ''
                      }`}
                      onClick={() => handleGo(item)}
                    >
                      {item.label || item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* кнопка з’являється лише якщо не у верхній секції */}
      {shouldShowButton && (
        <div className="header-zone header-zone--visible">
          <div className="header-zone__btn">
            <MainButton
              text={
                isContactOpen
                  ? 'close consultation form'
                  : 'try $0 consultation'
              }
              variant="dark"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      )}

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
