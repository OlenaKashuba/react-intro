import React from 'react';

class UrlInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {url: ''};

		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler(event) {
		const url = event.target.value;
		// this.setState({
		// 	url: url
		// });
		this.props.receiver(url);
	}

	render() {
		return (
			<div>
				<input
				onChange={this.changeHandler}
				type="text"
				value={this.props.url}
				/>
			</div>
		)
	}
}

export default UrlInput;