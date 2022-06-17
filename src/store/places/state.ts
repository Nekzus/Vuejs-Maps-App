export interface PlacesState {
    isLoading: boolean
    userLocation?: [number, number]
}

const state = (): PlacesState => {
    return {
        isLoading: true,
        userLocation: undefined,
    }
}

export default state
