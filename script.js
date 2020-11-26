 const date = moment();

 const searchCity  = JSON.parse(localStorage.getItem('storage'))

 $(document).ready(handleWeatherInfo)
 $(document).ready(currentWeather)
 
 



 function currentWeather(city) {
   var APIKey = "52aa85fe9180c06fe869a1a3e7d7de19"
   var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
   $.ajax({
     url: queryURL,
     method: "GET"
   }).then(response => {
     appendWeatherInfo(response)
   })
 }


 $("#searchBtn").on("click", function(event) {

  var city = $("input").val(); 
  localStorage.setItem("storage", JSON.stringify(searchCity));
  currentWeather(city)
 });

//function for current weather

.then(function(response){

  var weatherURL = response.data.city_original_url;

  

  //for (let i = 0; i < .length; index++) {
    //const element = [i];
    
  }



}


//function appendWeatherInfo(response) {
   
  //  for (let i = 0; i <= 7; i++) {
    
    //var weatherAppend = $(`#weathercard${i}`);
    //var tempF = (response.daily[i].temp.day - 273.15) * 1.80 + 32
    
   // $(`#card${i}`).text(moment().add(i, "d").format("l"));
    
    //$(`#card-body${i}`).attr('src', `https://openweathermap.org/img/wn/${response.daily[i].weather[0].icon}@2x.png`);
    
    //$("<p>").text('Temp: ' + tempF.toFixed(2) + "°F").appendTo(weatherAppend).addClass('is-size-4');
    
  //}
//}

function handleWeatherInfo() {

    var APIKey = "52aa85fe9180c06fe869a1a3e7d7de19"
     var lat = 47.4444 
     var long = -122.3138
  
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&appid=" + APIKey;
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(response => {
      appendWeatherInfo(response)
    })
  }
// function handleweatherinfo, do I need a loop?
  function handleWeatherInfo (response)  {

    for (let i = 0; i <= 7; i++) {
    
      var weatherAppend = $(`#weathercard${i}`);
      var tempF = (response.daily[i].temp.day - 273.15) * 1.80 + 32

    
  }







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