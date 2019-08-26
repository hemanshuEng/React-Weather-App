import React, { Component } from "react";
import axios from "axios";
import icon from "../asset/sun-symbol.svg";
import "./Weathercard.css";
class Weathercard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Leicester&apikey=b1189dca632043d7d274433375cce13f&units=metric"
      )
      .then(res => {
        
        this.setState({ city : res.data.name ,
            temp : res.data.main.temp.toFixed(),
           pressure : res.data.main.pressure,
           humidity : res.data.main.humidity,
           speed : res.data.wind.speed
        });
      }).catch(err=>console.log(err));
  }
  render() {
    return (
      <div className="Weather-container">
        <div className="Weather-Card">
          <p className="temp">{this.state.temp} &#8451;</p>
          <p className="city">{this.state.city}</p>
          <img src={icon} alt="icon" className="icon" />
          <div className="info">
            <p>Air Pressure: {this.state.pressure} inHg</p>
            <p>Humidity : {this.state.humidity} %</p>
            <p>Wind speed: {this.state.speed } mi/h</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Weathercard;
