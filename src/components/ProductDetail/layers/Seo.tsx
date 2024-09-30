import { Helmet } from 'react-helmet-async'

export const Seo = ({ title, picture }: { title: string, picture: string }) => {
	return (
		<Helmet>
			<title> {title}</title>
			<meta name="twitter:card" content="product" />
			<meta name="twitter:image" content={picture} />
			<meta
				name="twitter:title"
				content={title}
			/>
			<meta name="twitter:site" content="Mercado Libre" />
			<meta
				name="twitter:description"
				content={`Comprá ${title} !Conocé nuestras increíbles ofertas y promociones en millones de productos.`}
			/>
		</Helmet>
	)
}
