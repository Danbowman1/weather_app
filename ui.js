class UI {
    constructor() {
        this.currentForecast = document.getElementById('current-container')
        this.extendedForecast = document.getElementById('extended-container')
        this.hourlyForecast = document.getElementById('hourly-container')

    }

    current(weather) {
        let html = ''

        html += `<h1 id="w-location" class="text-muted">${weather.resolvedAddress}</h1>
                    <h3 class="text-dark" id="w-desc">${weather.currentConditions.conditions}</h3>
                    <h3 id="w-string" class="text-muted">${weather.currentConditions.temp}°</h3>
                    <img id="w-icon" class="icon" src="/img/${weather.currentConditions.icon}.png" >
                    <ul class="list-group mt-3" id="w-details">
                        <li class="list-group-item" id="w-humidity">Relative Humidity: ${weather.currentConditions.humidity}%</li>
                        <li class="list-group-item" id="w-precip">Precipitation: ${weather.currentConditions.precip}</li>
                        <li class="list-group-item" id="w-feels-like">Feels Like: ${weather.currentConditions.feelslike}°</li>
                        <li class="list-group-item" id="w-wind">Wind Speed: ${weather.currentConditions.windspeed} mph</li>
                    </ul>
        `
        this.currentForecast.innerHTML = html

    }

    extended(weather) {
        let html = ''

        weather.days.slice(0 , 7)
        .map(function(day){
            html += `<div class="card p-2">
                        <div class='row'>
                            <div class="col-md-4 align-self-center">
                                <p class="mb-0">${day.datetime}</p>
                                <img src='/img/${day.icon}.png' style="width: 40px;"></img>
                            </div>
                            <div class="col-md-4 mx-auto align-self-center">
                                <p class="mb-1 ">High: ${day.tempmax}°</p>
                                <p class="mb-1">low: ${day.tempmin}°</p>
                            </div>
                            <div class="col-md-4 align-self-center">
                                <p class="align-middle mb-0">${day.conditions}</p>
                            </div>
                        </div>    
                    </div>`
        })
        this.extendedForecast.innerHTML = html
    }

    hourly(weather) {
        let today = new Date()
        let time = today.getHours()
        
        let html = ''

        weather.days[0].hours.slice(time, 24)
        .map(function(hour){
            html += `<div class="card p-2">
                        <div class='row'>
                            <div class="col-md-4 align-self-center">
                                <p class="mb-0">${hour.datetime}</p>
                                <img src='/img/${hour.icon}.png' style="width: 40px;"></img>
                            </div>
                            <div class="col-md-4 mx-auto align-self-center">
                                <p class="mb-1 ">Temp: ${hour.temp}°</p>
                            </div>
                            <div class="col-md-4 align-self-center">
                                <p class="align-middle mb-0">${hour.conditions}</p>
                            </div>
                        </div>    
                    </div>`
        })
        this.hourlyForecast.innerHTML = html
    }
}