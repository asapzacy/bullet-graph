import React from 'react'

export default function Line({ x1=1, y1=50, x2=1, y2=60, strokeWidth=2, stroke='black' }) {
  return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={strokeWidth} stroke={stroke} />
  )
}
