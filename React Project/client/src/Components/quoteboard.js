import React from "react";
import axios from 'axios';

class Quoteboard extends React.Component { 
state = {
    stock1: "Apple"
  };
render () {
  	return ( 
  		<div className="card">
  <div className="card-body">
    {this.state.stock1}
  </div>
</div>

  	)
  }
}

export default Quoteboard;