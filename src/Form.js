import React from 'react';
import Input from './Input';


class Form extends React.Component {
	constructor() {
		super();

		this.state = {
			firstnameValid: 'blank',
			lastnameValid: 'blank',
			emailValid: 'blank',
			firstnameError: 'blank',
			lastnameError: 'blank',
			emailError: 'blank'
		};

		this.validateFirstName = this.validateFirstName.bind(this);
		this.validateLastName = this.validateLastName.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	validateFirstName(newValue) {
		if (newValue.length != 0) {
			this.setState({
				firstnameValid: true
			});
		} else {
			this.setState({
				firstnameValid: false
			})
		}
	}

	validateLastName(newValue) {
		if (newValue.length != 0) {
			this.setState({
				lastnameValid: true
			});
		} else {
			this.setState({
				lastnameValid: false
			})
		}
	}

	validateEmail(newValue) {
		if (newValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
			this.setState({
				emailValid: true
			});
		} else {
			this.setState({
				emailValid: false
			})
		}
	}

	handleSubmit(event) {
		console.log(this.state);
		event.preventDefault();
		if (this.state.firstnameValid === true
			&& this.state.lastnameValid === true
			&& this.state.emailValid === true) {
			alert('The form is submitted');
		}

		if (this.state.firstnameValid === false || this.state.firstnameValid === 'blank') {
				this.setState ({
					firstnameError: true
				})
		} else {
				this.setState ({
					firstnameError: false
				})
		}

		if (this.state.lastNameValid === false || this.state.lastnameValid === 'blank') {
				this.setState ({
					lastnameError: true
				})
		} else {
				this.setState ({
					lastnameError: false
				})
		}

		if (this.state.emailValid === false || this.state.emailValid === 'blank') {
				this.setState ({
					emailError: true
				})
		} else {
			this.setState ({
					emailError: false
				})
		}
	}

	render() {
		return(
			<form method="post" action="/">
				<Input name="firstname" receiver={this.validateFirstName} error={this.state.firstnameError}/>
				<Input name="lastname" receiver={this.validateLastName} error={this.state.lastnameError}/>
				<Input name="email" receiver={this.validateEmail} error={this.state.emailError}/>
				<button
					type="submit"
					value="submit"
					onClick={this.handleSubmit}
				> Submit
				</button>
			</form>
		)
	}
}

export default Form;