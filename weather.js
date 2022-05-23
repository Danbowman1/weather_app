class Weather {
    constructor(city, state) {
        this.apiKey = 'U3MHN8W3QLBH2KKPRSVJWS9YX'
        this.city = city
        this.state = state
        
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.city}%20${this.state}?unitGroup=us&iconSet=icons2&key=${this.apiKey}&contentType=json`)
        const responseData = await response.json()
        return responseData
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city
        this.state = state
    }
}