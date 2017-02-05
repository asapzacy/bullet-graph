import React from 'react'
import Line from './Line'

export default function Tick() {
  return (
    <g>
      <Line />
      <text x="0" y="75" textAnchor='middle'>0</text>
    </g>
  )
}
