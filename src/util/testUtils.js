import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { setupStore } from '../app/store'

export function renderWithProviders(
  ui,
  {
    preloadedState = {
      display: {
        inputValue: '88',
      },
    },
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
