<template>
    <MapView />
    <SearchBar />
    <MyLocationBtn />
</template>

<script lang="ts">
    import MapView from '@/components/mapview/MapView.vue'
    import SearchBar from '@/components/searchbar/SearchBar.vue'
    import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue'
    import { usePlacesStore } from '@/composables'
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'HomeView',
        components: { MapView, MyLocationBtn, SearchBar },
        setup() {
            usePlacesStore()
        },
    })
</script>
