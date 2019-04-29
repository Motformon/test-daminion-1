import React, { Component } from 'react';
import "./IssuingTickets.scss";
import Filter from '../../components/Filter/Filter';
import TicketsList from '../../components/TicketsList/TicketsList';

class IssuingTickets extends Component {

	state = {

	}

  render() {
    return (
			<div className="IssuingTickets">
				<Filter/>
				<TicketsList/>
			</div>
    );
  }
}



export default IssuingTickets;

