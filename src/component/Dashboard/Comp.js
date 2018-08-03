import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class DashComp extends Component{
  constructor(){
    super();

    this.state = {
      houses : []
    }
  }

  getHouses = () => {
    axios.get('/api/houses').then( res=>{
      this.setState({
        houses : res.data
      })
    })
  }

  render(){
    const{ houses } = this.state
    console.log(houses);
    const houseRender = houses.map((element) => {
      return(element)
    })
    return(
      <div>
          <h1>{ houseRender }</h1>
         <Link to='/wizard'><button>Add New Property</button></Link>
      </div>
    )
  }
}
