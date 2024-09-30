import { useNavigate } from "react-router-dom";

interface BreadcrumbProps {
	data: string[];
	hasDetail?: boolean;
}
export const Breadcrumb = ({ data, hasDetail = false }: BreadcrumbProps) => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1); // Navega a la URL anterior
	};

	return (
		<ol className="breadcrumb">
			{hasDetail &&
				<li className="breadcrumb__item" onClick={goBack}>
					<span className="breadcrumb_back">Volver al listado</span>
					<span className="breadcrumb_separator">|</span>
				</li>
			}
			{data.map((category, index) => (
				<li key={index} className="breadcrumb__item">
					<span className="breadcrumb__item__text">{category}</span>
					{index < data.length - 1 && (
						<div className="breadcrumb__item__icon" aria-hidden="true">
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
								<path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
							</svg>
						</div>
					)}
				</li>
			))}
		</ol>
	);
};