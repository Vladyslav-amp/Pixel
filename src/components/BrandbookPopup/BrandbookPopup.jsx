// BrandbookPopup.jsx
import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './BrandbookPopup.scss'

export default function BrandbookPopup({ open, onClose, columns, rows, title = 'BRANDBOOK' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return

    const onKey = (e) => e.key === 'Escape' && onClose?.()
    const onOutside = (e) => ref.current && !ref.current.contains(e.target) && onClose?.()

    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onOutside)

    // Блокуємо прокрутку сторінки без штучних падінгів
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOutside)
      document.body.style.overflow = prevOverflow || ''
    }
  }, [open, onClose])

  if (!open) return null

  const modal = (
    <div className="bbp-backdrop" role="presentation" aria-hidden="true">
      <div
        className="bbp"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        ref={ref}
      >
        <button className="bbp__close" onClick={onClose} aria-label="Close">✕</button>

        <div className="bbp__header">
          <div className="bbp__col bbp__col--title">{columns?.[0]}</div>
          <div className="bbp__col">{columns?.[1]}</div>
          <div className="bbp__col">{columns?.[2]}</div>
        </div>

        <div className="bbp__rows">
          {rows?.map((r, i) => (
            <div className="bbp__row" key={i}>
              <div className="bbp__cell bbp__cell--label">{r.label}</div>
              <div className={`bbp__cell ${r.standard ? 'ok' : 'no'}`}>{r.standard ? '✔' : '✖'}</div>
              <div className={`bbp__cell ${r.pixel ? 'ok' : 'no'}`}>{r.pixel ? '✔' : '✖'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
