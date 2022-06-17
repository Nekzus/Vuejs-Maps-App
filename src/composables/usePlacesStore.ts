import { StateInterface } from '@/store'
import { computed } from '@vue/reactivity'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export const usePlacesStore = () => {
    const store = useStore<StateInterface>()

    onMounted(() => {
        if (!store.getters['places/isUserlocationReady']) {
            store.dispatch('places/getInitialLocation')
        }
    })
    return {
        // State
        isLoading: computed(() => store.state.places.isLoading),
        userLocation: computed(() => store.state.places.userLocation),

        // Getters
        isUserlocationReady: computed<boolean>(
            () => store.getters['places/isUserlocationReady'],
        ),

        // Actions
        getInitialLocation: () => store.dispatch('places/getInitialLocation'),

        // Mutations
        setUserLocation: (location: any) =>
            store.commit('places/setUserLocation', location),
    }
}
