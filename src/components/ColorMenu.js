import React from 'react'

export default function ColorMenu({ switchColor }) {
  return (
    <menu className='colorMenu'>
      <ul className='colorList'>
        <li className='colorItem' onClick={() => switchColor('grey')}>{'grey'}</li>
        <li className='colorItem' onClick={() => switchColor('red')}>{'red'}</li>
        <li className='colorItem' onClick={() => switchColor('green')}>{'green'}</li>
        <li className='colorItem' onClick={() => switchColor('blue')}>{'blue'}</li>
        <li className='colorItem' onClick={() => switchColor('orange')}>{'orange'}</li>
        <li className='colorItem' onClick={() => switchColor('violet')}>{'violet'}</li>
        <li className='colorItem' onClick={() => switchColor('turquoise')}>{'turquoise'}</li>
      </ul>
    </menu>
  )
}
