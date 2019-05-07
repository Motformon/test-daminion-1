import React from 'react';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import 'moment/locale/ru';

type Props = {
	ticket: any;
};

function formatDate(date:any) {

  //получаем день
  var dd:any = date.getDate();
  if (dd < 10) dd = '0' + dd;
  
  //получаем месяц
  var mm:any = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  //получаем год
  var yy:any = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

const Ticket: React.FC<Props> = props => {
	const { ticket } = props;
	// console.log(ticket)
	moment.locale('ru');
	return (
		<div className='Ticket'>
			<div className="Ticket__primary">
				<img src="" alt="" className="Ticket__air-logo"/>
				<Button className="Ticket__btn">
					Купить за {ticket.price} ​₽
				</Button>
			</div>
			<div className="Ticket__secondary">
				<div className="Ticket__from">
					<p className="Ticket__from--time Ticket__secondary--time">{ticket.departure_time}</p>
					<p className="Ticket__from--city Ticket__secondary--city">{ticket.origin}, {ticket.origin_name}</p>
					<p className="Ticket__from--date Ticket__secondary--date">{moment(formatDate(new Date(ticket.departure_date))).format('D MMMM YYYY, dd')}</p>
				</div>
				<div className="Ticket__stops">
					<p className="Ticket__stops--info">{ticket.stops} ПЕРЕСАДКА</p>
					<img src="" alt="" className="Ticket__stops--img"/>
				</div>
				<div className="Ticket__to">
					<p className="Ticket__to--time Ticket__secondary--time">{ticket.arrival_time}</p>
					<p className="Ticket__to--city Ticket__secondary--city">{ticket.destination_name}, {ticket.destination}</p>
					<p className="Ticket__to--date Ticket__secondary--date">{moment(formatDate(new Date(ticket.arrival_date))).format('D MMMM YYYY, dd')}</p>
				</div>
			</div>
		</div>
	);
}

export default Ticket;