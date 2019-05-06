import React from 'react';
// import "./Filter.scss";
import Currency from "./Currency/Currency";
import Transfer from "./Transfer/Transfer";

type Props = {

};

const Filter: React.FC<Props> = props => {
	return (
		<div className="">
			<Currency/>
			<Transfer/>
		</div>
	);
}

export default Filter;