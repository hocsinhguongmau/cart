import React from "react"
import { CartType } from "../../types"
import CartItem from "../cartItem/CartItem"

import "./approved.scss"

type Props = {
	approved: CartType[]
}
const Approved: Function = ({ approved }: Props) => {
	return (
		<div className='approved'>
			<h2 className='approved__title'>Your approved list</h2>
			{approved.map((approved, cartIndex: number) => (
				<p key={`approved_${approved.id}`}>
					<CartItem
						key={`cart_${approved.id}`}
						cart={approved}
						cartIndex={cartIndex}
					/>
				</p>
			))}
		</div>
	)
}

export default Approved
