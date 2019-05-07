import React from 'react';
// import "./Filter.scss";
import Currency from "./Currency/Currency";
import Transfer from "./Transfer/Transfer";

type Props = {
	currency: string;
	handleChangeCurrency: any;
};

const Filter: React.FC<Props> = props => {
	return (
		<div className="">
			<Currency
				currency={props.currency}
				handleChangeCurrency={props.handleChangeCurrency}
			/>
			<Transfer/>
		</div>
	);
}

export default Filter;