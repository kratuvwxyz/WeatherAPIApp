const apiKey = "aed52c01e7f5375831def9553ce0837d";

newDate = () => {
  let d = new Date();
  $(".dayDate").html(`${d.toDateString()} + ${d.toLocaleTimeString()}`);
};
let si = setInterval(newDate, 1000);

dataSetup = (x) => {
  $(".cityName").text(x.name);
  $(".lat").text(x.coord.lat);
  $(".lon").text(x.coord.lon);
  $(".country").text(x.sys.country);
  $(".weatherIcon").attr(
    "src",
    `http://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`
  );
  $(".temp").html(
    Math.round((x.main.temp - 273.15) * 1.8 + 32) +
      "<sup style='font-size:.5em;'>˚F</sup>"
  );
  $(".feelsLike").html(Math.round((x.main.feels_like - 273.15) * 1.8 + 32));
  $(".lowTemp").text(Math.round((x.main.temp_min - 273.15) * 1.8 + 32));
  $(".highTemp").text(Math.round((x.main.temp_max - 273.15) * 1.8 + 32));
  $(".humid").text(x.main.humidity);
  $(".wind").text(x.wind.speed);
  $(".uv").text(x.main.humidity / 2.5);
  $(".description").text(x.weather[0].description);
  let sr = new Date(x.sys.sunrise * 1000);
  $(".sunrise").text(sr.toLocaleTimeString());
  let ss = new Date(x.sys.sunset * 1000);
  $(".sunset").text(ss.toLocaleTimeString());
};

fourDaysDataSetup = (x) => {
  $(".fff").empty();
  for (let i = 0; i < 32; i += 8) {
    let y = x.list[i];
    let yDate = y.dt * 1000;
    let date = new Date(yDate);
    let xdate = date.toDateString().substring(0, 3);
    let xydate = date.toDateString().substring(8, 10);
    let htmlData = `<div class="col-md-3 my-2 p-1">
      <div class="container-fluid p-0">
        <div class="row p-0">
          <div class="col-4 col-sm-2 col-md-12 text-center d-flex align-self-center justify-content-center">
            <div class="row p-0">
              <div class="col m-3">
                <p class="fs-4" style="line-height: auto !important"><span class="four-day">${xdate}</span><br/><strong class="four-date fs-1">${xydate}</strong></p>
              </div>
              <div class="col"><img src="http://openweathermap.org/img/wn/${
                y.weather[0].icon
              }@2x.png" class="four-image" alt="Weather Icon" width="100%" /></div>
            </div>
          </div>
          <div class="col-8 col-sm-4 col-md-12 p-1 text-center d-flex align-self-center justify-content-center">
            <div class="row p-0">
              <div class="col py-3">
                <span class="four-fs-10">${Math.round(
                  (y.main.temp - 273.15) * 1.8 + 32
                )}<sup class="fs-11">˚F</sup></span>
                <p class="fs-6">${y.weather[0].description}</p>
              </div>
            </div>
          </div>
          <div class="col-6 d-none d-sm-block col-md-12 text-center under-375" style="letter-spacing: 0">
            <div class="row">
              <div class="col py-3">
                <sup><i class="fas text-secondary fa-temperature-low fs-12"></i></sup>&#160;<span class="fs-11">${Math.round(
                  (y.main.temp_min - 273.15) * 1.8 + 32
                )}</span><sup class="text-primary x fs-12">˚F</sup>&#160;&#160;&#160;<sup><i class="fas text-secondary fa-temperature-high fs-12"></i></sup>&#160;<span class="fs-11">${Math.round(
      (y.main.temp_max - 273.15) * 1.8 + 32
    )}</span><sup class="text-primary x fs-12">˚F</sup>
              </div>
            </div>
            <div class="row">
              <div class="col py-3">
                <sup><i class="far text-secondary fa-sun fs-12"></i></sup>&#160;<span class="fs-11">${
                  y.main.temp_kf
                }</span><sup class="text-primary x fs-12">UV</sup>&#160;&#160;&#160;<sup><i class="fas text-secondary fa-tint fs-12"></i></sup>&#160;<span class="fs-11">${
      y.main.humidity
    }</span><sup class="text-primary x fs-12">%</sup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    $(".fff").append(htmlData);
  }
};

newForcast = (x) => {
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${x}`,
    method: "GET",
  }).then((response) => {
    fourDaysDataSetup(response);
  });
};

newWeather = (x) => {
  $("#recipient-name").val("");
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${x}`,
    method: "GET",
  }).then((response) => {
    dataSetup(response);
  });
};

findWeatherInfo = () => {
  let x = $("#recipient-name").val();
  newWeather(x);
  newForcast(x);
};

$(document).ready(() => {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  navigator.geolocation.watchPosition(
    function (position) {
      $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
        method: "GET",
      }).then((response) => {
        fourDaysDataSetup(response);
      });
      $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
        method: "GET",
      }).then((response) => {
        dataSetup(response);
      });
    },
    function (error) {
      if (error.code == error.PERMISSION_DENIED || error.code == error.POSITION_UNAVAILABLE || error.code == error.TIMEOUT || error.code == error.UNKNOWN_ERROR) {
        newWeather("Austin");
        newForcast("Austin");
      }
    }
  );
});
