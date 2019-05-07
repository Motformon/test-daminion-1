import React from 'react';
import Ticket from './Ticket/Ticket';

type Props = {
	tickets: any;
	currency: string;
	ticketsPrice: number[];
};

const TicketList: React.FC<Props> = props => {
	const { tickets, currency } = props;

	return (
		<div className="TicketList">
			{tickets.map((ticket:any, index:number) => (
				<Ticket 
					ticket={ticket} 
					currency={currency} 
					price={props.ticketsPrice[index]} 
					key={index} />
      ))}
		</div>
	);
}

export default TicketList;