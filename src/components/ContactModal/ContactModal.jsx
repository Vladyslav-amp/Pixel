import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './ContactModal.scss';

export default function ContactModal({
  isOpen,
  onClose,
  position = 'center',
  inline = false,
}) {
  const dialogRef = useRef(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [ok, setOk] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);

  useEffect(() => {
    if (inline) return;
    const onKeyDown = (e) => e.key === 'Escape' && onClose();
    if (isOpen) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [inline, isOpen, onClose]);

  useEffect(() => {
    if (inline) return;
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
  }, [inline, isOpen]);

  if (!inline && !isOpen) return null;

  const nameRegex = /^[a-zA-ZÀ-ž\s'-]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9\s\-()]{6,20}$/;

  async function handleSubmit(e) {
    e.preventDefault();
    if (pending) return;

    setPending(true);
    setError('');
    setOk(false);
    setInvalidFields([]);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const { name, email, phone, agree } = payload;

    const invalid = [];
    if (!nameRegex.test(name)) invalid.push('name');
    if (!emailRegex.test(email)) invalid.push('email');
    if (phone && !phoneRegex.test(phone)) invalid.push('phone');
    if (!agree) setError('You must agree to the Personal Information Protection Policy.');

    if (invalid.length > 0 || !agree) {
      setInvalidFields(invalid);
      if (!error) setError('Please fill in all required fields correctly.');
      setPending(false);
      return;
    }

    try {
      await new Promise((r) => setTimeout(r, 1000));

      setOk(true);
      e.currentTarget.reset();

      setTimeout(() => setOk(false), 3000);
    } finally {
      setPending(false);
    }
  }


  const panel = (
    <div
      className={`contact-modal ${position === 'below' ? 'contact-modal--below' : ''
        } ${inline ? 'contact-modal--inline' : ''}`}
      role={inline ? 'region' : 'dialog'}
      aria-modal={inline ? undefined : 'true'}
    >
      {!inline && <div className="contact-modal__backdrop" onClick={onClose} />}
      <div className="contact-modal__panel" ref={dialogRef}>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className="contact-form__field">
            <span className="contact-form__label">Name</span>
            <input
              name="name"
              type="text"
              className={`contact-form__input ${invalidFields.includes('name') ? 'is-invalid' : ''
                }`}
              placeholder="Name"
              required
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Phone number</span>
            <input
              name="phone"
              type="tel"
              className={`contact-form__input ${invalidFields.includes('phone') ? 'is-invalid' : ''
                }`}
              placeholder="Phone number"
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Email address</span>
            <input
              name="email"
              type="email"
              className={`contact-form__input ${invalidFields.includes('email') ? 'is-invalid' : ''
                }`}
              placeholder="Your email"
              required
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Info about firm</span>
            <textarea
              name="company"
              rows="4"
              className="contact-form__textarea"
              placeholder="Info about your firm"
            />
          </label>

          {/* ✅ Чекбокс без підсвічування */}
          <label className="contact-form__checkbox">
            <input type="checkbox" name="agree" />
            <span>
              I agree to the{' '}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Personal Information Protection Policy
              </a>.
            </span>
          </label>

          {error && <p className="contact-form__error">{error}</p>}
          {ok && (
            <p className="contact-form__ok">
              Thanks! We’ll contact you soon.
            </p>
          )}

          <button
            className="contact-form__submit"
            type="submit"
            disabled={pending}
          >
            {pending ? 'Sending…' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );

  return inline ? panel : createPortal(panel, document.body);
}
