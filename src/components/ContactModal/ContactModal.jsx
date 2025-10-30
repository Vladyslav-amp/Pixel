import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './ContactModal.scss';

export default function ContactModal({ isOpen, onClose, position = 'center' }) {
  const dialogRef = useRef(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && onClose();
    if (isOpen) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const html = document.documentElement;
    const scrollBarWidth = window.innerWidth - html.clientWidth;

    if (isOpen) {
      html.classList.add('no-scroll');
      html.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`);
    } else {
      html.classList.remove('no-scroll');
      html.style.removeProperty('--scrollbar-width');
    }

    return () => {
      html.classList.remove('no-scroll');
      html.style.removeProperty('--scrollbar-width');
    };
  }, [isOpen]);





  if (!isOpen) return null;

  const nameRegex = /^[a-zA-ZÀ-ž\s'-]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9\s\-()]{6,20}$/;

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);
    setError('');
    setOk(false);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const { name, email, phone } = payload;

    if (!nameRegex.test(name)) {
      setPending(false);
      return setError('Please enter a valid name (letters only).');
    }
    if (!emailRegex.test(email)) {
      setPending(false);
      return setError('Please enter a valid email address.');
    }
    if (phone && !phoneRegex.test(phone)) {
      setPending(false);
      return setError('Please enter a valid phone number.');
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to send');
      setOk(true);
      e.currentTarget.reset();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setPending(false);
    }
  }

  const modal = (
    <div
      className={`contact-modal ${position === 'below' ? 'contact-modal--below' : ''}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="contact-modal__backdrop" onClick={onClose} />
      <div className="contact-modal__panel" ref={dialogRef}>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className="contact-form__field">
            <span className="contact-form__label">Name</span>
            <input name="name" type="text" className="contact-form__input" placeholder="Name" required />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Phone number</span>
            <input name="phone" type="tel" className="contact-form__input" placeholder="Phone number" />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Email address</span>
            <input name="email" type="email" className="contact-form__input" placeholder="Your email" required />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Info about firm</span>
            <textarea name="company" rows="4" className="contact-form__textarea" placeholder="Info about your firm" />
          </label>

          {error && <p className="contact-form__error">{error}</p>}
          {ok && <p className="contact-form__ok">Thanks! We’ll contact you soon.</p>}

          <button className="contact-form__submit" type="submit" disabled={pending}>
            {pending ? 'Sending…' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
