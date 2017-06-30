import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0, start: false }
    this.count = this.count.bind(this)
    this.reset = this.reset.bind(this)
    this.toggleTimerState = this.toggleTimerState(this)
  }
  startTimer() {
    setInterval(() => {
      if (this.state.start) {
        this.setState({ counter: this.state.counter + 1 })
      }
    }, 1000)
  }
  resetTimer() {
    clearInterval()
  }
  toggleTimerState() {
    this.setState({ start: !this.state.start })
  }
  count() {
    this.setState({ counter: this.state.counter + 1 })
  }
  reset() {
    this.setState({ counter: 0 })
  }
  render() {
    return (
      <div
        id="counter"
        style={{
          marginTop: '10px',
          color: this.props.color,
          padding: '5px',
        }}
      >
        <span style={{ marginRight: '10px' }}>
          {this.state.counter}
        </span>
        <input
          style={{ margin: '5px' }}
          type="button"
          value={this.state.start ? 'Stop' : 'Start'}
        />
        <input style={{ margin: '5px' }} type="button" value="Reset" />
      </div>
    )
  }
}
