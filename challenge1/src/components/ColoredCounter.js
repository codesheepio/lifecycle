import React, { Component } from 'react'
import Counter from './Counter'

export default class ColoredCounter extends Component {
  constructor(props) {
    super(props)
    this.state = { color: '#f00' }
    this.changeColor = this.changeColor.bind(this)
  }
  componentWillMount() {
    console.log('[ColoredCounter] componentWillMount')
  }
  componentDidMount() {
    console.log('[ColoredCounter] componentDidMount')
  }
  componentWillReceiveProps() {
    console.log('[ColoredCounter] componentWillReceiveProps')
  }
  shouldComponentUpdate() {
    console.log('[ColoredCounter] shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('[ColoredCounter] componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('[ColoredCounter] componentDidUpdate')
  }

  changeColor(event) {
    this.setState({
      color: event.target.value,
    })
  }
  render() {
    console.log('[ColoredCounter] render')
    return (
      <div id="counter">
        <select name="color" onChange={this.changeColor}>
          <option value="#f00">red</option>
          <option value="#0f0">green</option>
          <option value="#00f">blue</option>
        </select>
        <Counter color={this.state.color} />
      </div>
    )
  }
}
