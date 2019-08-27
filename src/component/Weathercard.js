import React, { Component } from "react";
import axios from "axios";
import clear from "../asset/clear.svg";
import cloud from "../asset/cloud.svg";
import drizzle from "../asset/drizzle.svg";
import mist from "../asset/mist.svg";
import snow from "../asset/snow.svg";
import rain from "../asset/rain.svg";
import thunderstrom from "../asset/thunderstrom.svg";

import "./Weathercard.css";
const WeatherKey = process.env.REACT_APP_WEATHER_API_KEY;
console.log(WeatherKey);
class Weathercard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      temp: "",
      pressure: "",
      humidity: "",
      speed: "",
      range: "",
      searchCity:"London"
    };
    
  }

  componentDidUpdate(prevProps){
    if(prevProps.searchCity !==this.props.searchCity)
    {
     
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.props.searchCity}&apikey=${WeatherKey}&units=metric`
      )
      .then(res => {
        this.setState({
          city: res.data.name,
          temp: res.data.main.temp.toFixed(),
          pressure: res.data.main.pressure,
          humidity: res.data.main.humidity,
          speed: res.data.wind.speed,
          range: res.data.weather[0].id
        });
      })
      .catch(err => console.log(err));
    }
  }
  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity}&apikey=${WeatherKey}&units=metric`
      )
      .then(res => {
        this.setState({
          city: res.data.name,
          temp: res.data.main.temp.toFixed(),
          pressure: res.data.main.pressure,
          humidity: res.data.main.humidity,
          speed: res.data.wind.speed,
          range: res.data.weather[0].id
        });
      })
      .catch(err => console.log(err));
  }

  findrighticon = () => {
    const iconrange = this.state.range;

    if (iconrange >= 200 && iconrange <= 232) {
      return thunderstrom;
    } else if (iconrange >= 300 && iconrange <= 321) {
      return drizzle;
    } else if (iconrange >= 500 && iconrange <= 521) {
      return rain;
    } else if (iconrange >= 600 && iconrange <= 622) {
      return snow;
    } else if (iconrange >= 700 && iconrange <= 762) {
      return mist;
    } else if (iconrange === 800) {
      return clear;
    } else if (iconrange >= 801 && iconrange <= 804) {
      return cloud;
    }
    return clear;
  };

  render() {
    console.log();
    return (
      <div className="Weather-container">
        <div className="Weather-Card">
          <p className="temp">{this.state.temp} &#8451;</p>
          <p className="city">{this.state.city}</p>
          <img src={this.findrighticon()} alt="icon" className="icon" />
          <div className="info">
            <p>Air Pressure: {this.state.pressure} inHg</p>
            <p>Humidity : {this.state.humidity} %</p>
            <p>Wind speed: {this.state.speed} mi/h</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Weathercard;
