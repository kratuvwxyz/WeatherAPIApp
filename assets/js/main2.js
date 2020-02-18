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