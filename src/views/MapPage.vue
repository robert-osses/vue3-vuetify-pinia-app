<script setup lang="ts">
    import { computed, ref } from "vue";
    import { useTheme } from 'vuetify'
    // @ts-expect-error
    import { latLngBounds, latLng } from 'leaflet'
    // @ts-expect-error
    import { LMap, LTileLayer, LMarker, LTooltip, LGeoJson, LCircleMarker, LPolygon } from '@vue-leaflet/vue-leaflet'
    // , LIcon, LControlLayers, LPopup, LPolyline, LRectangle
    // @ts-expect-error
    import regiones from '@/api/geoJson/regiones.js'
    // @ts-expect-error
    import incendios from '@/api/geoJson/incendios.js'

    import 'leaflet/dist/leaflet.css'
    
    const theme = useTheme()

    const mapa = ref(null)

    const tile = ref(null)
    
    const attribution = ref<string>('&copy; demo MyC')
    
    const zoom = ref<number>(7)
    
    const center = ref<latLng>([-38.050254, -72.182922])

    const marcadores = ref<latLng[]>([
        latLng([-33.45606, -70.66031]),
        latLng([-34.45606, -71.66031]),
        latLng([-35.45606, -72.66031]),
        latLng([-36.45606, -73.66031]),
    ])
    
    const poligonos = ref<latLng[]>([
        latLng([-45.490946, -72.91626]),
        latLng([-45.02695, -71.619873]),
        latLng([-45.367584, -71.356201]),
        latLng([-46.240652, -72.718506]),
        latLng([-45.490946, -72.91626]),
    ])

    const maxBounds = ref<latLngBounds>([
        [-17, -117],
        [-72, -50]
    ])

    const circleMarkerOptions = {
        color: "#000",
        opacity: 0.5,
        weight: 0.5,
        fillColor: "#ff7800",
        fillOpacity: 0.3,
        radius: 8,
    }

    const geoJsonStyle = {
            color: "#000",
            opacity: 0.5,
            weight: 0.5,
            fillColor: '#35495d',
            fillOpacity: 0.1,
            zIndex: 0.1,
    }

    const geoJsonOtions = {
        // @ts-expect-error
        onEachFeature: (feature, layer) => {
            // console.log(feature, layer);
            layer.setStyle({ ...geoJsonStyle })
            layer.on('mouseover', async () => {
                layer.setStyle({ ...geoJsonStyle, fillOpacity:0.3 })
            });
            layer.on('mouseout', async () => {
                layer.setStyle({ ...geoJsonStyle, fillOpacity:0.1 })
            });
            layer.on('click', async () => {
                console.log(feature, layer);
            });
        },
    }
    
    const zoomChange = computed(() => zoom.value)
    const url = computed(() => theme.global.current.value.dark ? 'http://www.openmap.mil/styles/dark-matter/{z}/{x}/{y}.png' : 'http://www.openmap.mil/styles/osm-bright/{z}/{x}/{y}.png')

    // @ts-expect-error
    function log(e) {
        if (e.type != 'move') console.log(e)
    }

    // @ts-expect-error
    function movimiento(e, mov) {
        mov.lat = e.target._latlng.lat
        mov.lng = e.target._latlng.lng
        center.value = latLng([e.target._latlng.lat, e.target._latlng.lng])
    }

    // @ts-expect-error
    function centrar(click) {
        console.log(click)
        center.value = latLng([click.lat, click.lng])
        // zoom.value = 9
    }

    function consoleLeaflet() {
        console.log({ ...marcadores.value })
    }


    const mapaComputed = computed(() => mapa.value)

    // @ts-expect-error
    function initMap(e) {
        console.log('initMap', e)
        // console.log('mapaComp', mapaComputed)
        // @ts-expect-error
        console.log('mapa: ', mapa.value.center, 'tile: ', tile.value)
    }

</script>

<template>
    <v-row dense class="text-center" style="height: 85vh !important">
        <v-col cols="12" sm="6" md="4">
            <l-map
                ref="mapa"
                v-model:zoom="zoom"
                v-model:center="center"
                :max-bounds="maxBounds"
                @move="log"
                @ready="initMap"
            >
                <!-- @move="log" -->
                <l-tile-layer
                    :url="url"
                    layer-type="base"
                    name="OpenStreetMap"
                    :attribution="attribution"
                    :minZoom="4"
                    ref="tile"
                ></l-tile-layer>

                <!-- <l-control-layers /> -->
                <l-marker v-for="marcador in marcadores" :lat-lng="marcador" draggable @moveend="movimiento($event, marcador)" @click="centrar(marcador)">
                    <l-tooltip> {{ marcador }} </l-tooltip>
                </l-marker>

                <l-geo-json v-if="true" :geojson="regiones" :options="geoJsonOtions" @ready="log" />

                <l-circle-marker v-for="incendio in incendios" :lat-lng="incendio" :options="circleMarkerOptions" @click="centrar(incendio)">
                    <l-tooltip> {{ incendio }} </l-tooltip>
                </l-circle-marker>

                <l-polygon v-if="true"
                    :lat-lngs="poligonos"
                    color="#41b782"
                    :fill="true"
                    :fillOpacity="0.5"
                    fillColor="#41b782"
                    >
                    <l-tooltip> Éste es un Polígono! </l-tooltip>
                </l-polygon>
            </l-map>
        </v-col>
        <v-col cols="12" sm="6" md="8">
            <h5>zoom: {{ zoomChange }}</h5>
            <!-- <h5>centroComputed: {{ centro }}</h5> -->
            <h5>centro: {{ center }}</h5>
            <v-btn color="warning" @click="consoleLeaflet">Consola</v-btn>
            <v-divider class="mt-4 pt-2" />
            <ul>
                <li>MARCADORES</li>
                <li v-for="marcador in marcadores">
                    {{ marcador.lat }}, {{ marcador.lng }}
                    <v-btn 
                        size="x-small" 
                        class="mr-2" 
                        color="primary" 
                        @click="centrar(marcador)"
                    >Ir</v-btn>
                </li>
            </ul>
            <!-- <ul>
                <li>INCENDIOS</li>
                <li v-for="marcador in incendios">
                    {{ marcador.lat }}, {{ marcador.lng }}
                    <v-btn 
                        size="x-small" 
                        class="mr-2" 
                        color="primary" 
                        @click="centrar(marcador)"
                    >Ir</v-btn>
                </li>
            </ul> -->
        </v-col>
    </v-row>
</template>


<style scoped>

</style>