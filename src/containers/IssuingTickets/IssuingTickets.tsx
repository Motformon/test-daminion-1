import React, { Component } from 'react';
import Filter from '../../components/Filter/Filter';
import TicketsList from '../../components/TicketsList/TicketsList';
import tickets from '../../api/tickets.json';


type State = {
	tickets: Object[];
	currency: string;
};
class IssuingTickets extends Component {
	readonly state: State = {
		tickets: tickets.tickets,
		currency: 'RUB',
	};
	
	handleChangeCurrency = (event:any) => {
		this.setState({ currency: event.target.value });		
  };

	componentDidUpdate() {
		console.log(this.state.currency)
	}

  render() {
    return (
			<div className="IssuingTickets">
				<Filter
					currency={this.state.currency}
					handleChangeCurrency={this.handleChangeCurrency}
				/>
				<TicketsList 
					tickets={this.state.tickets}
				/>
			</div>
    );
  }
}



export default IssuingTickets;

