import React from "react";
import "./App.css";
import Weathercard from "./component/Weathercard";
import Search from "./component/Search/Search";
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
          <Search 
          fetchData={this.fetchSearchData}/>
          <Weathercard  searchCity={this.state.city}/>
        </header>
      </div>
    );
  }
}

export default App;
