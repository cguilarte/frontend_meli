/* eslint-disable @typescript-eslint/no-explicit-any */
export const URL_API = import.meta.env.VITE_URL_API || "http://localhost:8001";
export const AUTH_API_KEY = import.meta.env.VITE_AUTH_API_KEY || '';


export const CONDITION: Record<any, string> = {
	new: "Nuevo",
	used: "Usado",
};
