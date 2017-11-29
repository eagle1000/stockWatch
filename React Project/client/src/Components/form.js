// Require React
import React from "react";
import API from "../utils/API";

class Form extends React.Component {
	state = {
    userName: "",
    stock1: "",
    stock2: "",
    stock3:"",
    stock4:"",
    stock5:""
  };

   loadForm = () => {
    API.getStocks()
      .then(res =>
        this.setState({ userName: "", stock1: "", stock2: "", stock3: "", stock4: "", stock5: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value

    });
  };

   handleFormSubmit = event => {
    event.preventDefault();
   	console.log(this.state.userName, this.state.stock1, this.state.stock2, this.state.stock3, this.state.stock4, this.state.stock5)
   	API.saveStocks({
        userName: this.state.userName,
        stock1: this.state.stock1,
        stock2: this.state.stock2,
        stock3: this.state.stock3,
        stock4: this.state.stock4,
        stock5: this.state.stock5

      })
   	   .then(res => this.loadForm())
        .catch(err => console.log(err));
  };

  render () {
  	return ( 	
  <form className="col-md-6">
  	<div className="form-group">
    	<label className="col-form-label">Enter User Name</label>
    	<input type="text" className="form-control" name="userName" value={this.state.userName} onChange={this.handleInputChange} placeholder="User Name"/>
  	</div>
  	<div className="form-group">
    	<label className="col-form-label">Stock 1</label>
    	<input type="text" className="form-control" name="stock1" value={this.state.stock1} onChange={this.handleInputChange} placeholder="Stock 1"/>
  	</div>
  	<div className="form-group">
    	<label className="col-form-label">Stock 2</label>
    	<input type="text" className="form-control" name="stock2" value={this.state.stock2} onChange={this.handleInputChange} placeholder="Stock 2"/>
  	</div>
  	<div className="form-group">
    	<label className="col-form-label">Stock 3</label>
    	<input type="text" className="form-control" name="stock3" value={this.state.stock3} onChange={this.handleInputChange} placeholder="Stock 3"/>
  	</div>
  	<div className="form-group">
    	<label className="col-form-label">Stock 4</label>
    	<input type="text" className="form-control" name="stock4" value={this.state.stock4} onChange={this.handleInputChange} placeholder="Stock 4"/>
  	</div>
  	<div className="form-group">
    	<label className="col-form-label">Stock 5</label>
    	<input type="text" className="form-control" name="stock5" value={this.state.stock5} onChange={this.handleInputChange} placeholder="Stock 5"/>
  	</div>
  	<button type="button" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
	</form>	
  		)
 	 }
  }

export default Form;