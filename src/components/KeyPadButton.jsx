import React from 'react'
import styles from './KeyPadButton.module.css'
const KeyPadButton = ({ id, type, value }) => {
  return (
    <div
      className={`${styles[type]}`}
      id={id}
    >
      {value}
    </div>
  )
}

export default KeyPadButton
