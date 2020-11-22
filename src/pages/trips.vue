<template>
	<div class="w-full">
		<div class="w-48 mb-8">
			<the-button text="Hey" type="button" iconClass="sign-out-alt" @click="say('Heeey!')">
			</the-button>
		</div>

		<div class="container mx-auto p-8">
			<div id="mapContainer" class="w-full h-64"></div>
			<p
				v-if="geoPermission === 'denied' || geoPermission === 'prompt'"
				class="font-bold text-gray-500 text-sm my-2"
			>
				<font-awesome-icon icon="compass" class="mr-2" />
				Can't get your current location. Check permissions for this website in your browser.
			</p>
		</div>
	</div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import { onMounted, ref } from 'vue';

import { getUserCoordinates } from '../services/geolocation';

export default {
	setup() {
		const geoPermission = ref('');
		let map;

		function flyToLocation(location) {
			const lng = location.coords.longitude;
			const lat = location.coords.latitude;
			map.flyTo({
				center: [lng, lat],
				essential: true,
				zoom: 11,
			});
		}

		function say(words) {
			alert(words);
		}

		onMounted(() => {
			mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_KEY;
			map = new mapboxgl.Map({
				container: 'mapContainer',
				style: 'mapbox://styles/mapbox/streets-v11',
				zoom: 3,
			});

			navigator.permissions.query({ name: 'geolocation' }).then(permission => {
				geoPermission.value = permission.state;
				permission.onchange = () => {
					geoPermission.value = permission.state;
					getUserCoordinates(flyToLocation);
				};
			});
		});

		return { say, geoPermission };
	},
};
</script>
