
import { getBarWidth } from './utils'

export const quartileProps = (width, max, fill) => {
  return {
    x: 0,
    y: 0,
    width: getBarWidth(width, max),
    height: '100%',
    fill
  }
}

export const actualValueProps = (width, max, height, fill) => {
  return {
    x: 0,
    y: (height - (height / 4)) / 2,
    width: getBarWidth(width, max),
    height: height / 4,
    fill
  }
}
