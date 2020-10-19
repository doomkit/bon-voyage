<template>
	<div class="w-full h-full">
		<navigation></navigation>

		<router-view v-slot="{ Component }">
			<transition name="dashboard">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script>
	import Navigation from '../components/navigation/navigation';

	export default {
		components: { Navigation },
	};
</script>

<style>
	/* Router animation */
	.dashboard-enter-from {
		opacity: 0;
		transform: translateY(40px) scale(0.95);
	}
	.dashboard-leave-to {
		opacity: 0;
		transform: translateY(40px) scale(0.95);
	}
	.dashboard-enter-active {
		transition: all 0.3s ease 0.3s;
	}
	.dashboard-leave-active {
		transition: all 0.3s ease;
	}
	.dashboard-enter-to .dashboard-leave-from {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
</style>
