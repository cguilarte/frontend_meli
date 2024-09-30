import React from 'react'
import Header from '../Header'
import { Helmet, HelmetProvider } from "react-helmet-async";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Mercado Libre Argentina - Envíos Gratis en el día</title>
				<meta
					name="description"
					content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles."
				/>;
			</Helmet>
			<div className="container" >
				<Header />
				<main>{children}</main>
			</div>
		</HelmetProvider>
	)
}

export default Layout
