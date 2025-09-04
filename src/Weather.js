import React from "react";
import "./Weather.css";
import Icons from "./Icons.js"


export default function Weather(){

  return (
    <div className="Weather">
      <ul className="cityList">
        <li>
          <a href="https://www.shecodes.io/learn/cohorts/2817/units/74/challenges/105">
            Lisbon
          </a>
        </li>
        <li>
          <a href="https://www.shecodes.io/learn/cohorts/2817/units/74/challenges/105">
            Paris
          </a>
        </li>
        <li>
          <a href="https://www.shecodes.io/learn/cohorts/2817/units/74/challenges/105">
            Sydney
          </a>
        </li>
        <li>
          <a href="https://www.shecodes.io/learn/cohorts/2817/units/74/challenges/105">
            San Francisco
          </a>
        </li>
      </ul>
      <form>
        <input
          type="text"
          className="searchBar"
          placeholder="Enter a city.."
        ></input>
        <input type="submit" className="searchButton" value="Search"></input>
        <input type="submit" className="currentButton" value="Current"></input>
      </form>
      <h1>Lisbon</h1>
      <p className="current-day">
        Thursday <span className="current-time">15:54</span>
      </p>
      <p className="current-description">Clouds</p>
      <section className="stats">
        <p className="current-temp">
          <span className="current-icon">
            {" "}
            <Icons defaults="CLOUDY" size={50} />
          </span>{" "}
          14
          <span className="C">&deg;C</span>
        </p>

        <p className="precipitation">
          Precipitation:<span className="Precipitation"> 82</span>%
        </p>
        <p className="wind">
          Wind:<span> 4</span>km/h
        </p>
      </section>
      <ul className="forecast">
        <li className="day">
          <span className="friday"> Fri</span>
          <br />
          <div>
            {" "}
            <Icons defaults="CLOUDY" size={40} />
          </div>
          <span className="friday-deg"> 13&deg;</span>
        </li>
        <li className="day">
          <span className="saturday">Sat</span>
          <br />
          <div>
            {" "}
            <Icons defaults="CLEAR_DAY" size={40} />
          </div>
          <span className="saturday-deg">13&deg;</span>
        </li>
        <li className="day">
          <span className="sunday">Sun</span>
          <br />
          <div>
            {" "}
            <Icons defaults="CLOUDY" size={40} />
          </div>
          <span className="sunday-deg">13&deg;</span>
        </li>
        <li className="day">
          <span className="monday">Mon</span>
          <br />
          <div>
            {" "}
            <Icons defaults="CLEAR_DAY" size={40} />
          </div>
          <span className="monday-deg">13&deg;</span>
        </li>
        <li className="day">
          <span className="tuesday">Tue</span>
          <br />
          <div>
            {" "}
            <Icons defaults="RAIN" size={40} />
          </div>
          <span className="tuesday-deg">13&deg;</span>
        </li>
      </ul>
    
    </div>
  );
}