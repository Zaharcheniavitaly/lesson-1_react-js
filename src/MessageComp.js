import React from 'react'
import './MessageComp.css';




export default function MessageComp(props) {

	return (
		<div className='message-class'>
			<p>{props.data.name} {props.data.messText}</p>
			<img src={props.data.img} alt="logo" />
			<p className='text-class'>{props.data.devToolsInstText}</p>
		</div>
	)
}

// можно так:
//  MessageComp.defaultProps = { name: 'Андрей' }