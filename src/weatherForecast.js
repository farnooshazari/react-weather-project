import React from "react";

export default function WeatherForecast() {
  return (
    <div id="forecast" className="WeatherForecast">
      {/*  */}
      <ul className="nav justify-content-center">
        <li className="nav-item p-3">
          <a className="nav-link" href="/">
            <div className="col mw-20 nextDays rounded-pill">
              <span className="mySpan">Tuesday</span>
              🌤 12°c
            </div>
          </a>
        </li>
        <li className="nav-item p-3">
          <a className="nav-link" href="/">
            <div className="col mw-20 nextDays rounded-pill">
              <span className="mySpan">Thursday</span>
              🌦 10°c
            </div>
          </a>
        </li>
        <li className="nav-item p-3">
          <a className="nav-link" href="/">
            <div className="col mw-20 nextDays rounded-pill">
              <span className="mySpan">Wednsday</span>
              🌨 10°c
            </div>
          </a>
        </li>
        <li className="nav-item p-3">
          <a className="nav-link" href="/">
            <div className="col mw-20 nextDays rounded-pill">
              <span className="mySpan">Friday</span>
              🌤 12°c
            </div>
          </a>
        </li>
        <li className="nav-item p-3">
          <a className="nav-link" href="/">
            <div className="col mw-20 nextDays rounded-pill">
              <span className="mySpan">Saturday</span>
              ☀️ 13°c
            </div>
          </a>
        </li>
        <li className="nav-item p-3">
          <a className="nav-link" href="/">
            <div className="col mw-20 nextDays rounded-pill">
              <span className="mySpan">Sunday</span>
              ⛅️ 12°c
            </div>
          </a>
        </li>
      </ul>
      {/*  */}
    </div>
  );
}
