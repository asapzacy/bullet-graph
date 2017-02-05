import React from 'react'
import Data from './components/Data'
import Axis from './components/Axis'

export default function Graph(props) {
  return (
    <section className='graphContainer'>
      <svg className='graph' width='100%' height={props.height * 2} xmlns='http://www.w3.org/2000/svg'>
        <Data {...props} />
        <Axis {...props} />
      </svg>
    </section>
  )
}
