class UI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.precip = document.getElementById('w-precip')
        this.feelsLike = document.getElementById('w-feels-like')
        this.wind = document.getElementById('w-wind')
    }

//     paint(weather) {
//         this.location.textContent = `${weather.resolvedAddress}`
//         this.desc.textContent = weather.currentConditions.conditions
//         this.string.textContent = `${weather.currentConditions.temp}°`
//         this.icon.setAttribute('src', `/img/${weather.currentConditions.icon}.png`)
//         this.humidity.textContent = `Relative Humidity: ${weather.currentConditions.humidity}%`
//         this.precip.textContent = `Precipitation: ${weather.currentConditions.precip}`
//         this.feelsLike.textContent = `Feels Like: ${weather.currentConditions.feelslike}°`
//         this.wind.textContent = `Wind Speed: ${weather.currentConditions.windspeed} mph`
//     }
}