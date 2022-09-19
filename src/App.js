import React from "react";
import MessageComp from "./MessageComp";



function App() {

	const messData = {
		name: "Андрей",
		messText: ', спасибо за знания, которые Вы нам даете!',
		devToolsInstText: 'React Devtools установлен!!!!',
		img: "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google_Chrome-256.png"
	}

	return (
		<div className="app">
			<MessageComp data={messData} />
		</div>
	);
}

export default App;  
