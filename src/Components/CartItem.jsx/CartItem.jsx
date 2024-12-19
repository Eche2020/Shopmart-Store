import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Contexts/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
	const { getTotalCartAmount, all_product, cartItem, removeFromCart } =
		useContext(ShopContext);
	return (
		<div className="cartitems">
			<div className="cartitems-format-main">
				<p>Products</p>
				<p>Title</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Total</p>
				<p>Remove</p>
			</div>
			<hr />
			{all_product.map((e) => {
				if (cartItem[e.id] > 0) {
					return (
						<div key={e.id}>
							<div className="cartitems-format cartitems-format-main">
								<img src={e.image} alt="" className="cartitems-product-icon" />
								<p>{e.name}</p>
								<p>${e.new_price}</p>
								<button className="cartitems-quantity">{cartItem[e.id]}</button>
								<p>{e.new_price * cartItem[e.id]}</p>
								<img
									className="cartitems-remove-icon"
									src={remove_icon}
									alt="removeIcon"
									onClick={() => {
										removeFromCart(e.id);
									}}
								/>
							</div>
							<hr />
						</div>
					);
				}
				return null;
			})}
			<div className="cartitems-down">
				<div className="cartitems-total">
					<h1>Cart Total</h1>
					<div>
						<div className="cartitem-total-item">
							<p>Subtotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr />
						<div className="cartitem-total-item">
							<p>Shipping Fee</p>
							<p>Free</p>
						</div>
						<hr />
						<div className="cartitem-total-item">
							<h3>Total</h3>
							<h3>${getTotalCartAmount()}</h3>
						</div>
					</div>
					<button>PROCEED TO CHECKOUT</button>
				</div>
				<div className="cartitems-promocode">
					<p>If you have a promo code enter it here</p>
					<div className="cartitems-promobox">
						<input type="text" placeholder="Enter code.." />
						<button>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
