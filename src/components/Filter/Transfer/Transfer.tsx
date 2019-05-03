import React from 'react';
import './Transfer.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

type Props = {
	
};


const Transfer: React.FC<Props> = props => {


	
	return (
		<div className="Transfer">
			<h3 className="Transfer--title Filter--title">Количество пересадок</h3>
			<div className="Transfer__items">
				<div className="Transfer__item">
					<FormControlLabel
						control={
							<Checkbox
								className="Transfer__item--check"
								// checked={this.state.checkedB}
								// onChange={this.handleChange('checkedB')}
								value="checkedA"
							/>
						}
						label="Без пересадок"
					/>
					<p className="Transfer__item--only">Только</p>
				</div>
			</div>
		</div>
	);
}

export default Transfer;