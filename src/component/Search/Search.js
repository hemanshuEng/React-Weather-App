import React, { Component } from 'react'
import './Search.css'
import search from '../../asset/search.svg'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state ={
            city:""
        }
    }
    handleChange = e =>{
        this.setState({ [e.target.name] : e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.fetchData(this.state.city)
        this.setState({ city:""})
      }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name="city" 
                    type="text" 
                    value={this.state.city}
                    onChange={this.handleChange}
                    className="SearchBar"/>
                    <button type="submit" name="submit" className="search-btn"><img src={search} alt="search" className="icon-search" /></button>
                </form>
            </div>
        )
    }
}
