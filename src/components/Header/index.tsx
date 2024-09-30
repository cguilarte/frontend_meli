/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate(); // Navegar programáticamente
	const [search, setSearch] = React.useState('');

	const handleSubmitForm = (event: any) => {
		event.preventDefault();
		if (search.length === 0) return false;
		navigate(`/items?q=${search}`)
	}

	return (
		<header>
			<nav className="nav">
				<Link className="nav-logo" to="/" relative="path">
					<img src='/img/logo_ml.png' alt="Mercado Libre" />
				</Link>
				<form className="nav-search" onSubmit={handleSubmitForm}>
					<input
						type="text"
						placeholder='Buscar productos, marcas y más…'
						className="nav-search-input"
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
					<button type="submit" className="nav-search-button">
						<div role="img" aria-label="Buscar productos, marcas y más…" className="nav-icon-search"></div>
					</button>
				</form>
			</nav>
		</header>
	)
}

export default Header
