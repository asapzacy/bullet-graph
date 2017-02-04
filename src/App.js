import React, { Component } from 'react'
import Header from './components/Header'
import Bullet from './Bullet'
import ColorMenu from './components/ColorMenu'

import { financials } from './helpers/data.js'
import { colors } from './helpers/fills.js'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      fills: [],
      height: 0
     }
     this.switchColor = this.switchColor.bind(this)
  }
  componentDidMount() {
    this.setState({
      data: financials,
      fills: colors.grey,
      height: 50
    })
  }
  switchColor(newColor) {
    this.setState({ fills: colors[newColor] })
  }
  render() {
    return (
      <div className='appContainer'>
        <Header />
        <ul className='bulletList'>
          { this.state.data.map(item => <Bullet {...item} fills={this.state.fills}  height={this.state.height} key={item.id} />) }
        </ul>
        <ColorMenu switchColor={this.switchColor} />
      </div>
    )
  }
}

export default App
