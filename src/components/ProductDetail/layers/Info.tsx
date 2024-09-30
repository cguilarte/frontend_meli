import { CONDITION } from '../../../common/constants'

export const Info = ({ title, condition, price }: { title: string, condition: string, price: string }) => {
	return (
		<div className='pdp-content-body_info'>
			<div className='pdp-content-body_stick'>
				<div className='pdp-price__header'>
					<span>{CONDITION[condition]}  |  +100 vendidos</span>
				</div>
				<div className='pdp-price__title'>
					<h1>{title}</h1>
				</div>
				<div className='pdp-price__price'>
					<span>{price}</span>
				</div>
				<div className='pdp-price__submit'>
					<button className='pdp-price__action'>Comprar</button>
				</div>
			</div>
		</div>
	)
}
