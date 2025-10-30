// src/components/Widget/Widget.jsx
import React from 'react'
import './Widget.scss'

export default function Widget({
  size = 'sm',
  fit = 'cover',
  imageSrc,           // головне зображення (спереду)
  backImageSrc,       // нове! зображення позаду
  imageAlt = '',
  text,
  href,
  onClick,
  target = '_blank',
  rel = 'noopener noreferrer',
  double = false,     // активує друге зображення
}) {
  const Tag = href ? 'a' : 'div'
  const clickable = !!(href || onClick)
  const cls = `widget widget--size-${size} widget--fit-${fit} ${double ? 'widget--double' : ''}`

  return (
    <Tag
      className={cls}
      {...(href ? { href, target, rel } : {})}
      {...(onClick ? { onClick } : {})}
      {...(!href && clickable ? { role: 'button', tabIndex: 0 } : {})}
      aria-label={text}
    >
      <div className="widget__media">
        {/* якщо є double і backImageSrc — малюємо заднє */}
        {double && backImageSrc && (
          <img
            className="widget__img widget__img--back"
            src={backImageSrc}
            alt=""
            aria-hidden="true"
          />
        )}

        {/* переднє зображення */}
        {imageSrc && (
          <img
            className="widget__img widget__img--front"
            src={imageSrc}
            alt={imageAlt}
          />
        )}
      </div>

      <div className="widget__caption">
        <span className="widget__text">{text}</span>
      </div>
    </Tag>
  )
}
