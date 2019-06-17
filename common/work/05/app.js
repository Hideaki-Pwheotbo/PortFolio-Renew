let vm = new Vue({
    el: '#app',
    data: {
        date: '',
        city: null, //都市名
        temp: null, //気温
        condition: '',
        max_temp: null,
        min_temp: null,
        hour1date: '',
        hour1weather: '',
        hour1max_temp: '',
        hour1min_temp: '',
        hour2date: '',
        hour2weather: '',
        hour2max_temp: '',
        hour2min_temp: '',
        hour3date: '',
        hour3weather: '',
        hour3max_temp: '',
        hour3min_temp: '',
        hour4date: '',
        hour4weather: '',
        hour4max_temp: '',
        hour4min_temp: '',
        hour5date: '',
        hour5weather: '',
        hour5max_temp: '',
        hour5min_temp: '',
        hour6date: '',
        hour6weather: '',
        hour6max_temp: '',
        hour6min_temp: '',
        hour7date: '',
        hour7weather: '',
        hour7max_temp: '',
        hour7min_temp: '',
        hour8date: '',
        hour8weather: '',
        hour8max_temp: '',
        hour8min_temp: ''
    },
    mounted: function () {
        axios.get('https://api.openweathermap.org/data/2.5/weather?id=1856215&units=metric&appid=a0cc89f334501cd0e33d15f24c5eb356')
            .then(function (response) {
                let today = new Date()
                let year = today.getFullYear()
                let month = today.getMonth() + 1
                let day = today.getDate()
                today = year + '年' + month + '月' + day + '日'
                this.date = today
                this.city = response.data.name
                this.temp = response.data.main.temp
                let weather = response.data.weather[0].description;
                switch (weather) {
                    case 'clear sky':
                        weather = '快晴';
                        break;
                    case 'few clouds':
                        weather = '晴れ';
                        break;
                    case 'scattered clouds':
                        weather = 'くもり';
                        break;
                    case 'broken clouds':
                        weather = 'くもり';
                        break;
                    case 'overcast clouds':
                        weather = 'くもり';
                        break;
                    case 'shower rain':
                        weather = '小雨';
                        break;
                    case 'rain':
                        weather = '雨';
                        break;
                    case 'light rain':
                        weather = '雨';
                        break;
                    case 'moderate rain':
                        weather = '雨';
                        break;
                    case 'heavy intensity rain':
                        weather = '雨';
                        break;
                    case 'very heavy rain':
                        weather = '雨';
                        break;
                    case 'extreme rain':
                        weather = '雨';
                        break;
                    case 'freezing rain':
                        weather = '雨';
                        break;
                    case 'light intensity shower rain':
                        weather = '雨';
                        break;
                    case 'heavy intensity shower rain':
                        weather = '雨';
                        break;
                    case 'ragged shower rain':
                        weather = '雨';
                        break;
                    case 'light intensity drizzle':
                        weather = '雨';
                        break;
                    case 'drizzle':
                        weather = '雨';
                        break;
                    case 'heavy intensity drizzle':
                        weather = '雨';
                        break;
                    case 'light intensity drizzle rain':
                        weather = '雨';
                        break;
                    case 'drizzle rain':
                        weather = '雨';
                        break;
                    case 'heavy intensity drizzle rain':
                        weather = '雨';
                        break;
                    case 'shower rain and drizzle':
                        weather = '雨';
                        break;
                    case 'heavy shower rain and drizzle':
                        weather = '雨';
                        break;
                    case 'shower drizzle':
                        weather = '雨';
                        break;
                    case 'thunderstorm':
                        weather = '雷';
                        break;
                    case 'thunderstorm with light rain':
                        weather = '雷';
                        break;
                    case 'thunderstorm with rain':
                        weather = '雷';
                        break;
                    case 'thunderstorm with heavy rain':
                        weather = '雷';
                        break;
                    case 'light thunderstorm':
                        weather = '雷';
                        break;
                    case 'heavy thunderstorm':
                        weather = '雷';
                        break;
                    case 'ragged thunderstorm':
                        weather = '雷';
                        break;
                    case 'thunderstorm with light drizzle':
                        weather = '雷';
                        break;
                    case 'thunderstorm with drizzle':
                        weather = '雷';
                        break;
                    case 'thunderstorm with heavy drizzle':
                        weather = '雷';
                        break;
                    case 'snow':
                        weather = '雪';
                        break;
                    case 'light snow':
                        weather = '雪';
                        break;
                    case 'heavy snow':
                        weather = '雪';
                        break;
                    case 'sleet':
                        weather = '雪';
                        break;
                    case 'light shower sleet':
                        weather = '雪';
                        break;
                    case 'shower sleet':
                        weather = '雪';
                        break;
                    case 'light rain and snow':
                        weather = '雪';
                        break;
                    case 'rain and snow':
                        weather = '雪';
                        break;
                    case 'light shower snow':
                        weather = '雪';
                        break;
                    case 'shower snow':
                        weather = '雪';
                        break;
                    case 'heavy shower snow':
                        weather = '雪';
                        break;
                    default:
                        weather = "キリ";
                };

                this.condition = weather
                this.max_temp = response.data.main.temp_max
                this.min_temp = response.data.main.temp_min
            }.bind(this))
            .catch(function (error) {
                console.log(error)
            })
        axios.get('https://api.openweathermap.org/data/2.5/forecast/?id=1856215&cnt=11&units=metric&appid=a0cc89f334501cd0e33d15f24c5eb356')
            .then(function (response) {
                let hourList = [];
                for (let i = 3; i <= 10; i++) {
                    let list = {};

                    list.date = response.data.list[i].dt_txt;
                    let time = '';
                    if (list.date[11] === '0') {
                        time = list.date.substr(12, 1);
                    } else {
                        time = list.date.substr(11, 2);
                    };
                    list.date = list.date.substr(6, 1) + "月" + list.date.substr(8, 2) + "日" + " " + time + "時";

                    list.weather = response.data.list[i].weather[0].description;
                    switch (list.weather) {
                        case 'clear sky':
                            list.weather = '快晴';
                            break;
                        case 'few clouds':
                            list.weather = '晴れ';
                            break;
                        case 'scattered clouds':
                            list.weather = 'くもり';
                            break;
                        case 'broken clouds':
                            list.weather = 'くもり';
                            break;
                        case 'overcast clouds':
                            list.weather = 'くもり';
                            break;
                        case 'shower rain':
                            list.weather = '小雨';
                            break;
                        case 'rain':
                            list.weather = '雨';
                            break;
                        case 'light rain':
                            list.weather = '雨';
                            break;
                        case 'moderate rain':
                            list.weather = '雨';
                            break;
                        case 'heavy intensity rain':
                            list.weather = '雨';
                            break;
                        case 'very heavy rain':
                            list.weather = '雨';
                            break;
                        case 'extreme rain':
                            list.weather = '雨';
                            break;
                        case 'freezing rain':
                            list.weather = '雨';
                            break;
                        case 'light intensity shower rain':
                            list.weather = '雨';
                            break;
                        case 'heavy intensity shower rain':
                            list.weather = '雨';
                            break;
                        case 'ragged shower rain':
                            list.weather = '雨';
                            break;
                        case 'light intensity drizzle':
                            list.weather = '雨';
                            break;
                        case 'drizzle':
                            list.weather = '雨';
                            break;
                        case 'heavy intensity drizzle':
                            list.weather = '雨';
                            break;
                        case 'light intensity drizzle rain':
                            list.weather = '雨';
                            break;
                        case 'drizzle rain':
                            list.weather = '雨';
                            break;
                        case 'heavy intensity drizzle rain':
                            list.weather = '雨';
                            break;
                        case 'shower rain and drizzle':
                            list.weather = '雨';
                            break;
                        case 'heavy shower rain and drizzle':
                            list.weather = '雨';
                            break;
                        case 'shower drizzle':
                            list.weather = '雨';
                            break;
                        case 'thunderstorm':
                            list.weather = '雷';
                            break;
                        case 'thunderstorm with light rain':
                            list.weather = '雷';
                            break;
                        case 'thunderstorm with rain':
                            list.weather = '雷';
                            break;
                        case 'thunderstorm with heavy rain':
                            list.weather = '雷';
                            break;
                        case 'light thunderstorm':
                            list.weather = '雷';
                            break;
                        case 'heavy thunderstorm':
                            list.weather = '雷';
                            break;
                        case 'ragged thunderstorm':
                            list.weather = '雷';
                            break;
                        case 'thunderstorm with light drizzle':
                            list.weather = '雷';
                            break;
                        case 'thunderstorm with drizzle':
                            list.weather = '雷';
                            break;
                        case 'thunderstorm with heavy drizzle':
                            list.weather = '雷';
                            break;
                        case 'snow':
                            list.weather = '雪';
                            break;
                        case 'light snow':
                            list.weather = '雪';
                            break;
                        case 'heavy snow':
                            list.weather = '雪';
                            break;
                        case 'sleet':
                            list.weather = '雪';
                            break;
                        case 'light shower sleet':
                            list.weather = '雪';
                            break;
                        case 'shower sleet':
                            list.weather = '雪';
                            break;
                        case 'light rain and snow':
                            list.weather = '雪';
                            break;
                        case 'rain and snow':
                            list.weather = '雪';
                            break;
                        case 'light shower snow':
                            list.weather = '雪';
                            break;
                        case 'shower snow':
                            list.weather = '雪';
                            break;
                        case 'heavy shower snow':
                            list.weather = '雪';
                            break;
                        default:
                            list.weather = "キリ";
                    };
                    list.max_temp = Math.round(response.data.list[i].main.temp_max * 10) / 10;
                    list.min_temp = Math.round(response.data.list[i].main.temp_min * 10) / 10;
                    hourList.push(list);
                }
                this.hour1date = hourList[0].date;
                this.hour1weather = hourList[0].weather;
                this.hour1max_temp = hourList[0].max_temp;
                this.hour1min_temp = hourList[0].min_temp;
                this.hour2date = hourList[1].date;
                this.hour2weather = hourList[1].weather;
                this.hour2max_temp = hourList[1].max_temp;
                this.hour2min_temp = hourList[1].min_temp;
                this.hour3date = hourList[2].date;
                this.hour3weather = hourList[2].weather;
                this.hour3max_temp = hourList[2].max_temp;
                this.hour3min_temp = hourList[2].min_temp;
                this.hour4date = hourList[3].date;
                this.hour4weather = hourList[3].weather;
                this.hour4max_temp = hourList[3].max_temp;
                this.hour4min_temp = hourList[3].min_temp;
                this.hour5date = hourList[4].date;
                this.hour5weather = hourList[4].weather;
                this.hour5max_temp = hourList[4].max_temp;
                this.hour5min_temp = hourList[4].min_temp;
                this.hour6date = hourList[5].date;
                this.hour6weather = hourList[5].weather;
                this.hour6max_temp = hourList[5].max_temp;
                this.hour6min_temp = hourList[5].min_temp;
                this.hour7date = hourList[6].date;
                this.hour7weather = hourList[6].weather;
                this.hour7max_temp = hourList[6].max_temp;
                this.hour7min_temp = hourList[6].min_temp;
                this.hour8date = hourList[7].date;
                this.hour8weather = hourList[7].weather;
                this.hour8max_temp = hourList[7].max_temp;
                this.hour8min_temp = hourList[7].min_temp;
            }.bind(this))
            .catch(function (error) {
                console.log(error)
            })
    },

})
