import { defineComponent, onMounted, ref, watch } from 'vue'
import { usePlacesStore } from '@/composables'
import Mapboxgl from 'mapbox-gl'

export default defineComponent({
    name: 'MapView',
    setup() {
        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserlocationReady } = usePlacesStore()

        const initMap = async () => {
            if (!mapElement.value) throw new Error('DIV Element no existe')
            if (!userLocation.value) throw new Error('user location no existe')

            await Promise.resolve()

            const map = new Mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/light-v10',
                center: userLocation.value,
                zoom: 15,
            })
            const myLocationPopup = new Mapboxgl.Popup({
                offset: [0, -45],
            }).setLngLat(userLocation.value).setHTML(`
                <h4>Aquí estoy</h4>
                <p>Actualmente en Puerto Madryn</p>
                `)

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map)
        }

        onMounted(() => {
            if (isUserlocationReady.value) return initMap()
        })

        watch(isUserlocationReady, newVal => {
            if (isUserlocationReady.value) initMap()
        })

        return {
            isUserlocationReady,
            mapElement,
        }
    },
})
