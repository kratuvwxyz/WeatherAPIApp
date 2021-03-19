newDate = () => {
  let d = new Date();
  $(".dayDate").html(`${d.toDateString()} + ${d.toLocaleTimeString()}`);
};

let si = setInterval(newDate, 1000);

// temp data
let weatherCityData = {
  coord: {
    lon: -97.7431,
    lat: 30.2672,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 294.28,
    feels_like: 290.88,
    temp_min: 293.15,
    temp_max: 294.82,
    pressure: 1016,
    humidity: 30,
  },
  visibility: 10000,
  wind: {
    speed: 2.68,
    deg: 293,
    gust: 6.26,
  },
  clouds: {
    all: 0,
  },
  dt: 1616106503,
  sys: {
    type: 3,
    id: 2010253,
    country: "US",
    sunrise: 1616071012,
    sunset: 1616114460,
  },
  timezone: -18000,
  id: 4671654,
  name: "Austin",
  cod: 200,
};
let weatherFiveDaysData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1616112000,
      main: {
        temp: 292.91,
        feels_like: 286.73,
        temp_min: 290.88,
        temp_max: 292.91,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1004,
        humidity: 24,
        temp_kf: 2.03,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 5.71,
        deg: 357,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-19 00:00:00",
    },
    {
      dt: 1616122800,
      main: {
        temp: 289.23,
        feels_like: 284.04,
        temp_min: 287.68,
        temp_max: 289.23,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1007,
        humidity: 37,
        temp_kf: 1.55,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.88,
        deg: 13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-19 03:00:00",
    },
    {
      dt: 1616133600,
      main: {
        temp: 286.11,
        feels_like: 281,
        temp_min: 285.51,
        temp_max: 286.11,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1008,
        humidity: 44,
        temp_kf: 0.6,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.68,
        deg: 9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-19 06:00:00",
    },
    {
      dt: 1616144400,
      main: {
        temp: 284.17,
        feels_like: 279.75,
        temp_min: 284.08,
        temp_max: 284.17,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1009,
        humidity: 52,
        temp_kf: 0.09,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.81,
        deg: 10,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-19 09:00:00",
    },
    {
      dt: 1616155200,
      main: {
        temp: 282.82,
        feels_like: 278.43,
        temp_min: 282.82,
        temp_max: 282.82,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1009,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.78,
        deg: 2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-19 12:00:00",
    },
    {
      dt: 1616166000,
      main: {
        temp: 285.35,
        feels_like: 280.35,
        temp_min: 285.35,
        temp_max: 285.35,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1011,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.7,
        deg: 8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-19 15:00:00",
    },
    {
      dt: 1616176800,
      main: {
        temp: 289.4,
        feels_like: 284.43,
        temp_min: 289.4,
        temp_max: 289.4,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1010,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.86,
        deg: 9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-19 18:00:00",
    },
    {
      dt: 1616187600,
      main: {
        temp: 291.86,
        feels_like: 286.89,
        temp_min: 291.86,
        temp_max: 291.86,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1007,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 4.94,
        deg: 14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-19 21:00:00",
    },
    {
      dt: 1616198400,
      main: {
        temp: 290.3,
        feels_like: 286.17,
        temp_min: 290.3,
        temp_max: 290.3,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1006,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 4.14,
        deg: 24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-20 00:00:00",
    },
    {
      dt: 1616209200,
      main: {
        temp: 287.33,
        feels_like: 283.67,
        temp_min: 287.33,
        temp_max: 287.33,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1008,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.63,
        deg: 37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-20 03:00:00",
    },
    {
      dt: 1616220000,
      main: {
        temp: 285.14,
        feels_like: 282.29,
        temp_min: 285.14,
        temp_max: 285.14,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1009,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.71,
        deg: 55,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-20 06:00:00",
    },
    {
      dt: 1616230800,
      main: {
        temp: 283.65,
        feels_like: 281.64,
        temp_min: 283.65,
        temp_max: 283.65,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1008,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.58,
        deg: 54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-20 09:00:00",
    },
    {
      dt: 1616241600,
      main: {
        temp: 283.07,
        feels_like: 281.39,
        temp_min: 283.07,
        temp_max: 283.07,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1009,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1,
        deg: 50,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-20 12:00:00",
    },
    {
      dt: 1616252400,
      main: {
        temp: 286.47,
        feels_like: 284.51,
        temp_min: 286.47,
        temp_max: 286.47,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1010,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.4,
        deg: 74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-20 15:00:00",
    },
    {
      dt: 1616263200,
      main: {
        temp: 291.55,
        feels_like: 289.21,
        temp_min: 291.55,
        temp_max: 291.55,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1009,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.71,
        deg: 76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-20 18:00:00",
    },
    {
      dt: 1616274000,
      main: {
        temp: 294.41,
        feels_like: 291.06,
        temp_min: 294.41,
        temp_max: 294.41,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1006,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.75,
        deg: 98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-20 21:00:00",
    },
    {
      dt: 1616284800,
      main: {
        temp: 291.55,
        feels_like: 287.69,
        temp_min: 291.55,
        temp_max: 291.55,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1004,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.18,
        deg: 117,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-21 00:00:00",
    },
    {
      dt: 1616295600,
      main: {
        temp: 287.46,
        feels_like: 284.13,
        temp_min: 287.46,
        temp_max: 287.46,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1006,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.57,
        deg: 122,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-21 03:00:00",
    },
    {
      dt: 1616306400,
      main: {
        temp: 285.3,
        feels_like: 282.17,
        temp_min: 285.3,
        temp_max: 285.3,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1005,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.16,
        deg: 149,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-21 06:00:00",
    },
    {
      dt: 1616317200,
      main: {
        temp: 283.1,
        feels_like: 280.37,
        temp_min: 283.1,
        temp_max: 283.1,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1004,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.02,
        deg: 181,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-21 09:00:00",
    },
    {
      dt: 1616328000,
      main: {
        temp: 282.39,
        feels_like: 280.21,
        temp_min: 282.39,
        temp_max: 282.39,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1004,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 2.18,
        deg: 175,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-21 12:00:00",
    },
    {
      dt: 1616338800,
      main: {
        temp: 286.6,
        feels_like: 283.11,
        temp_min: 286.6,
        temp_max: 286.6,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1005,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 4.42,
        deg: 159,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-21 15:00:00",
    },
    {
      dt: 1616349600,
      main: {
        temp: 292.18,
        feels_like: 288.23,
        temp_min: 292.18,
        temp_max: 292.18,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1004,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 5.21,
        deg: 162,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-21 18:00:00",
    },
    {
      dt: 1616360400,
      main: {
        temp: 294.72,
        feels_like: 290.68,
        temp_min: 294.72,
        temp_max: 294.72,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1000,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 5.39,
        deg: 154,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-21 21:00:00",
    },
    {
      dt: 1616371200,
      main: {
        temp: 292.24,
        feels_like: 288.73,
        temp_min: 292.24,
        temp_max: 292.24,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 999,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.33,
        deg: 152,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-22 00:00:00",
    },
    {
      dt: 1616382000,
      main: {
        temp: 288.53,
        feels_like: 284.55,
        temp_min: 288.53,
        temp_max: 288.53,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1000,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 47,
      },
      wind: {
        speed: 6.14,
        deg: 156,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-22 03:00:00",
    },
    {
      dt: 1616392800,
      main: {
        temp: 286.17,
        feels_like: 282.62,
        temp_min: 286.17,
        temp_max: 286.17,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 999,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 47,
      },
      wind: {
        speed: 5.22,
        deg: 164,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-22 06:00:00",
    },
    {
      dt: 1616403600,
      main: {
        temp: 285.94,
        feels_like: 283.28,
        temp_min: 285.94,
        temp_max: 285.94,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 996,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 4.27,
        deg: 166,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-22 09:00:00",
    },
    {
      dt: 1616414400,
      main: {
        temp: 287.02,
        feels_like: 284.24,
        temp_min: 287.02,
        temp_max: 287.02,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 995,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 66,
      },
      wind: {
        speed: 4.74,
        deg: 176,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-22 12:00:00",
    },
    {
      dt: 1616425200,
      main: {
        temp: 288.59,
        feels_like: 286.12,
        temp_min: 288.59,
        temp_max: 288.59,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 995,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.42,
        deg: 171,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-22 15:00:00",
    },
    {
      dt: 1616436000,
      main: {
        temp: 290.56,
        feels_like: 288.41,
        temp_min: 290.56,
        temp_max: 290.56,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 994,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.56,
        deg: 158,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-22 18:00:00",
    },
    {
      dt: 1616446800,
      main: {
        temp: 290.45,
        feels_like: 288.76,
        temp_min: 290.45,
        temp_max: 290.45,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 991,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.5,
        deg: 157,
      },
      visibility: 10000,
      pop: 0.39,
      rain: {
        "3h": 0.36,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-22 21:00:00",
    },
    {
      dt: 1616457600,
      main: {
        temp: 290.02,
        feels_like: 290.13,
        temp_min: 290.02,
        temp_max: 290.02,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 990,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.54,
        deg: 163,
      },
      visibility: 7601,
      pop: 0.96,
      rain: {
        "3h": 1.08,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-23 00:00:00",
    },
    {
      dt: 1616468400,
      main: {
        temp: 289.82,
        feels_like: 289.86,
        temp_min: 289.82,
        temp_max: 289.82,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 990,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2,
        deg: 291,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 12.48,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-23 03:00:00",
    },
    {
      dt: 1616479200,
      main: {
        temp: 288.74,
        feels_like: 288.23,
        temp_min: 288.74,
        temp_max: 288.74,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 990,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.18,
        deg: 184,
      },
      visibility: 10000,
      pop: 0.8,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-23 06:00:00",
    },
    {
      dt: 1616490000,
      main: {
        temp: 287.23,
        feels_like: 285.84,
        temp_min: 287.23,
        temp_max: 287.23,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 989,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 2.85,
        deg: 215,
      },
      visibility: 10000,
      pop: 0.16,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-23 09:00:00",
    },
    {
      dt: 1616500800,
      main: {
        temp: 286.88,
        feels_like: 285.44,
        temp_min: 286.88,
        temp_max: 286.88,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 990,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 2.77,
        deg: 299,
      },
      visibility: 10000,
      pop: 0.08,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-03-23 12:00:00",
    },
    {
      dt: 1616511600,
      main: {
        temp: 289.81,
        feels_like: 286.63,
        temp_min: 289.81,
        temp_max: 289.81,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 991,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.82,
        deg: 318,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-23 15:00:00",
    },
    {
      dt: 1616522400,
      main: {
        temp: 295.83,
        feels_like: 293.4,
        temp_min: 295.83,
        temp_max: 295.83,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 991,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.03,
        deg: 3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-23 18:00:00",
    },
    {
      dt: 1616533200,
      main: {
        temp: 298.81,
        feels_like: 295.41,
        temp_min: 298.81,
        temp_max: 298.81,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 988,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.01,
        deg: 268,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-03-23 21:00:00",
    },
  ],
  city: {
    id: 4671654,
    name: "Austin",
    coord: {
      lat: 30.2672,
      lon: -97.7431,
    },
    country: "US",
    population: 790390,
    timezone: -18000,
    sunrise: 1616071012,
    sunset: 1616114460,
  },
};
// !end of temp data

dataSetup = (x) => {
  console.log(x);
  $(".cityName").text(x.name);
  $(".lat").text(x.coord.lat);
  $(".lon").text(x.coord.lon);
  $(".country").text(x.sys.country);
  $(".weatherIcon").attr("src", `http://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`);
  $(".temp").html(Math.round((x.main.temp - 273.15) * 1.8 + 32) + "<sup style='font-size:.5em;'>˚F</sup>");
  $(".lowTemp").text(Math.round((x.main.temp_min - 273.15) * 1.8 + 32));
  $(".highTemp").text(Math.round((x.main.temp_max - 273.15) * 1.8 + 32));
  $(".humid").text(x.main.humidity);
  $(".wind").text(x.wind.speed);
  $(".uv").text(x.main.humidity / 2.5);
  let sr = new Date(x.sys.sunrise * 1000);
  $(".sunrise").text(sr.toLocaleTimeString());
  let ss = new Date(x.sys.sunset * 1000);
  $(".sunset").text(ss.toLocaleTimeString());
  console.log(sr, ss);
};

dataSetup(weatherCityData);
