import React from 'react'
import Graph from './Graph'
import Title from './components/Title'

export default function Bullet({ title, subtitle, ...props }) {
  return (
    <li className='bulletItem'>
      <Title title={title} subtitle={subtitle} />
      <Graph {...props} />
    </li>
  )
}
