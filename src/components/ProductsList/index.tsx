/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getFilterProducts } from '../../data/service';
import { Item } from './layers/Item';
import { Breadcrumb } from "../ui/Breadcrumb";
import Loading from "../ui/Loading";
import { Seo } from "./layers/Seo";

export const ProductsList = () => {
	const [searchParams,] = useSearchParams();
	const queryName = searchParams.get('q');
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(false);

	// Obtenemos los productos de la api
	const getProducts = async (query: string) => {
		const result = await getFilterProducts(query)

		if (!result.ok) {
			setError(true)
			return false;
		}

		setProducts(result.items || [])
		setCategories(result.categories || [])
	}

	useEffect(() => {
		if (queryName) {
			getProducts(queryName);
		}
	}, [queryName])

	return (
		<>
			<Seo title={queryName || ''} />
			{products.length === 0 && <> {error ? 'Sin resultado' : <Loading />}</>}

			{categories.length > 0 && <Breadcrumb data={categories} />}
			<ol className='search-layout--product'>
				{products.length > 0 && products.map((item, index: number) => <Item key={`product-${index}`} product={item} />)}
			</ol>
		</>
	)
}
