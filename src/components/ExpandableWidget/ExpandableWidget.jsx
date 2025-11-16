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
      timeout = setTimeout(() => setVisible(false), 550)
    }
    return () => clearTimeout(timeout)
  }, [open])

  const toggle = () => setOpen(v => !v)

  const renderTrigger = () => {
    if (trigger.folder) {
      return (
        <button
          type="button"
          className="folderTrigger"
          onClick={toggle}
          aria-expanded={open}
        >
          <div className="folderTrigger__tile">
            <div className="folderTrigger__icons">
              {items.slice(0, 4).map((it, i) => (
                <img
                  key={i}
                  src={it.imageSrc}
                  alt={it.imageAlt || it.text || ''}
                  className="folderTrigger__icon"
                />
              ))}
            </div>
          </div>
          <span className="folderTrigger__label">{trigger.text}</span>
        </button>
      )
    }

    return (
      <Widget
        {...trigger}
        onClick={toggle}
        aria-expanded={open}
      />
    )
  }

  return (
    <div className={`expander ${open ? 'expander--open' : ''} ${animate ? 'expander--anim' : ''} ${className}`}>
      <div className="expander__trigger">
        {renderTrigger()}
      </div>

      <div className="expander__panel">
        {visible &&
          items.map((it, i) => {
            const handleClick =
              it.onClick || (onItemClick ? () => onItemClick(it, i) : undefined)

            return (
              <div
                key={it.id ?? i}
                className={`expander__item ${
                  animate ? 'is-visible' : 'is-hiding'
                }`}
                style={{ transitionDelay: `${i * 0.09}s` }}
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
