const apiKey = "aed52c01e7f5375831def9553ce0837d";
newDate = () => {
  let t = new Date();
  $(".dayDate").html(`${t.toDateString()} + ${t.toLocaleTimeString()}`);
};
let si = setInterval(newDate, 1e3);
(dataSetup = (t) => {
  $(".cityName").text(t.name), $(".lat").text(t.coord.lat), $(".lon").text(t.coord.lon), $(".country").text(t.sys.country), $(".weatherIcon").attr("src", `http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`), $(".temp").html(Math.round(1.8 * (t.main.temp - 273.15) + 32) + "<sup style='font-size:.5em;'>˚F</sup>"), $(".feelsLike").html(Math.round(1.8 * (t.main.feels_like - 273.15) + 32)), $(".lowTemp").text(Math.round(1.8 * (t.main.temp_min - 273.15) + 32)), $(".highTemp").text(Math.round(1.8 * (t.main.temp_max - 273.15) + 32)), $(".humid").text(t.main.humidity), $(".wind").text(t.wind.speed), $(".uv").text(t.main.humidity / 2.5), $(".description").text(t.weather[0].description);
  let e = new Date(1e3 * t.sys.sunrise);
  $(".sunrise").text(e.toLocaleTimeString());
  let a = new Date(1e3 * t.sys.sunset);
  $(".sunset").text(a.toLocaleTimeString());
}),
  (fourDaysDataSetup = (t) => {
    $(".fff").empty();
    for (let e = 0; e < 32; e += 8) {
      let a = t.list[e],
        s = 1e3 * a.dt,
        n = new Date(s),
        i = `<div class="col-md-3 my-2 p-1">\n      <div class="container-fluid p-0">\n        <div class="row p-0">\n          <div class="col-4 col-sm-2 col-md-12 text-center d-flex align-self-center justify-content-center">\n            <div class="row p-0">\n              <div class="col m-3">\n                <p class="fs-4" style="line-height: auto !important"><span class="four-day">${n.toDateString().substring(0, 3)}</span><br/><strong class="four-date fs-1">${n.toDateString().substring(8, 10)}</strong></p>\n              </div>\n              <div class="col"><img src="http://openweathermap.org/img/wn/${a.weather[0].icon}@2x.png" class="four-image" alt="Weather Icon" width="100%" /></div>\n            </div>\n          </div>\n          <div class="col-8 col-sm-4 col-md-12 p-1 text-center d-flex align-self-center justify-content-center">\n            <div class="row p-0">\n              <div class="col py-3">\n                <span class="four-fs-10">${Math.round(1.8 * (a.main.temp - 273.15) + 32)}<sup class="fs-11">˚F</sup></span>\n                <p class="fs-6">${a.weather[0].description}</p>\n              </div>\n            </div>\n          </div>\n          <div class="col-6 d-none d-sm-block col-md-12 text-center under-375" style="letter-spacing: 0">\n            <div class="row">\n              <div class="col py-3">\n                <sup><i class="fas text-secondary fa-temperature-low fs-12"></i></sup>&#160;<span class="fs-11">${Math.round(1.8 * (a.main.temp_min - 273.15) + 32)}</span><sup class="text-primary x fs-12">˚F</sup>&#160;&#160;&#160;<sup><i class="fas text-secondary fa-temperature-high fs-12"></i></sup>&#160;<span class="fs-11">${Math.round(1.8 * (a.main.temp_max - 273.15) + 32)}</span><sup class="text-primary x fs-12">˚F</sup>\n              </div>\n            </div>\n            <div class="row">\n              <div class="col py-3">\n                <sup><i class="far text-secondary fa-sun fs-12"></i></sup>&#160;<span class="fs-11">${a.main.temp_kf}</span><sup class="text-primary x fs-12">UV</sup>&#160;&#160;&#160;<sup><i class="fas text-secondary fa-tint fs-12"></i></sup>&#160;<span class="fs-11">${a.main.humidity}</span><sup class="text-primary x fs-12">%</sup>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>`;
      $(".fff").append(i);
    }
  }),
  (newForcast = (t) => {
    $.ajax({ url: `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${t}`, method: "GET" }).then((t) => {
      fourDaysDataSetup(t);
    });
  }),
  (newWeather = (t) => {
    $("#recipient-name").val(""),
      $.ajax({ url: `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${t}`, method: "GET" }).then((t) => {
        dataSetup(t);
      });
  }),
  (findWeatherInfo = () => {
    let t = $("#recipient-name").val();
    newWeather(t), newForcast(t);
  }),
  $(document).ready(() => {
    navigator.geolocation.watchPosition(
      function (t) {
        $.ajax({ url: `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&lat=${t.coords.latitude}&lon=${t.coords.longitude}`, method: "GET" }).then((t) => {
          fourDaysDataSetup(t);
        }),
          $.ajax({ url: `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lat=${t.coords.latitude}&lon=${t.coords.longitude}`, method: "GET" }).then((t) => {
            dataSetup(t);
          });
      },
      function (t) {
        (t.code != t.PERMISSION_DENIED && t.code != t.POSITION_UNAVAILABLE && t.code != t.TIMEOUT && t.code != t.UNKNOWN_ERROR) || (newWeather("Austin"), newForcast("Austin"));
      }
    );
  });

/*  
        ╥╥  DESIGNED AND DEVELOPED BY...
        ║║ 
        ║║ ╓╓──╖╖ ╓╓──── ────╖╖ ╓╖ ╓╓──╖╖ ╓╓──╖╖ TM
        ║║ ║║  ║║ ║║         ║║ ╙╜ ║║  ║║ ║║  ║║
    ╓╓──╫╫ ╫╫──╜╜ ╙╙──╖╖ ╓╓──╫╫ ╖╖ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ╙╙──── ────╜╜ ╙╙──╜╜ ║║ ╙╙──╫╫ ╜╜  ║║
    ║║  ║║  HTTPS://DESAIGN.APP ║║     ║║     ╙╙ LLC
    ╙╙──╜╜  SINCE TWENTYELEVEN  ╙╙─ ───╜╜
            Copyright © 2021
            ALL RIGHTS RESERVED
            --
            Call: 1-860-DESAIGN
            Mail: MEET@DESAIGN.STUDIO
            Post: PO BOX 200001, AUSTIN TX 78720
            --
            Book an appointment with us at
            https://calendly.com/desaignstudio
            --
            Follow us: #desaignstudio
*/
