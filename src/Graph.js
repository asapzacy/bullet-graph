import React from 'react'
import Bar from './Bar'

export default function Graph({ good, average, poor }) {
  const colors = [ 'grey', 'blue', 'red']
  const svgHeight = 50
  return (
    <section className='graphContainer'>
      <svg width='100%' height={svgHeight} xmlns='http://www.w3.org/2000/svg'>
        <g>
          <Bar width={getBarWidth(good, good)} height={50} fill={colors[0]} />
          <Bar width={getBarWidth(average, good)}  height={50} fill={colors[1]} />
          <Bar width={getBarWidth(poor, good)}  height={50} fill={colors[2]} />
        </g>
      </svg>
    </section>
  )
}


function getBarWidth(width, fullWidth) {
  return `${(width / fullWidth) * 100}%`
}
