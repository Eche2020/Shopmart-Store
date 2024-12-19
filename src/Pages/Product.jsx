import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import { ShopContext } from '../Contexts/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/productDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Relatedproduct from '../Components/RelatedProduct/Relatedproduct';
import Cart from './Carts';
import CartItem from '../Components/CartItem.jsx/CartItem';



const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
		<div>
			<Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <Relatedproduct />
      <Cart/>
      <CartItem/>
		</div>
	);
}

export default Product
