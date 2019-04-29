import React from 'react';
import './Currency.scss';
import Button from '@material-ui/core/Button';

type Props = {
	
};

const Currency: React.FC<Props> = props => {
	return (
		<div className="Currency">
			<h3 className="Currency--title Filter--title">Валюта</h3>
			<div className="Currency__btns">
				<Button variant="contained" className="Currency__btn">
					RUB
				</Button>
				<Button variant="contained" className="Currency__btn Currency__btn--middle">
					USD
				</Button>
				<Button variant="contained" className="Currency__btn">
					EUR
				</Button>
			</div>
		</div>
	);
}

export default Currency;