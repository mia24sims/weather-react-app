import React from "react";
import "./Weather.css";


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
        <span className="current-icon">🌫️</span> 14<span className="C">&deg;C</span>
      </p>

      <p className="precipitation">
        Precipitation:<span className="Precipitation">82</span>%
  
    </p><p className="wind" >
        Wind:<span>4</span>km/h
      </p></section>
      <ul className="forecast">
        <li>
          Fri
          <br />
          <div>🌫️</div>
          13&deg;
        </li>
        <li>
          Sat
          <br />
          <div>☀️</div>
          13&deg;
        </li>
        <li>
          Sun
          <br />
          <div>🌫️</div>
          13&deg;
        </li>
        <li>
          Mon
          <br />
          <div>☀️</div>
          13&deg;
        </li>
        <li>
          Tues
          <br />
          <div>🌧️</div>
          13&deg;
        </li>
      </ul>
    </div>
  );
}