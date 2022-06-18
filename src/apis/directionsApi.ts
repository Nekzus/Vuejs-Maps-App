import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token:
            'pk.eyJ1IjoibmVrenVzIiwiYSI6ImNsNGl4MHBqbjBrOHMzZGs3ejRyd2hxZ2sifQ.i3vGTdTwI9HApVuTH1zDXQ',
    },
})

export default directionsApi
