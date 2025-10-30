import React from 'react'
import './Main-button.scss'

export default function MainButton({
  text = 'Click me',
  variant = 'dark',
  onClick,
  disabled = false,
  className = '',
}) {
  return (
    <button
      className={`main-button main-button--${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="main-button__text">{text}</span>
    </button>
  )
}
