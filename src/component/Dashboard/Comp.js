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

  componentDidMount = () => {
    axios.get('/api/houses').then( res => {
      console.log(res)
      this.setState({
        houses : res.data
      })
    }).catch(err => console.log(err))
  }

  render(){
    const{ houses } = this.state
    console.log(houses);
    const houseRender = houses.map((element,index) => {
      return(`${element.name} \n | ${element.address} \n| ${element.state} \n| ${element.zipcode} \n|`)
    })
    return(
      <div>
          <h1>{ houseRender }</h1>
         <Link to='/wizard'><button>Add New Property</button></Link>
      </div>
    )
  }
}
