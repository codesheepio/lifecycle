import React, { Component } from 'react'
import Timer from './Timer'

export default class TimerContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { timerCount: 0 }
    this.addTimer = this.addTimer.bind(this)
    this.removeTimer = this.removeTimer.bind(this)
    this.renderTimers = this.renderTimers.bind(this)
  }
  addTimer() {
    this.setState({ timerCount: this.state.timerCount + 1 })
  }
  removeTimer() {
    this.setState({ timerCount: Math.max(0, this.state.timerCount - 1) })
  }
  renderTimers() {
    const timers = []
    for (let i = 0; i < this.state.timerCount; i++) {
      timers.push(<Timer key={i} />)
    }
    return timers
  }
  render() {
    return (
      <div id="timer-container">
        <span style={{ padding: '5px' }}>
          <input type="button" value="Add Timer" onClick={this.addTimer} />
        </span>
        <span style={{ padding: '5px' }}>
          <input
            type="button"
            value="Remove Timer"
            onClick={this.removeTimer}
          />
        </span>
        {this.renderTimers(this.state.timerCount)}
      </div>
    )
  }
}
