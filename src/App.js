import React, { Component } from 'react'
import './App.css'
import { financials } from './data.js'


class App extends Component {
  constructor() {
    super()
    this.state = { data: {} }
  }
  componentDidMount() {
    this.setState({ data: financials })
  }
  render() {
    return (
      <div className='appContainer'>
        <header className='headerContainer'>
          <img src={'/assets/img/yewno.png'} className='logo' alt='yewno logo' />
        </header>
        {/* { this.state.data.map(item => <h1>{item.title}</h1>)} */}
      </div>
    )
  }
}

export default App
