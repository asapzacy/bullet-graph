import React from 'react'

export default function ColorMenu({ switchColor, color, fills }) {
  return (
    <menu className='colorMenu'>
      <ul className='colorList'>
        <li className='colorItem' style={{color:color === 'grey' ? fills[3] : 'inherit'}} onClick={() => switchColor('grey')}>{'grey'}</li>
        <li className='colorItem' style={{color:color === 'red' ? fills[3] : 'inherit'}} onClick={() => switchColor('red')}>{'red'}</li>
        <li className='colorItem' style={{color:color === 'green' ? fills[3] : 'inherit'}} onClick={() => switchColor('green')}>{'green'}</li>
        <li className='colorItem' style={{color:color === 'blue' ? fills[3] : 'inherit'}} onClick={() => switchColor('blue')}>{'blue'}</li>
        <li className='colorItem' style={{color:color === 'orange' ? fills[3] : 'inherit'}} onClick={() => switchColor('orange')}>{'orange'}</li>
        <li className='colorItem' style={{color:color === 'violet' ? fills[3] : 'inherit'}} onClick={() => switchColor('violet')}>{'violet'}</li>
        <li className='colorItem' style={{color:color === 'turquoise' ? fills[3] : 'inherit'}} onClick={() => switchColor('turquoise')}>{'turquoise'}</li>
      </ul>
    </menu>
  )
}
