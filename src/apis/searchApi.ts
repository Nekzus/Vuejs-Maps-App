import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token:
            'pk.eyJ1IjoibmVrenVzIiwiYSI6ImNsNGl4MHBqbjBrOHMzZGs3ejRyd2hxZ2sifQ.i3vGTdTwI9HApVuTH1zDXQ',
    },
})

export default searchApi
