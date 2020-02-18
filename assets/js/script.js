$(document).ready(function () {
    let i = 0;
    let cityArr = [];
    const apiKey = "aed52c01e7f5375831def9553ce0837d";
    

    var retrieveCities = localStorage.getItem('userCity');
    // Use the [OpenWeather API](https://openweathermap.org/api)
    //- http://api.openweathermap.org/data/2.5/weather
    //- http://api.openweathermap.org/data/2.5/forecast
    //- http://api.openweathermap.org/data/2.5/uvi


    // let forecastURL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + apiKey + "&q=";

    retrieveCities.forEach(function(item){
        var p = $("<p>" + item + "</p>")
        $("#searchArea").append(p)
    });


    $("#seachBtn").on("click", function () {
        let city = $("#city").val()
        var cityList = []
        cityList.push(city)
        localStorage.setItem('userCity', cityList)
        let weatherURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&q=" + city;
        
        $.ajax({
            url: weatherURL,
            method: "GET"
        }).then(function (response) {
            // console.log(response)

            var currentDate = moment(response.dt, "X").format("MM/DD/YYYY")
            var row = $("<div class='row'>")
            var col = $("<div class='col-sm-12'>")
            var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
            var h3 = $("<h3>")
            h3.append(response.name, " (" + currentDate + ")", img)

            var p = $("<p>")
            temp = ((response.main.temp - 273.15) * 1.8) + 32
            temp = Math.round(temp)
            p.append("Temperature: " + temp + " F" + "<br><br>")
            var humidity = response.main.humidity
            p.append("Humidity: " + humidity + "<br><br>")
            var windSpeed = response.wind.speed
            p.append("Wind Speed: " + windSpeed + " MPH")
            col.append(h3, p)
            row.html(col)
            $("#dashboard").append(row)

            var lat = response.coord.lat
            var lon = response.coord.lon

            // for (let index = 1; index < response.list.length; index++) {
            //     if (response.list[index].dt_txt.indexof("09:00:00") > -1) {
            //         p.append("5-Day Forecast: " + "")
            //         col.append(p)
            //         row.html(col)
            //         $("dashboard").append.(row)
            //     }
            // }
 
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon,
                method: "GET"
            }).then(function (response2) {
                // console.log("response2:")
                // console.log(response2)
                var pTwo = $("<p>")
                var uvResults = response2.value
                pTwo.append("UV Index: " + "<button id='uvButton'>" + uvResults + "</button>")
                col.append(pTwo)
                row.html(col)
                $("#dashboard").append(row)
                if (uvResults >= 4 && uvResults <= 7) {
                    $("#uvButton").addClass('uvButtonTwo');
                } else if (uvResults > 7) {
                    $("#uvButton").addClass('uvButtonThree');
                } else {$("#uvButton").addClass('uvButtonOne');}
                let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?appid=" + apiKey + "&q=" + city;
               
                $.ajax({
                    
                    // let city = $("#city").val()
                    // url: "http://api.openweathermap.org/data/2.5/forecast?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon + "&q=",
                    url: forecastURL,
                    method: "GET"
                }).then(function(response3){
                    // console.log("response3:")
                    // console.log(response3)
                    for (let index = 1; index < response3.list.length; index++) {    
                        // var currentDate = moment(response3.dt, "X").format("MM/DD/YYYY")
                        var p = $("<p>")
                        var row = $("<div class='row'>")
                        var col = $("<div class='col-sm-12'>")
                        var img = $("<img>")
                        // var FiveDayDate = moment(response3.dt).format("MM/DD/YYYY")
                        // console.log(FiveDayDate)
                        // var img = $("<img>")
                        // img.attr("src", "http://openweathermap.org/img/w/" + response3.weather[0].icon + ".png")
                
                    if (response3.list[index].dt_txt.indexOf("09:00:00") > -1) {
                    console.log(response3.list[index])
                    p.append("Temperature: " + response3.list[index].main.temp)
                    p.append("Humidity: " + response3.list[index].main.humidity)
                    p.append(moment(response3.list[index].dt).format("MM/DD/YYYY"))
                    col.append(p)
                    row.html(col)
                    $("#five-day").append(row)
                    
                    
                    }
                }
            });
            $("#clear").click(function () {
                localStorage.clear();
            });

            

        });

     });

    });

















});

/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

// var queryCity = "api.openweathermap.org/data/2.5/weather?q={city name}";
// var queryCity = "api.openweathermap.org/data/2.5/weather?q=" + var for user + "?api-Key=" + apikey;
// var queryForecast = "pro.openweathermap.org/data/2.5/forecast/hourly?q={city name},{country code}";
// var queryUV = "http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}";


// var apiKey = "b6907d289e10d714a6e88b30761fae22";

// var cityName = "Austin";

// $(document).ready(function (){

//     function getWeather (cityName){
//         var apiKey = "aed52c01e7f5375831def9553ce0837d";
    
//         // var cityName = "api.openweathermap.org/data/2.5/weather?q={city name}";
        
//         var queryCity = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
//         // console.log(queryCity);
//         $.ajax({
//             url: queryCity,
//             method: "GET"
//         }). then (function(results){
           
//             console.log(results)
//             var getTemp = results.main.temp;
//             var getHumidity = results.main.humidity;
//             var getWindspeed = results.wind.speed;
//             // var currentDate = moment(results.dt, "X").format("MM/DD/YYYY");
//             // var row = $("<div class='row>");
//             // var col = $("<div class='col-sm-12'>");
//             // var img = $("<img>");
//             // img.attr("src", "http://openweathermap.org/img/w" + results.weather[0].icon + ".png");

        
//             $(".temperature").append(getTemp);
//             $(".humidity").append(getHumidity);
//             $(".windspeed").append(getWindspeed);
    
//             var lon = results.coord.lon;
//             var lat = results.coord.lat;
//             var queryUV = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
//             $.ajax({
//                 url: queryUV,
//                 method: "GET"
//             }).then (function (uvResults){
//                 console.log(uvResults)
//                 var getUV = uvResults.value
//                 $(".cardTemp").append(getUV)
    
//             }).catch (err => console.log(err))
//         });
//         // var getTemp = results.main.temp;
//         // var getHumidity = results.main.humidity;
//         // var getWindspeed = results.wind.speed;
//         // var getUV = uvResults;
    
//         // $(cardTemp).append(getTemp);
//         // $(cardTemp).append(getHumidity);
//         // $(cardTemp).append(getWindspeed);
//         // $(cardTemp).append(getUV)
//     }
    
//     $(".citySearch").on('click', function(){
//         var whichCity = $(".enterCity").val();
//         localStorage.setItem("specificCity", whichCity);
//         getWeather(whichCity);
    
//     });
    
    // var queryCity = "https://openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    
    // $.ajax({
    //     url: queryCity,
    //     method: "GET"
    // }). then (function(results){
    //     var lon = results.coord.lon;
    //     var lat = results.coord.lat;
    //     var queryUV = "https://samples.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
    //     $.ajax({
    //         url: queryUV,
    //         method: "GET"
    //     }).then (function (uvResults){
    //         console.log(uvResults)
    //     })
    //     console.log(results)
    // })

// });

// function getWeather (cityName){
//     var apiKey = "aed52c01e7f5375831def9553ce0837d";

//     // var cityName = "api.openweathermap.org/data/2.5/weather?q={city name}";
    
//     var queryCity = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
//     // console.log(queryCity);
//     $.ajax({
//         url: queryCity,
//         method: "GET"
//     }). then (function(results){
       
//         console.log(results)
//         var getTemp = results.main.temp;
//         var getHumidity = results.main.humidity;
//         var getWindspeed = results.wind.speed;
    
//         $(".cardTemp").append(getTemp);
//         $(".cardTemp").append(getHumidity);
//         $(".cardTemp").append(getWindspeed);

//         var lon = results.coord.lon;
//         var lat = results.coord.lat;
//         var queryUV = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
//         $.ajax({
//             url: queryUV,
//             method: "GET"
//         }).then (function (uvResults){
//             console.log(uvResults)
//             var getUV = uvResults.value
//             $(".cardTemp").append(getUV)

//         }).catch (err => console.log(err))
//     });
//     // var getTemp = results.main.temp;
//     // var getHumidity = results.main.humidity;
//     // var getWindspeed = results.wind.speed;
//     // var getUV = uvResults;

//     // $(cardTemp).append(getTemp);
//     // $(cardTemp).append(getHumidity);
//     // $(cardTemp).append(getWindspeed);
//     // $(cardTemp).append(getUV)
// }

// $(".citySearch").on('click', function(){
//     var whichCity = $(".enterCity").val();
//     localStorage.setItem("specificCity", whichCity);
//     getWeather(whichCity);

// });

// // var queryCity = "https://openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

// // $.ajax({
// //     url: queryCity,
// //     method: "GET"
// // }). then (function(results){
// //     var lon = results.coord.lon;
// //     var lat = results.coord.lat;
// //     var queryUV = "https://samples.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
// //     $.ajax({
// //         url: queryUV,
// //         method: "GET"
// //     }).then (function (uvResults){
// //         console.log(uvResults)
// //     })
// //     console.log(results)
// //





// 
// 
// 
// main JS
// 
// 
// What Next

/*

1. add delete button next to city buttons to delete from array and localStorage
2. add click function to get weather information on city buttons
3. display everything on right pannel
4. move cities buttons in navigation 

*/


// newCityButton.text(city);
let localStore = localStorage.length;
let inLocalStore = localStorage.getItem("myCityKey");
let cities = JSON.parse(inLocalStore);
console.log(cities);


const apiKey = "aed52c01e7f5375831def9553ce0837d";

// Pre install location
let cityName = [];console.log(cityName);

// function switch to triger once everything done loading
$(document).ready(function () {

    // Creating a button 
    // let createButton = function () {
    //     console.log(localStore);
        
    //     // Make sure empty out div before adding new, otherwise it append new under the old one.
    //     $('.cityNames').empty();
    //     // using for loop to get names from storage
    //     for (let i = 0; i < localStore; i++) {
    //         // Using localStorage get to get info from localStorage
    //         let data = JSON.parse(localStorage.getItem('myCityKey' + i));console.log(data);
    //         // New City Button
    //         let newCityButton = $('<button>').addClass('searchBtn btn btn-dark btn-lg btn-block').text(data).val('myCityKey'+i);
    //         // Cancle button
    //         let cancel = $('<button>').addClass('remove btn btn-light btn-sm float-right').text('x');
    //         // append cancel in newCityButton
    //         newCityButton.append(cancel);
    //         // 
    //         $('.cityNames').append(newCityButton).addClass('pr-5');
    //     }

    // }
    
    // createButton();

    let createButton = function () {

        console.log(localStore);
        $('.cityNames').empty();


    }

    createButton();

    // // Remove a button
    // $(document).on('click', '.remove', function(){
    //     let removeThis = $(this).closest('.searchBtn').val();
    //     localStorage.removeItem(removeThis);
    //     $(this).closest('.searchBtn').remove();
    // });

    // on click search button
    $(document).on('click', '#searchBtn', function () {

        let city = $("#city").val();console.log(city);

        // empty out value in input
        $("#city").val("");

        cityName.push(city);console.log(cityName);
        
        // for(let i = 0; i < cityName.length; i++){
        //     localStorage.setItem('myCityKey' + (i), JSON.stringify(cityName[i]));
        // }

        // localStore++;console.log(localStore);
        
        // createButton();

        localStorage.setItem("myCityKey", JSON.stringify(cityName));
        
        
        let weatherURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}`;

        $.ajax({
            url: weatherURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);


        });

    });

})