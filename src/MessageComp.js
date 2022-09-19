import React from 'react'
import './MessageComp.css';


const messText = ', спасибо за знания, которые Вы нам даете!';
const devToolsInst = 'React Devtools установлен!!!!';

export default function MessageComp(props) {

	return (
		<div className='message-class'>
			<p>{props.name} {messText}</p>
			<p className='text-class'>{devToolsInst}</p>
		</div>
	)
}

// можно так:
//  MessageComp.defaultProps = { name: 'Андрей' }