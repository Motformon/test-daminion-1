import React, { Component } from 'react';
import Filter from '../../components/Filter/Filter';
import TicketsList from '../../components/TicketsList/TicketsList';
import tickets from '../../api/tickets.json';
import axios from 'axios';

type State = {
	tickets: any;
	ticketsPrice: number[];
	currency: string;
	EUR: number;
	USD: number;
};
class IssuingTickets extends Component {
	readonly state: State = {
		tickets: tickets.tickets,
		ticketsPrice: [],
		currency: 'RUB',
		EUR: 72.86,
		USD: 65.12,
	};
	
	handleChangeCurrency = (event:any) => {
		const value = event.target.value;

		const ticketsPrice = [];

		if(value === 'RUB') {
			for (let i = 0, l = this.state.tickets.length; i < l; i++) {
				ticketsPrice.push(this.state.tickets[i].price);
			}
		} else if(value === 'USD') {
			for (let i = 0, l = this.state.tickets.length; i < l; i++) {
				ticketsPrice.push(Math.round(this.state.tickets[i].price / this.state.USD));
			}
		} else if(value === 'EUR') {
			for (let i = 0, l = this.state.tickets.length; i < l; i++) {
				ticketsPrice.push(Math.round(this.state.tickets[i].price / this.state.EUR));
			}
		}

		this.setState({ currency: value, ticketsPrice});
		
  };

	async componentDidMount() {
		const ticketsPrice = [];
		for (let i = 0, l = this.state.tickets.length; i < l; i++) {
			ticketsPrice.push(this.state.tickets[i].price);
		}

		this.setState({
			ticketsPrice
		})

		try {
			const response = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`);

			const USD = response.data.Valute.USD.Value;
			const EUR = response.data.Valute.EUR.Value;

      this.setState({
				EUR,
				USD
			})
			
    } catch (e) {
      console.log(e)
    }
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
					ticketsPrice={this.state.ticketsPrice}
					currency={this.state.currency}
				/>
			</div>
    );
  }
}



export default IssuingTickets;

