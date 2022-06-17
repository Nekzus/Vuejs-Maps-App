import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
    'pk.eyJ1IjoibmVrenVzIiwiYSI6ImNsNGl4MHBqbjBrOHMzZGs3ejRyd2hxZ2sifQ.i3vGTdTwI9HApVuTH1zDXQ'

if (!navigator.geolocation) {
    alert('Tu navegador no soporta el GeoLocation')
    throw new Error('Tu navegador no soporta el GeoLocation')
}

createApp(App).use(store).use(router).mount('#app')
