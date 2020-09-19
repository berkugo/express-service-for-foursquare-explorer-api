# Metvine Places API

## Endpoints


- [/places/nearby](#nearby-places) - Return nearby places, ordered by distance

# Nearby places

## Usage

`GET /places/nearby`

- query parameters
  - `lat` latitude of the location
  - `long` longtitude of the location
  - `amount` number of places to get (maximum 60)

```
/places/nearby?lat=<latitude>&long=<longtitude>&amount=<number-of-places>
```

## Response

- `200 OK` on success
- `400 Bad Request` on
  - Amount out of range
  - Missing parameters

```json
{
    "data": [
        {
            "geometry": {},
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "41f5ba285e49ee5e3f0e6e7b82848e53102708c4",
            "name": "Terminus Hotel",
            "opening_hours": {},
            "photos": [],
            "place_id": "ChIJSYy3JzSuEmsR9yJZUp4gpPA",
            "plus_code": {},
            "price_level": 2,
            "rating": 4.1,
            "reference": "ChIJSYy3JzSuEmsR9yJZUp4gpPA",
            "scope": "GOOGLE",
            "types": [],
            "user_ratings_total": 453,
            "vicinity": "61 Harris Street, Pyrmont"
        },
        ...
    ],
    "status": {
        "code": "200",
        "message": "OK",
    }
}
```
