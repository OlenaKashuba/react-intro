import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
	};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const newValue = event.target.value;
		this.props.receiver(newValue);
	}

	render() {
		return(
			<div>
				<label 
					htmlFor={'id-' + this.props.name}
					className='input-label'
				>
					{this.props.name} 
				</label>
				<input
					onChange ={this.handleChange}
					id={'id-' + this.props.name}
					type="text"
					name={this.props.name}
					value={this.props.value}
					className={'input-' + this.props.name}
				 />
				 <p 
				 	className = {this.props.error === true ? 'input-error-message' : 'hidden'}
				 > 
				 {this.props.name + ' is invalid'} </p>
			</div>
		)
	}
}

export default Input;