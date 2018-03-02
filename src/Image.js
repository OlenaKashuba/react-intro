import React from 'react';

class Image extends React.Component {
	render() {
		return(
			<img src={this.props.url} width="500"/> 
		)
	}

}

export default Image;
