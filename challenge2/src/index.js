import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import TimerContainer from './components/TimerContainer'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-root')
  )
}
render(TimerContainer)
if (module.hot) {
  module.hot.accept('./components/TimerContainer', () =>
    render(TimerCountainer)
  )
}
