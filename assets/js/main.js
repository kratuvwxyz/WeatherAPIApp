// time
$('.time').text(moment().format('dddd, MMMM Do YYYY'));

// hr line
const hr = $('<hr>');

// Weather Api
const apiKey = "aed52c01e7f5375831def9553ce0837d";
let weatherURL;
// https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}

let cityName = [];
console.log(cityName);

let retrievedData = localStorage.getItem("myCityKey");
console.log(retrievedData);

let cityName2 = JSON.parse(retrievedData);
console.log(cityName2);

if (cityName2 === null) {
    cityName = ["Austin", "Houston", "Dallas", "San Antonio"];
} else {
    cityName = cityName2;
    console.log(cityName);
}

$(document).ready(function () {

    // create new button
    let createNewButn = function () {
        $('.cityNames').empty();
        for (let i = 0; i < cityName.length; i++) {
            let newCityButton = $('<button>').addClass('searchBtn btn btn-dark btn-lg btn-block').text(cityName[i]).val(i);
            let cancel = $('<button>').addClass('remove btn btn-dark btn-sm float-right').text('X');
            newCityButton.append(cancel);
            $('.cityNames').append(newCityButton).addClass('pr-5');
        }
    }
    createNewButn();

    // remove button
    $(document).on('click', '.remove', function () {
        let value = $(this).closest('.searchBtn').val();
        cityName.splice(value, 1);
        localStorage.setItem("myCityKey", JSON.stringify(cityName));
        $(this).closest('.searchBtn').remove();
    });

    // find a weather
    let newWeather = function () {
        $.ajax({
            url: weatherURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#dashboard").empty();
            $("#five-day").empty();
            let res = response;

            let row = $("<div class='row'>");
            let col = $("<div class='col-sm-12'>");


            let currentDate = moment(res.dt, "X").format("MM/DD/YYYY");
            let img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + res.weather[0].icon + ".png");
            let h3 = $("<h3>").append(res.name, " <span style='font-size:12px;'>(" + currentDate + ")</span> ", img)


            let tempratureDiv = $('<div>').text('Temprature').addClass("h5 text-dark");

            let currentTemp = Math.round(((res.main.temp - 273.15) * 1.8) + 32);
            let feelsLikeTemp = Math.round(((res.main.feels_like - 273.15) * 1.8) + 32);
            let minTemp = Math.round(((res.main.temp_min - 273.15) * 1.8) + 32);
            let maxTemp = Math.round(((res.main.temp_max - 273.15) * 1.8) + 32);
            let humidTemp = Math.round(((res.main.humidity - 273.15) * 1.8) + 32);
            let windSpeed = res.wind.speed;

            let p = $("<p>").addClass("h6");
            p.append("Temperature: " + currentTemp + "˚ F &#160;&#160;|&#160;&#160;");
            p.append("Feels Like: " + feelsLikeTemp + "˚ F <br><br>");
            p.append("Min Temp: " + minTemp + "˚ F &#160;&#160;|&#160;&#160;");
            p.append("Max Temp: " + maxTemp + "˚ F <br><br>");
            p.append("Humidity: " + humidTemp + " &#160;&#160;|&#160;&#160;");
            p.append("Wind Speed: " + windSpeed + " MPH");
            tempratureDiv.append("<br><hr>", p);
            col.append(h3, tempratureDiv);
            row.append(col);
            $("#dashboard").append(row);

            /*
                sys:
                type: 1
                id: 4404
                country: "US"
                sunrise: 1582030733
                sunset: 1582071133
                timezone: -21600
                let lat = res.coord.lat;
                let lon = res.coord.lon;
            */

            $.ajax({
                url: forcastURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                for (let i = 0; i < 40; i++) {
                    res = response.list[i];

                    let row = $("<div class='row'>");
                    let col = $("<div class='col-sm-12'>");

                    let currentDate = moment(res.dt, "X").format("MM/DD/YYYY");
                    let img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + res.weather[0].icon + ".png");
                    let h3 = $("<h3>").append(res.name, " <span style='font-size:12px;'>(" + currentDate + ")</span> ", img)


                    let tempratureDiv = $('<div>').text('Temprature').addClass("h5 text-dark");

                    let currentTemp = Math.round(((res.main.temp - 273.15) * 1.8) + 32);
                    let feelsLikeTemp = Math.round(((res.main.feels_like - 273.15) * 1.8) + 32);
                    let minTemp = Math.round(((res.main.temp_min - 273.15) * 1.8) + 32);
                    let maxTemp = Math.round(((res.main.temp_max - 273.15) * 1.8) + 32);
                    let humidTemp = Math.round(((res.main.humidity - 273.15) * 1.8) + 32);
                    let windSpeed = res.wind.speed;

                    let p = $("<p>").addClass("h6");
                    p.append("Temperature: " + currentTemp + "˚ F &#160;&#160;|&#160;&#160;");
                    p.append("Feels Like: " + feelsLikeTemp + "˚ F <br><br>");
                    p.append("Min Temp: " + minTemp + "˚ F &#160;&#160;|&#160;&#160;");
                    p.append("Max Temp: " + maxTemp + "˚ F <br><br>");
                    p.append("Humidity: " + humidTemp + " &#160;&#160;|&#160;&#160;");
                    p.append("Wind Speed: " + windSpeed + " MPH");
                    tempratureDiv.append("<br><hr>", p);
                    col.append(h3, tempratureDiv);
                    row.append(col);
                    $("#five-day").append(row);
                }



            });

        });
    }

    // click search button to create new button
    $(document).on('click', '#searchBtn', function () {
        let city = $("#city").val();
        $("#city").val("");
        cityName.push(city);
        console.log(cityName);
        localStorage.setItem("myCityKey", JSON.stringify(cityName));
        createNewButn();
        weatherURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}`;
        forcastURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${city}`;
        newWeather();
    });

    // click on current cities weather
    $(document).on('click', '.searchBtn', function () {
        let value = $(this).closest('.searchBtn').val();
        city = cityName[value];
        weatherURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}`;
        forcastURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${city}`;
        newWeather();
    });

});