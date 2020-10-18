<template>
	<div class="w-full h-full">
		<navigation></navigation>
		<router-view></router-view>
	</div>
</template>

<script>
	import Navigation from '../components/navigation/navigation';

	export default {
		components: { Navigation },
	};
</script>
