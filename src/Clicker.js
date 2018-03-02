import React from 'react';

class Clicker extends React.Component {
  handleClick(event){
    event.preventDefault();

    alert('Button clicked');
  }

  render(){
    return (
      <div>
        <button>Click me</button>
      </div>
    );
  }
}

export default Clicker;