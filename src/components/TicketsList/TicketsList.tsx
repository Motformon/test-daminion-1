import React from 'react';
import Ticket from './Ticket/Ticket';

type Props = {
	tickets: Object[];
};

const TicketList: React.FC<Props> = props => {
	const { tickets } = props;

	return (
		<div className="TicketList">
			{tickets.map((ticket:any, index:number) => (
        <Ticket ticket={ticket} key={index} />
      ))}
		</div>
	);
}

export default TicketList;