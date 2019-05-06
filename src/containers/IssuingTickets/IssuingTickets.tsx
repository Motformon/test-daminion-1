import React, { Component } from 'react';
import Filter from '../../components/Filter/Filter';
import TicketsList from '../../components/TicketsList/TicketsList';
import tickets from '../../api/tickets.json';


type State = {
  tickets: Object[];
};
class IssuingTickets extends Component {

	readonly state: State = {
    tickets: tickets.tickets,
  };

  render() {
    return (
			<div className="IssuingTickets">
				<Filter/>
				<TicketsList tickets={this.state.tickets}/>
			</div>
    );
  }
}



export default IssuingTickets;

