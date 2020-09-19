const axios = require('axios').default;

class FoursquareBuilder {


    categories = { "coffee": "4bf58dd8d48988d1e0931735", "nightlife": "4d4b7105d754a06376d81259" };
    params = {
        radius: 8000,
        sortByPopularity: '1',
        v: '20180323',
        limit: 200,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        reasonsDetail: '1',
    }

    constructor(category, lat, long) {

        this.params.categoryId = this.categories[category];
        this.params.ll = `${lat}, ${long}`;
    }
    setRadius(radius) {
        this.params.radius += radius;
    }

    async sendRequest() {

        const firstResult = await axios.get('https://api.foursquare.com/v2/venues/explore', {params: this.params});
        this.setRadius(-4000);
        const secondResult = await axios.get('https://api.foursquare.com/v2/venues/explore', {params: this.params});
        const result = { ...firstResult, ...secondResult };
        console.log(result);
        return result;
    }
}

module.exports = FoursquareBuilder;