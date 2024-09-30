/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../data/service';
import { Breadcrumb } from '../ui/Breadcrumb';
import Loading from '../ui/Loading';
import { Image } from './layers/Image';
import { Info } from './layers/Info';
import { Description } from './layers/Description';
import { Seo } from './layers/Seo';

export const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<any>(null);
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(false);

	// Obtenemos los productos de la api
	const getProduct = async (id: string) => {
		const result = await getProductDetail(id)

		if (!result.ok) {
			setError(true)
			return false;
		}

		setProduct(result.items)
		setCategories(result.categories || [])
	}

	useEffect(() => {
		if (id) {
			getProduct(id);
		}
	}, [id])

	return (
		<>

			{product ?
				<>
					<Seo picture={product?.picture} title={product?.title} />

					{categories.length > 0 && <Breadcrumb data={categories} hasDetail={true} />}

					<div className='pdp-content'>
						<Image image={product?.picture} title={product?.title} />
						<Info title={product?.title} condition={product?.condition} price={product?.price.decimals} />
						<Description description={product?.description} />
					</div>
				</>
				:
				<>
					{error ? 'Producto no encontrado' : <Loading />}
				</>

			}
		</>
	)
}
