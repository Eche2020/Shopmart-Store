import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

// function to check if a cart is empty
const getdefaultCart = () => {
	let Cart = {};
	for (let index = 0; index < all_product.length + 1; index++) {
		Cart[index] = 0;
	}
	return Cart;
};

const ShopContextProvider = (props) => {
	const [cartItem, setcartItem] = useState(getdefaultCart());

	const addToCart = (itemId) => {
		setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));		
	};

	const removeFromCart = (itemId) => {
		setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const getTotalCartAmount = () => {
		let totalAmount = 0
		for (const item in cartItem) {
			if (cartItem[item] > 0) {
				let itemInfo = all_product.find((product) => product.id === Number(item))
				if (itemInfo) {
					totalAmount += itemInfo.new_price * cartItem[item]
				}
			}
		}
		return totalAmount;
	};

	const getTotalCartItem = (e) => {		
		let totalItem = 0;
		for (const item in cartItem) {
			if (cartItem[item] > 0) {
				totalItem += cartItem[item];
			}
		}
		return totalItem;
	}


	

	const contextValue = {
		all_product,
		getTotalCartAmount,
		getTotalCartItem,
		cartItem,
		addToCart,
		removeFromCart
	};

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};

export default ShopContextProvider;
