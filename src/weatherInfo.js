import React from "react";

export default function WeatherInfo() {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <h1 id="city">Isfahan</h1>
          <ul>
            <li>
              last updated at <span id="date">Saturday, Oct 7</span>,{" "}
            </li>
            <li id="description"></li>
            <li>
              Humidity:{" "}
              <strong>
                <span id="humidity">50</span>%
              </strong>
              , Wind:
              <strong>
                <span id="wind">8</span>km/h
              </strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <img
              id="icon"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="clear"
              srcset=""
            />
            <div>
              <span id="temperature" className="temperature">
                26
              </span>
              <span className="unit">
                <a
                  href="/"
                  className="btn border-0 disabled text-decoration-none"
                  id="celcius-link"
                >
                  °C
                </a>{" "}
                |
                <a
                  className="btn border-0  text-decoration-none"
                  href="/"
                  id="farenheit-link"
                >
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
