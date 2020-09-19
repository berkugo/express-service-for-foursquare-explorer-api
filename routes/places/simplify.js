const axios = require('axios').default;

class Simplifier {


    simplifyPlaces(data) {

        let final = [];
        data.forEach(async (element) => {

            const finalData = {
                id: element.venue.id,
                place_id: element.venue.id,
                lat: element.venue.location.lat,
                long: element.venue.location.lng,
                name: element.venue.name,
                rating: 20,
                address: element.venue.location.address,
                photoReference: "none"
            }
            final.push(finalData);
        });
        return final;
    }

}

module.exports = new Simplifier();