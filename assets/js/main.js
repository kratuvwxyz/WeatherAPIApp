// Weather Api
const apiKey = "aed52c01e7f5375831def9553ce0837d";
// https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}

let cityName = [];

let retrievedData = localStorage.getItem("myCityKey");console.log(retrievedData);

let cityName2 = JSON.parse(retrievedData);console.log(cityName2);


$(document).ready(function(){
    let createNewButn = function(){
        for(let i = 0; i < cityName2.length; i++){
            let newCityButton = $('<button>').addClass('searchBtn btn btn-dark btn-lg btn-block').text(cityName2[i]).val(cityName2[i]);
            let cancel = $('<button>').addClass('remove btn btn-light btn-sm float-right').text('x');
            newCityButton.append(cancel);
            $('.cityNames').append(newCityButton).addClass('pr-5');
        }
    }
    createNewButn();
    
    $(document).on('click', '#searchBtn', function(){
        let city = $("#city").val();
        $("#city").val("");
        cityName.push(city);
        localStorage.setItem("myCityKey", JSON.stringify(cityName));
    });

});