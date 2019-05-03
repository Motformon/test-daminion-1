import React, { Component } from 'react';
import "./IssuingTickets.scss";
import Filter from '../../components/Filter/Filter';
import TicketsList from '../../components/TicketsList/TicketsList';

// type State = {
//   count: number;
// };
class IssuingTickets extends Component {

	// readonly state: State = {
  //   count: 0,
  // };

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

