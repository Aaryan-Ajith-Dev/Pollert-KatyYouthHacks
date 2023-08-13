import React, { useState } from 'react';  // Import useState
import { Icon } from '@iconify/react';

function Intro() {
  const [errorMessage, setErrorMessage] = useState("");  // State to manage error message
  const apiKey = "98d48a25b83c30f992bfc51a8115a841be143718";
  const apiUrl = "https://api.waqi.info/feed/";
  
  async function checkWeather(city) {
    try {
      const response = await fetch(apiUrl + city + `/?token=${apiKey}`);
      if (!response.ok) {  // Check for error status
        setErrorMessage("Error fetching data. Please try again.");  // Set error message
        return;
      }
      const data = await response.json();
      // AQI VALUE IS ADDED HERE ----------------------------------------------
      document.querySelector(".city").innerHTML = data['data']['aqi']; 
      // ----------------------------------------------------------------------
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");  // Set error message
    }
  }

  const handleSearch = () => {
    const searchBox = document.querySelector(".search-text");
    checkWeather(searchBox.value);
  };

  return (
    <div className="header" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60')" }}>
      <h1>Pollert </h1>
      <h2> an polished approach to reduce pollution from our planet</h2>
      <div className='search-box'>
        <input type='text' className='search-text' placeholder="Enter city" spellCheck={false}></input>
        <button style={{ background: "transparent", border: "0px" }} onClick={handleSearch}>
          <Icon icon="ion:search" color="white" style={{ transform: "rotate(90deg)" }} />
        </button>
      </div>
      <div className="weather">       
        <h2 className="city">New York</h2>
        <p className="error">{errorMessage}</p>
      </div>
    </div>
  );
}

export default Intro;
