import React from 'react'

export default function Bar({ x = 0, y = 0, width, height = '100%', fill = '#070707' }) {
  return (
    <rect x={x} y={y} width={width} height={height} fill={fill} />
  )
}
