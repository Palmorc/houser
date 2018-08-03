import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WizardComp extends Component{
  constructor(){
    super();

    this.state = {
      name : '',
      address: '',
      state: '',
      zipcode: 0
    }
  }
  handleNameChange = (value) => {
    this.setState({ name : value })
  }
  handleAddressChange = (value) => {
    this.setState({ address : value })
  }
  handleStateChange = (value) => {
    this.setState({ state : value })
  }
  handleZipChange = (value) => {
    this.setState({ zipcode : value })
  }
  render(){
    console.log(this.state);
    return(
      <div>
        <input onChange={(e) => this.handleNameChange(e.target.value)} placeholder="Name" />
        <input onChange={(e) => this.handleAddressChange(e.target.value)} placeholder="Address"/>
        <input onChange={(e) => this.handleStateChange(e.target.value)} placeholder="State"/>
        <input onChange={(e) => this.handleZipChange(e.target.value)} placeholder="Zipcode"/>
        <Link to='/'><button>Cancel</button></Link>
      </div>
    )
  }
}
