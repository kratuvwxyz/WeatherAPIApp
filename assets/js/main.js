// Weather Api
const apiKey = "aed52c01e7f5375831def9553ce0837d";
// https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}

let cityName = [];console.log(cityName);

let retrievedData = localStorage.getItem("myCityKey");console.log(retrievedData);

let cityName2 = JSON.parse(retrievedData);console.log(cityName2);

if (cityName2 === null){
    cityName = ["Austin", "Houston", "Dallas", "San Antonio"];
} else {
    cityName = cityName2;console.log(cityName);
}

$(document).ready(function(){
    let createNewButn = function(){
        $('.cityNames').empty();
        for(let i = 0; i < cityName.length; i++){
            let newCityButton = $('<button>').addClass('searchBtn btn btn-dark btn-lg btn-block').text(cityName[i]).val(i);
            let cancel = $('<button>').addClass('remove btn btn-light btn-sm float-right').text('x');
            newCityButton.append(cancel);
            $('.cityNames').append(newCityButton).addClass('pr-5');
        }
    }
    createNewButn();
    
    $(document).on('click', '.remove', function(){
        let value = $(this).closest('.searchBtn').val();
        cityName.splice(value, 1);
        localStorage.setItem("myCityKey", JSON.stringify(cityName));
        $(this).closest('.searchBtn').remove();
    });

    $(document).on('click', '#searchBtn', function(){
        let city = $("#city").val();
        $("#city").val("");
        cityName.push(city);console.log(cityName);
        
        localStorage.setItem("myCityKey", JSON.stringify(cityName));
        createNewButn();
    });

});