import React from 'react'
import Tick from './Tick'
import { tickProps } from '../helpers/props'

export default function Axis({ height, width, steps, percentage }) {
  const arr = []
  const division = width / (steps - 1)
  let i = 0
  while (i <= width) {
    arr.push(i)
    i += division
  }
  return (
    <g>
      { arr.map((item, index) => <Tick {...tickProps(width, height, index, item, arr.length - 1, percentage)} key={index} />) }
    </g>
  )
}
