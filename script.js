//Using async and await keyword for to fetching details from Api.

let getWeatherData = async () => {
    let apiKey = "0989568a7ed0f9a70c84a0aec922f089";
    //get the HTML element
    let city = document.getElementById("city").value;
    //fetch the api response
    let readableStream = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    //get the api using parse
    let data = await readableStream.json();
  
    // Using try and catch instead of .then() and catch() block.
  
    try {
      let weather = document.getElementById("weather");
      //to put the data 
      weather.innerHTML = `<br><h1>city: ${data.name}</h1>
          <h2>Temperature: ${data.main.temp_min}:${data.main.temp_max}</h2>
          <h2>Humidity:${data.main.humidity}%`;
    } catch (error) {
      alert(`Error fetching weather data.${error}`);
    }
  };