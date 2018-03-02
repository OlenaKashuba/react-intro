import React from 'react';
// import NameForm from './NameForm';
import UrlInput from './UrlInput';
import Image from './Image';

function getDate(){
  const date = new Date();
  return date.toLocaleDateString('en-GB');
}

class App extends React.Component {
	constructor() {
		super();

		this.state = {url: "https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg"};

		this.receiver = this.receiver.bind(this);
	};

	receiver(url) {
		this.setState({
			url: url
		});
	}
	
	render(){
	    return (
	    	<div>
		    	<UrlInput 
		    	url={this.state.url} 
		    	receiver={this.receiver} />
		    	<Image url={this.state.url} />
	    	</div>
	    )
  }
}

export default App;
