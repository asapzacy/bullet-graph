
import { getBarWidth, getBarHeight, getX, getY } from './utils'

export const quartileProps = (width, maxWidth, maxHeight, fill) => {
  return {
    x: 0,
    y: 0,
    width: getBarWidth(width, maxWidth),
    height: getBarHeight(maxHeight, 1),
    fill
  }
}

export const actualValueProps = (width, maxWidth, maxHeight, fill) => {
  const barHeight = getBarHeight(maxHeight, 0.25)
  return {
    x: 0,
    y: getY(barHeight, maxHeight),
    width: getBarWidth(width, maxWidth),
    height: barHeight,
    fill
  }
}

export const targetValueProps = (width, maxWidth, maxHeight, fill) => {
  const barHeight = getBarHeight(maxHeight, 0.7)
  return {
    x: getX(width, maxWidth),
    y: getY(barHeight, maxHeight),
    width: 5,
    height: barHeight,
    fill
  }
}

export const tickProps = (x, y, height) => {
  return {
    
  }
}
