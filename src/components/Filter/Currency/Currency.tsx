import React from 'react';
// import './Currency.scss';
// import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

type Props = {
	currency: string;
	handleChangeCurrency: any;
};

const Currency: React.FC<Props> = props => {
	return (
		<div className="Currency">
			<h3 className="Currency--title Filter--title">Валюта</h3>
			<div className="Currency__btns">
				<RadioGroup
					aria-label="currency"
					name="currency"
					value={props.currency}
					onChange={props.handleChangeCurrency}
				>
					<FormControlLabel
						value="RUB"
						control={<Radio/>}
						label="RUB"
					/>
					<FormControlLabel
						value="USD"
						control={<Radio/>}
						label="USD"
					/>
					<FormControlLabel
						value="EUR"
						control={<Radio/>}
						label="EUR"
					/>
				</RadioGroup>

				{/* <Button className="Currency__btn">
					RUB
				</Button>
				<Button className="Currency__btn Currency__btn--middle">
					USD
				</Button>
				<Button className="Currency__btn">
					EUR
				</Button> */}
			</div>
		</div>
	);
}

export default Currency;