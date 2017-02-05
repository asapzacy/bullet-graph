import React from 'react'
import Tick from './Tick'

export default function Axis({ height, width, steps }) {
  const arr = []
  const division = width / (steps - 1)
  let i = 0
  while (i <= width) {
    arr.push(i)
    i += division
  }
  console.log(arr)
  return (
    <g>

      <g>
        <line x1='1' y1='50' x2='1' y2='60' strokeWidth={2} stroke='black'></line>
        <text x="0" y="75" textAnchor='middle'>0</text>
        </g>
    </g>
  )
}
