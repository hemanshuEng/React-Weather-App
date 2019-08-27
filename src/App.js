import React from "react";
import "./App.css";
import Weathercard from "./component/Weathercard";
import Search from "./component/Search/Search";
import Brand from './component/Brand';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      city:'London'
    }
  }
  fetchSearchData=(data)=>{
    this.setState({city:data})
  }
  
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <div className="NavBar">
          <Brand/>
          <Search 
          fetchData={this.fetchSearchData}/>
          </div>
          <Weathercard  searchCity={this.state.city}/>
        </header>
      </div>
    );
  }
}

export default App;
