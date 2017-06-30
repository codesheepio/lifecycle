import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ColoredCounter from './components/ColoredCounter'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-root')
  )
}
render(ColoredCounter)
if (module.hot) {
  module.hot.accept('./components/ColoredCounter', () => render(ColoredCounter))
}
