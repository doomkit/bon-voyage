<template>
	<navigation></navigation>
	<router-view></router-view>
</template>

<script>
	import Navigation from '../components/navigation/navigation';

	export default {
		components: { Navigation },
	};
</script>
