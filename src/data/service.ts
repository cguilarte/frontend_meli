import { AUTH_API_KEY, URL_API } from "../common/constants";

const fetchFromApi = async (endpoint: string) => {
	try {
		const response = await fetch(`${URL_API}${endpoint}`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${AUTH_API_KEY}`,
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`Error en la solicitud: ${response.status}`);
		}

		const data = await response.json();
		return { ok: true, ...data };

	} catch (error) {
		console.error('Error al realizar la solicitud:', error);
		return { ok: false };
	}
};

export const getFilterProducts = (q: string) => {
	return fetchFromApi(`/items?q=${q}`);
};

export const getProductDetail = (id: string) => {
	return fetchFromApi(`/items/${id}`);
};
