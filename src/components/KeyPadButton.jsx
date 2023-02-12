import React from 'react'
import styles from './KeyPadButton.module.css'
const KeyPadButton = ({ id, type, value, onClick = () => {} }) => {
  return (
    <div
      className={`${styles[type]}`}
      id={id}
      data-testid={id}
      onClick={onClick}
    >
      {value}
    </div>
  )
}

export default KeyPadButton
