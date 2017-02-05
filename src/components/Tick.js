import React from 'react'
import Line from './Line'

export default function Tick({ x1, y1, x2, y2, x3, y3, text, position, percentage }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={2} stroke='black'></line>
      <text x={x3} y={y3} textAnchor={position}>{text}{ percentage && '%' }</text>
    </g>
  )
}
