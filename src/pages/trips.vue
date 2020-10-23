<template>
	<div class="w-full">
		<div class="w-48 mb-8">
			<the-button
				text="Hey"
				type="button"
				iconClass="sign-out-alt"
				@click="say('Heeey!')"
			>
			</the-button>
		</div>
		<div class="container mx-auto p-8">
			<div id="mapContainer" class="w-full h-64"></div>
		</div>
	</div>
</template>

<script>
	import mapboxgl from 'mapbox-gl';
	import { onMounted } from 'vue';

	export default {
		setup() {
			onMounted(() => {
				mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_KEY;
				const map = new mapboxgl.Map({
					container: 'mapContainer',
					style: 'mapbox://styles/mapbox/streets-v11',
				});

				console.log(map);
			});

			function say(words) {
				alert(words);
			}

			return { say };
		},
	};
</script>
