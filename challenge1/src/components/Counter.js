import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.count = this.count.bind(this)
  }
  componentWillMount() {
    console.log('[Counter] componentWillMount')
  }
  componentDidMount() {
    console.log('[Counter] componentDidMount')
  }
  componentWillReceiveProps() {
    console.log('[Counter] componentWillReceiveProps')
  }
  shouldComponentUpdate() {
    console.log('[Counter] shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('[Counter] componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('[Counter] componentDidUpdate')
  }
  count() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  render() {
    console.log('[Counter] render')
    return (
      <div id="counter" style={{ color: this.props.color }}>
        <div>
          {this.state.counter}
        </div>
        <input type="button" value="+" onClick={this.count} />
      </div>
    )
  }
}
Counter.defaultProps = {
  color: '#000',
}
