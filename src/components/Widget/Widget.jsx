import React, { useEffect, useRef, useState } from 'react'
import './Widget.scss'

export default function Widget({
  size = 'sm',
  fit = 'cover',
  imageSrc,
  backImageSrc,
  imageAlt = '',
  text,
  href,
  onClick,
  target = '_blank',
  rel = 'noopener noreferrer',
  double = false,
  textColor = '#0C0C0B',


  enablePopup = false,
  popupTitle,
  popupItems = [],
}) {
  const Tag = href ? 'a' : 'div'
  const clickable = !!(href || onClick || enablePopup)
  const cls = `widget widget--size-${size} widget--fit-${fit} ${double ? 'widget--double' : ''}`

  const resolvedTextColor =
    textColor === 'light' ? '#f3f3f2' : textColor === 'dark' ? '#0C0C0B' : textColor

  const [open, setOpen] = useState(false)
  const popupRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  const handleClick = (e) => {
    if (enablePopup) {
      e.preventDefault()
      setOpen((v) => !v)
      return
    }
    onClick?.(e)
  }

  return (
    <>
      <Tag
        className={cls}
        {...(href && !enablePopup ? { href, target, rel } : {})}
        {...(clickable ? { role: 'button', tabIndex: 0 } : {})}
        onClick={handleClick}
        aria-label={text}
        aria-haspopup={enablePopup ? 'dialog' : undefined}
        aria-expanded={enablePopup ? open : undefined}
      >
        <div className="widget__media">
          {double && backImageSrc && (
            <img className="widget__img widget__img--back" src={backImageSrc} alt="" aria-hidden="true" />
          )}
          {imageSrc && <img className="widget__img widget__img--front" src={imageSrc} alt={imageAlt} />}
        </div>

        <div className="widget__caption" style={{ color: resolvedTextColor }}>
          <span className="widget__text">{text}</span>
        </div>
      </Tag>

      {enablePopup && open && (
        <div className="widget-popover__backdrop" aria-hidden="true">
          <div
            className="widget-popover"
            role="dialog"
            aria-modal="true"
            aria-label={popupTitle || 'Menu'}
            ref={popupRef}
          >
            {popupTitle && <div className="widget-popover__title">{popupTitle}</div>}

            <div className="widget-popover__table">
              {popupItems.map((row, i) => (
                <div className="widget-popover__row" key={i}>
                  <div className="cell cell--label">{row.label}</div>
                  <div className={`cell cell--std ${row.std ? 'ok' : 'no'}`}>{row.std ? '✔' : '✖'}</div>
                  <div className={`cell cell--pix ${row.pixel ? 'ok' : 'no'}`}>{row.pixel ? '✔' : '✖'}</div>
                </div>
              ))}
            </div>

            <button className="widget-popover__close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>
        </div>
      )}
    </>
  )
}
