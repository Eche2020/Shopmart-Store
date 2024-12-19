import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Contexts/ShopContext";

const Navbar = () => {
	const [menu, setMenu] = useState("shop");
	const { getTotalCartItem } = useContext(ShopContext);

	return (
		<div className="navbar">
			<div className="nav-logo">
				<img src={logo} alt="image" />
				<p>SHOPPER</p>
			</div>
			<ul className="nav-menu">
				<li
					onClick={() => {
						setMenu("shop");
					}}>
					<Link style={{ textDecoration: "none" }} to="/">
						Shop
					</Link>
					{menu === "shop" ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu("mens");
					}}>
					<Link style={{ textDecoration: "none" }} to="/mens">
						Mens
					</Link>
					{menu === "mens" ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu("women");
					}}>
					<Link style={{ textDecoration: "none" }} to="/women">
						Womens
					</Link>
					{menu === "women" ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu("kids");
					}}>
					<Link style={{ textDecoration: "none" }} to="/kids">
						Kids
					</Link>
					{menu === "kids" ? <hr /> : <></>}
				</li>
			</ul>
			<div className="nav-login-cart">
				<Link to="/login">
					<button>Login</button>
				</Link>
				<Link to="/cart">
					<img src={cart_icon} alt="cart" />
				</Link>

				<div className="nav-cart-count">{getTotalCartItem()}</div>
			</div>
		</div>
	);
};

export default Navbar;