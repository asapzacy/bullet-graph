import React from 'react'

export default function ColorMenu({ switchColor, color, fills }) {
  return (
    <menu className='colorMenu'>
      <ul className='colorList'>
        <li className='colorItem' style={{borderBottom: color === 'grey' ? `1px solid ${fills[2]}` : 'inherit'}} onClick={() => switchColor('grey')}>{'grey'}</li>
        <li className='colorItem' style={{borderBottom: color === 'red' ? `1px solid ${fills[2]}` : 'inherit'}} onClick={() => switchColor('red')}>{'red'}</li>
        <li className='colorItem' style={{borderBottom: color === 'green' ? `1px solid ${fills[2]}` : 'inherit'}} onClick={() => switchColor('green')}>{'green'}</li>
        <li className='colorItem' style={{borderBottom: color === 'blue' ? `1px solid ${fills[2]}` : 'inherit'}} onClick={() => switchColor('blue')}>{'blue'}</li>
        <li className='colorItem' style={{borderBottom: color === 'orange' ? `1px solid ${fills[2]}` : 'inherit'}} onClick={() => switchColor('orange')}>{'orange'}</li>
        <li className='colorItem' style={{borderBottom: color === 'violet' ? `1px solid ${fills[2]}` : 'inherit'}} onClick={() => switchColor('violet')}>{'violet'}</li>
        <li className='colorItem' style={{borderBottom: color === 'turquoise' ? `1px solid ${fills[2]}` : 'inherit'}} onClick={() => switchColor('turquoise')}>{'turquoise'}</li>
      </ul>
    </menu>
  )
}
