$(document).ready(function() {

const date = moment();

const searchCity = JSON.parse(localStorage.getItem('storage'))

function currentWeather(city) {
  var APIKey = "52aa85fe9180c06fe869a1a3e7d7de19"
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  console.log(queryURL )
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(response => {
         WeatherInfo(response)
  })
}




//function for current weather

 function WeatherInfo(response) {

  

  console.log(response);

  
  $("#cityName").html("<h2>" + response.name + " Weather Details</h2>");
  $("#wind").text("Wind Speed: " + response.wind.speed);
  $("#humidity").text("Humidity: " + response.main.humidity);
  
  
  var tempF = (response.main.temp - 273.15) * 1.80 + 32;

  
  $("#temperature").text("Temperature (F) " + tempF.toFixed(2));
  
  
  console.log("Wind Speed: " + response.wind.speed);
  console.log("Humidity: " + response.main.humidity);
  console.log("Temperature (F): " + tempF);
  
  handleWeatherInfo(response)
};



function handleWeatherInfo(response) {

  const oneCallURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&exclude=hourly&appid=52aa85fe9180c06fe869a1a3e7d7de19`;
  
  $.ajax({
    url: oneCallURL,
    method: "GET"
  }).then(response => {
    console.log(response)
    $("#uvIndex").text(response.current.uvi);
    myFunction(response)
  })
}
// function handleweatherinfo
function myFunction(response) {

  for (let i = 1; i <= 5; i++) {

    
    var tempF = (response.daily[i].temp.day - 273.15) * 1.80 + 32
    $(`#day${i}`).text(moment().add(i,"d").format("l"))
    $(`#weeklyTemp${i}`).text(tempF.toFixed(2))
    $(`#weeklyHumidity${i}`).text(response.daily[i].humidity)
  }
}


$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  var city = $("input").val();
  localStorage.setItem("storage", JSON.stringify(searchCity));
  currentWeather(city)
});




// WHEN the user clicks the search button

//function handleSearch() {

// THEN I get the value that they entered into the search input

//function makeWeatherRequest();



// NEXT we need to build the URL for the first API request AJAX call
// Example: URL build the users input

// NEXT, make the request to the    URL with JQUERY AJAX

//$ajax(queryURL).then(function(response) {

// THEN get the lat and lng out of the 'response' object
// NEXT call 'makeonecallrequrest' and pass in the lat and lng    (create new var for lat and lng)

//} );

//function makeOneCallRequest( lat, lng ) {

    // NEXT we need to build the URL for the first API request AJAX call
// Example: URL build the users input

// NEXT, make the request to the    URL with JQUERY AJAX

//$ajax(queryURL).then(function(response) {

// finish rendering data to the html

//} );

//}

});