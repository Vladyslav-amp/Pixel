import React, { useEffect, useState } from 'react'
import Widget from '../Widget/Widget'
import './ExpandableWidget.scss'

export default function ExpandableWidget({
  trigger,
  items = [],
  onItemClick,
  defaultOpen = false,
  className = ''
}) {
  const [open, setOpen] = useState(defaultOpen)
  const [visible, setVisible] = useState(defaultOpen)
  const [animate, setAnimate] = useState(defaultOpen)

  useEffect(() => {
    let timeout
    if (open) {
      setVisible(true)
      timeout = setTimeout(() => setAnimate(true), 20)
    } else {
      setAnimate(false)
      timeout = setTimeout(() => setVisible(false), 300)
    }
    return () => clearTimeout(timeout)
  }, [open])

  const toggle = () => setOpen(v => !v)

  return (
    <div className={`expander ${animate ? 'expander--open' : ''} ${className}`}>
      <div className="expander__trigger">
        <Widget
          {...trigger}
          onClick={toggle}
          aria-expanded={open}
        />
      </div>

      {/* ⚠️ Обгортка панелі: на мобілці display: contents, тож не змінює поведінку */}
      <div className="expander__panel">
        {visible &&
          items.map((it, i) => {
            const handleClick =
              it.onClick || (onItemClick ? () => onItemClick(it, i) : undefined)
            return (
              <div
                key={it.id ?? i}
                className={`expander__item ${animate ? 'is-visible' : 'is-hiding'}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <Widget
                  size={it.size || trigger.size}
                  fit="content"
                  imageSrc={it.imageSrc}
                  imageAlt={it.imageAlt || ''}
                  text={it.text}
                  href={it.href}
                  onClick={it.href ? undefined : handleClick}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}
