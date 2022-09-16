import React from 'react'
import './MessageComp.css';




export default function MessageComp(props) {
	return (
		<div className='message-class'>
			<p>{props.name}, спасибо за знания, которые Вы нам даете!</p>
			<p className='text-class'>React Devtools установлен!!!!</p>
		</div>
	)
}

// можно так:
//  MessageComp.defaultProps = { name: 'Андрей' }