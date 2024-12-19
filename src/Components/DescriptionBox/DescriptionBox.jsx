import React from "react";
import '../DescriptionBox/DescriptionBox.css';


const DescriptionBox = () => {
	return (
		<div className="descriptionbox">
			<div className="descriptionbox-navigator">
				<div className="descriptionbox-nav-box">Description</div>
				<div className="descriptionbox-nav-box fade">Reviews (122) </div>
			</div>
			<div className="descriptionbox-description">
				<p>
					An e-commerce website is an online platfrom that facilitate buying and
					selling of products or services over the internet serves as a virtual
					marketplace where businesses and individuals showcase their products,
					interact with customers, and conduct transactions without the need for
					a physical presence. E-commerce websites have gained immense
					popularity due to their convenince accessibility, and the global reach
					they offer.
				</p>
				<p>
					E-commerce websites typically display products or services a detailed
					descriptions, imagesm prices, and any available variety(e.g, sizes,
					color). Each products usually has its own dedicated with relevant
					informations.
				</p>
			</div>
		</div>
	);
};
export default DescriptionBox;
