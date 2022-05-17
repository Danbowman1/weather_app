class Weather {
    constructor(city) {
        this.apiKey = '49d40528912a80def7cc7627fa5b9246'
        this.city = city
        
    }

    // Fetch weather from API
    // async getWeather() {
    //     const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}&units=f`)
    //     const responseData = await response.json()
    //     return responseData
    // }

    // Change weather location
    changeLocation(city) {
        this.city = city
    }
}