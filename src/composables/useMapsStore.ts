import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { StateInterface } from '@/store'
import Mapboxgl from 'mapbox-gl'

export const useMapsStore = () => {
    const store = useStore<StateInterface>()
    return {
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),

        setMap: (map: Mapboxgl.Map) => store.commit('map/setMap', map),
    }
}
