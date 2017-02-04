import React, { Component } from 'react'
import Bullet from './Bullet'
import './App.css'
import { financials } from './data.js'


class App extends Component {
  constructor() {
    super()
    this.state = { data: [] }
  }
  componentDidMount() {
    this.setState({ data: financials })
  }
  render() {
    return (
      <div className='appContainer'>
        <header className='headerContainer'>
          <img src='/assets/img/yewno.png' className='logo' alt='yewno logo' />
        </header>
        <ul className='bulletList'>
          { this.state.data.map(item => <Bullet {...item} key={item.id} />) }
        </ul>
      </div>
    )
  }
}

export default App
