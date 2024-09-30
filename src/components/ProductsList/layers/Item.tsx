/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import shipping_icon from '../../../assets/img/shipping.png'

export const Item = ({ product }: { product: any }) => {
	console.log({ product })
	return (
		<li className='search-layout--product__item'>
			<Link to={`/items/${product.id}`}>
				<div className='search-layout--product_content'>
					<div className='search-layout--product_wrapper'>
						<div className='search-layout--product_body'>
							<div className='search-layout--product_wrapper_imagen'>
								<img decoding="sync" src={product.picture} alt={`${product.title}`} />
							</div>
							<div className='search-layout--product_wrapper_body'>
								<h2>{product.title}</h2>
								<span className='search-layout--product_price'>{product.price.decimals}</span>
								{product.free_shipping && <span className='search-layout--product_shipping'><img src={shipping_icon} alt='Envio gratis - product name' />Envío gratis</span>}
							</div>
						</div>
						<span className='search-layout--product_content_addres'>{product?.address || ''}</span>
					</div>
				</div>
			</Link>
		</li>
	)
}
