
export const Description = ({ description }: { description: string }) => {
	return (
		<div className='pdp-content-description'>
			<h2 className='pdp-content-description__title'>Descripción del producto</h2>
			<p className='pdp-content-description__body'>{description}</p>
		</div>
	)
}
