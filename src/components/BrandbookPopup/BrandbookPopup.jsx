// BrandbookPopup.jsx
import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './BrandbookPopup.scss'
import good from '@/assets/images/icons/good.webp'
import bad from '@/assets/images/icons/bad.webp'

export default function BrandbookPopup({
  open,
  onClose,
  columns,
  rows,
  title = 'BRANDBOOK',
}) {
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)
  const previouslyFocusedRef = useRef(null)

  useEffect(() => {
    if (!open) return

    previouslyFocusedRef.current = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    closeBtnRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.()
        return
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    const onOutsideClick = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        onClose?.()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onOutsideClick)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onOutsideClick)
      document.body.style.overflow = prevOverflow || ''
      previouslyFocusedRef.current?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  const modal = (
    <div className="bbp-backdrop" role="presentation">
      <div
        className="bbp"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        ref={dialogRef}
      >
        <button
          type="button"
          className="bbp__close"
          onClick={onClose}
          ref={closeBtnRef}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="bbp__header" role="row">
          <div className="bbp__col bbp__col--title" role="columnheader">
            {columns?.[0]}
          </div>
          <div className="bbp__col" role="columnheader">
            {columns?.[1]}
          </div>
          <div className="bbp__col" role="columnheader">
            {columns?.[2]}
          </div>
        </div>

        <div className="bbp__rows">
          {rows?.map((r, i) => (
            <div className="bbp__row" role="row" key={i}>
              <div className="bbp__cell bbp__cell--label" role="cell">
                {r.label}
              </div>

              <div
                className={`bbp__cell ${r.standard ? 'ok' : 'no'}`}
                role="cell"
              >
                <img
                  src={r.standard ? good : bad}
                  alt={r.standard ? 'OK' : 'Nie OK'}
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </div>

              <div
                className={`bbp__cell ${r.pixel ? 'ok' : 'no'}`}
                role="cell"
              >
                <img
                  src={r.pixel ? good : bad}
                  alt={r.pixel ? 'OK' : 'Nie OK'}
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
