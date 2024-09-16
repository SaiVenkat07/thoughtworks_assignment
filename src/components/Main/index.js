import "./index.css";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1 className="text">World Weather</h1>
        <div className="main-container">
          <input
            placeholder="Search City"
            className="search-input"
            id="search"
          />
          <div className="current-weather">
            <p className="weather-text">Current Weather</p>
            <h1 className="weather">34</h1>
          </div>
          <div className="conditions">
            <p className="humidity">Humidity</p>
            <p className="wind">Wind speed</p>
            <p className="condition">Weather conditions</p>
          </div>
          <div className="upcoming-weather-container">
            <div className="upcoming">
              <p className="date">sept-17</p>
              <p className="wea">32</p>
            </div>
            <div>
              <p>sept-18</p>
              <p>36</p>
            </div>
            <div>
              <p>sept-19</p>
              <p>30</p>
            </div>
            <div>
              <p>sept-20</p>
              <p>28</p>
            </div>
            <div>
              <p>sept-21</p>
              <p>32</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
