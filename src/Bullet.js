import React from 'react'
import Graph from './Graph'
import Title from './components/Title'

export default function Bullet({ title, subtitle, ...props }) {
  const greys = ['#e5e5e5', '#cccccc', '#999999']
  return (
    <li className='bulletItem'>
      <Title title={title} subtitle={subtitle} />
      <Graph {...props} fills={greys} />
    </li>
  )
}
