
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

export const tickProps = (width, height, index, step, last, percentage) => {
  const x = getX(step, width)
  return {
    x1: x,
    y1: height,
    x2: x,
    y2: height + 15,
    x3: x,
    y3: height + 35,
    text: step.toLocaleString(),
    position: 'middle',
    percentage
  }
}
