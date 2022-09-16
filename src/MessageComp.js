import React from 'react'
import './MessageComp.css';




export default function MessageComp(props) {
	return (
		<div className='message-class'>
			<p>{props.name}, спасибо за знания, которые Вы нам даете!</p>
		</div>
	)
}

// можно так:
//  MessageComp.defaultProps = { name: 'Андрей' }