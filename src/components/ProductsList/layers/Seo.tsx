import { Helmet } from 'react-helmet-async'
import { capitalizeFirstLetter } from '../../../common/utils'

export const Seo = ({ title }: { title: string }) => {
	return (
		<Helmet>
			<title> {capitalizeFirstLetter(title as string)}| MercadoLibre 📦</title>
			<meta
				name="description"
				content={`Comprá ${capitalizeFirstLetter(title as string)} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`}
			/>;
		</Helmet>
	)
}
