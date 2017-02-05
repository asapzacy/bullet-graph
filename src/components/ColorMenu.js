import React from 'react'

export default function ColorMenu({ switchColor, pickRandomColor, color, fills }) {
  const textColor = (checkColor) => ({ color:checkColor === color ? fills[3] : 'inherit' })
  const randomColor = () => {
    let random = pickRandomColor()
    while (random === color) {
      random = pickRandomColor()
    }
    return random
  }
  return (
    <menu className='colorMenu'>
      <ul className='colorList'>
        <li className='colorItem' style={textColor('default')} onClick={() => switchColor('default')}>{'default'}</li>
        <li className='colorItem' style={textColor('red')} onClick={() => switchColor('red')}>{'red'}</li>
        <li className='colorItem' style={textColor('green')} onClick={() => switchColor('green')}>{'green'}</li>
        <li className='colorItem' style={textColor('blue')} onClick={() => switchColor('blue')}>{'blue'}</li>
        <li className='colorItem' style={textColor('orange')} onClick={() => switchColor('orange')}>{'orange'}</li>
        <li className='colorItem' style={textColor('violet')} onClick={() => switchColor('violet')}>{'violet'}</li>
        <li className='colorItem' style={textColor('turquoise')} onClick={() => switchColor('turquoise')}>{'turquoise'}</li>
        <li className='colorItem' onClick={() => switchColor(randomColor())}>{'random'}</li>
        <li className='colorItem' style={textColor('temp')} onClick={() => switchColor('temp')}>{'temp'}</li>
      </ul>
    </menu>
  )
}
