


export const getBarWidth = (width, fullWidth) => `${(width / fullWidth) * 100}%`
export const getBarHeight = (height, fullHeight) => `${fullHeight * height}px`

export const getX = (barWidth, fullWidth) => `${(barWidth / fullWidth) * 100}%`
export const getY = (barHeight, fullHeight) => `${(fullHeight - parseInt(barHeight)) / 2}px`
