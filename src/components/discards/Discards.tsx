import React from "react"
import { CartType } from "../../types"
import CartItem from "../cartItem/CartItem"

import "./discards.scss"

type Props = {
	discards: CartType[]
}
const Discards: Function = ({ discards }: Props) => {
	return (
		<div className='discards'>
			<h2 className='discards__title'>Your discard list</h2>
			{discards.map((discard, cartIndex: number) => (
				<div key={`discard_${discard.id}`}>
					<CartItem
						key={`cart_${discard.id}`}
						cart={discard}
						cartIndex={cartIndex}
					/>
				</div>
			))}
		</div>
	)
}

export default Discards
