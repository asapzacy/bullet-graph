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
      color: '',
      height: 0
     }
     this.switchColor = this.switchColor.bind(this)
  }
  componentDidMount() {
    const obj = {}
    for (let i = 0; i < 1000; i++) {
      const randomKey = Math.floor(Math.random() * Object.keys(colors).length)
      const randomColor = Object.keys(colors)[randomKey]
      obj[randomColor] = (obj[randomColor] || 0) + 1
    }
    console.log(obj)
    const randomKey = Math.floor(Math.random() * Object.keys(colors).length)
    const randomColor = Object.keys(colors)[randomKey]
    this.setState({
      data: financials,
      fills: colors[randomColor],
      color: randomColor,
      height: 50
    })
  }
  switchColor(newColor) {
    this.setState({
      fills: colors[newColor],
      color: newColor
    })
  }
  render() {
    return (
      <div className='appContainer'>
        <Header />
        <ul className='bulletList'>
          { this.state.data.map(item => <Bullet {...item} fills={this.state.fills}  height={this.state.height} key={item.id} />) }
        </ul>
        <ColorMenu switchColor={this.switchColor} color={this.state.color} fills={this.state.fills} />
      </div>
    )
  }
}

export default App
