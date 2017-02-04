import React, { Component } from 'react'
import Graph from './Graph'
import Title from './components/Title'
import { greys } from './helpers/fills.js'


class Bullet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fills: [],
      height: 0,
    }
  }
  componentDidMount() {
    this.setState({
      fills: greys,
      height: 50
    })
  }
  render() {
    return (
      <li className='bulletItem'>
        <Title {...this.props} />
        <Graph {...this.state} {...this.props} />
      </li>
    )
  }

}

export default Bullet
