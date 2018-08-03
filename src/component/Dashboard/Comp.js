import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DashComp extends Component{
  constructor(){
    super();

    this.state = {
      houses : []
    }
  }
  render(){
    const{ houses } = this.state
    const houseRender = houses.map((element,i) => {
      return(element[i])
    })
    return(
      <div>
          Dash
          { houseRender }
         <Link to='/wizard'><button>Add New Property</button></Link>
      </div>
    )
  }
}
