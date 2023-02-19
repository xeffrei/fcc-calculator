import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from './displaySlice'
import { Provider } from 'react-redux'
import store from '../../app/store'
import styles from './Display.module.css'

export function Display() {
  const { inputValue } = useSelector(selectDisplay)
  return (
    <div
      className={styles.display}
      data-testid='display'
      id='display-container'
    >
      <div
        id='display'
        className={styles.inputdisplay}
        data-testid='input-display'
      >
        {inputValue}
      </div>
    </div>
  )
}

export const DisplayProvider = (props) => {
  return (
    <Provider store={store}>
      <Display props />
    </Provider>
  )
}

export default DisplayProvider
