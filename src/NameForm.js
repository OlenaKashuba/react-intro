import React from 'react';

class NameForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
		        <label htmlFor="my-id">Name:</label>		     
		        <input 
		        	id="my-id"
		        	type="text"
		        	value={this.state.value}
		        	onChange={this.handleChange} />		        
		        <input type="submit" value="Submit" />
	      	</form>
		)
	}
}

export default NameForm;

