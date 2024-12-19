import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
import Carts from "./Pages/Carts";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route
						path="/mens"
						element={<ShopCategory category="men" banner={men_banner} />}
					/>
					<Route
						path="/women"
						element={<ShopCategory category="women" banner={women_banner} />}
					/>
					<Route
						path="/kids"
						element={<ShopCategory category="kid" banner={kids_banner} />}
					/>
					<Route path="/product" element={<Product />}>
						<Route path=":productId" element={<Product />} />
					</Route>
					<Route path="/Cart" element={<Carts/>} />
					<Route path="/login" element={<LoginSignup />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
