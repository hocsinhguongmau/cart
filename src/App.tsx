import React from "react"
import Cart from "./pages/cart/Cart"

import "./app.scss"

const App: React.FC = () => {
	return (
		<div className='App'>
			<div className='container'>
				<Cart />
			</div>
		</div>
	)
}

export default App
