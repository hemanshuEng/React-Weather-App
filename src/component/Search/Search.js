import React, { Component } from 'react'

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
                    onChange={this.handleChange}/>
                    <button type="submit" name="submit">submit</button>
                </form>
            </div>
        )
    }
}
