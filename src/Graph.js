import React from 'react'
import Bar from './Bar'
import { getBarWidth } from './helpers/utils.js'
import { quartileProps, actualValueProps } from './helpers/props.js'

export default function Graph({ good, average, poor, actual, target, fills, height }) {
  return (
    <section className='graphContainer'>
      <svg width='100%' height={height} xmlns='http://www.w3.org/2000/svg'>
        <g>
          <Bar {...quartileProps(good, good, fills[0])} />
          <Bar {...quartileProps(average, good, fills[1])} />
          <Bar {...quartileProps(poor, good, fills[2])} />
          <Bar {...actualValueProps(actual, good, height, fills[3])} />

          {/* <Bar width={getBarWidth(average, good)} fill={fills[1]} />
          <Bar width={getBarWidth(poor, good)} fill={fills[2]} /> */}
          {/* <Bar width={getBarWidth(actual, good)} height={svgHeight/4} y={18.75} /> */}

        </g>
      </svg>
    </section>
  )
}




function getBarHeight(height, fullHeight) {
  return `${(height / fullHeight) * 100}%`

}
