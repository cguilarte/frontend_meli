export const Image = ({ image, title }: { image: string, title: string }) => {
	return (
		<div className='pdp-content-body_picture'>
			<img src={image} decoding="sync" alt={`${title}`} />
		</div>
	)
}
