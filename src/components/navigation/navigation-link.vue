<template>
	<router-link :to="path" v-slot="{ href, navigate, isActive }">
		<a
			:href="href"
			@click="navigate"
			:class="[
				isActive && 'text-white bg-gray-900',
				!isActive && 'text-gray-300 hover:bg-gray-700',
			]"
			class="text-base block px-3 py-2 rounded-md font-medium hover:text-white focus:outline-none focus:bg-gray-700"
		>
			{{ text }}
		</a>
	</router-link>
</template>

<script>
	export default {
		props: {
			text: String,
			path: Object,
		},
	};
</script>
