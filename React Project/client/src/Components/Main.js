// Require React
import React from "react";
import Form from './form.js'
import Quotebord from './quoteboard.js'

class Main extends React.Component {
   
  render () {
  	return ( 
  	<div>	
    <Form />	
    <Quotebord />
    </div>
  		)
 	 }
  }

export default Main;