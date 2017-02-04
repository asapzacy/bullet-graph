import React from 'react'

export default function Bar({ width, height = '100%', fill }) {
  return (
    <rect x={0} y={0} width={width} height={height} fill={fill} />
  )
}
