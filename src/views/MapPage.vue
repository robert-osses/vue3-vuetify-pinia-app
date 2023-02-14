<script setup lang="ts">
    import { computed, ref } from "vue";
    import { LMap, LTileLayer, LMarker, LIcon, LControlLayers, LTooltip, LPopup, LPolyline, LPolygon, LRectangle } from "@vue-leaflet/vue-leaflet";
    import { latLngBounds, latLng } from "leaflet";

    import "leaflet/dist/leaflet.css";

    const url = ref<string>('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    const attribution = ref<string>('&copy; demo MyC')
    
    const zoom = ref<number>(5)
    const iconWidth = ref<number>(25)
    const iconHeight = ref<number>(40)
    
    
    const marker = ref<latLng>([-33.45606, -70.66031])

    const center = ref([-33.45606, -70.66031])
    
    const bounds = ref([
        [-18.4926, -70.6582],
        [-49.6294, -73.7382]
    ])

    const maxBounds = ref([
        [-16, -66],
        [-72, -73]
    ])

    const zoomChange = computed(() => zoom.value)
    const marcador = computed(() => marker.value)

    const iconUrl = computed(() => { return `https://placekitten.com/${ iconWidth.value }/${ iconHeight.value }` })
    const iconSize = computed(() => { return [iconWidth.value, iconHeight.value] })

    function changeIcon() {
        iconWidth.value += 2;
        if (iconWidth.value > iconHeight.value) {
            iconWidth.value = Math.floor(iconHeight.value / 2);
        }
    }

    function log(e) {
        console.log(e)
    }

    function movimiento(m) {
        const target = latLng([m.target._latlng.lat, m.target._latlng.lng])

        if(m) {
            marker.value = target
        }
    }

    function addMarker() {
        console.log(LMap.props)
    }


</script>

<template>    
    <h5>zoom: {{ zoomChange }}</h5>
    <h5>marcador: {{ marcador }}</h5>
    <v-row dense class="text-center">
        <v-col cols="4">
            <l-map
                v-model:zoom="zoom"
                :center="center"
                :bounds="bounds"
                :max-bounds="maxBounds"
                @move="log"
                style="height: 80vh !important"
            >
                <l-tile-layer
                    :url="url"
                    layer-type="base"
                    name="OpenStreetMap"
                    :attribution="attribution"
                    :minZoom="4"
                ></l-tile-layer>

                <!-- <l-control-layers /> -->
                
                <l-marker :lat-lng="marker" draggable @moveend="movimiento">
                    <l-tooltip>
                    {{ marker }}
                    </l-tooltip>
                </l-marker>

                <l-polygon v-if="true"
                    :lat-lngs="[
                        [-18.4926, -74.6582],
                        [-19.4926, -70.6582],
                        [-18.4926, -72.6582],
                        [-19.4926, -74.6582],
                    ]"
                    color="#41b782"
                    :fill="true"
                    :fillOpacity="0.5"
                    fillColor="#41b782"
                    >
                    <l-tooltip> Hi! I'm a polygon, nice to meet you! </l-tooltip>
                </l-polygon>

                <!-- <l-marker :lat-lng="[47.41322, -1.219482]">
                    <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
                </l-marker> -->

                <!-- <l-marker :lat-lng="marker" draggable @moveend="log('moveend')">
                    <l-popup>
                    Marcador dinámico
                    </l-popup>
                </l-marker> -->

                <l-polyline
                    :lat-lngs="[
                    [47.334852, -1.509485],
                    [47.342596, -1.328731],
                    [47.241487, -1.190568],
                    [47.234787, -1.358337],
                    ]"
                    color="green"
                ></l-polyline>
                
                <l-polygon
                    :lat-lngs="[
                    [46.334852, -1.509485],
                    [46.342596, -1.328731],
                    [46.241487, -1.190568],
                    [46.234787, -1.358337],
                    ]"
                    color="#41b782"
                    :fill="true"
                    :fillOpacity="0.5"
                    fillColor="#41b782"
                />
                <l-rectangle
                    :lat-lngs="[
                    [46.334852, -1.509485],
                    [46.342596, -1.328731],
                    [46.241487, -1.190568],
                    [46.234787, -1.358337],
                    ]"
                    :fill="true"
                    color="#35495d"
                />
                <l-rectangle
                    :bounds="[
                    [46.334852, -1.190568],
                    [46.241487, -1.090357],
                    ]"
                >
                    <l-popup>
                    lol
                    </l-popup>
                </l-rectangle>
            </l-map>
        
            <button @click="changeIcon">New kitten icon</button>
            <v-btn @click="addMarker()">consola</v-btn>
        </v-col>
        <v-col cols="8">
            
        </v-col>
    </v-row>
</template>


<style></style>