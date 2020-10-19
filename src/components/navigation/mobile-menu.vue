<template>
	<transition name="menu">
		<div
			v-if="show"
			class="md:hidden absolute z-10 right-0 w-full bg-gray-800 rounded-b-lg"
			style="margin-top: 64px"
		>
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<navigation-link
					v-for="item in items"
					:key="item"
					:text="item.text"
					:path="item.path"
					@click="() => $emit('update:show', !show)"
					class="block"
				></navigation-link>
			</div>
			<div class="pt-4 pb-3 border-t border-gray-700">
				<div class="flex items-center px-5 space-x-3">
					<div class="flex-shrink-0">
						<div class="h-8 w-8 rounded-full bg-gray-500"></div>
					</div>
					<div class="space-y-1">
						<div class="text-base font-medium leading-none text-white">
							Tom Cook
						</div>
						<div class="text-sm font-medium leading-none text-gray-400">
							tom@example.com
						</div>
					</div>
				</div>
				<div class="mt-3 px-2 space-y-1">
					<navigation-link
						v-for="item in items2"
						:key="item"
						:text="item.text"
						:path="item.path"
						@click="() => $emit('update:show', !show)"
						class="block"
					></navigation-link>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import NavigationLink from './navigation-link';
	export default {
		components: { NavigationLink },
		props: {
			show: Boolean,
			items: Array,
			items2: Array,
		},
	};
</script>

<style>
	.menu-enter-from,
	.menu-leave-to {
		opacity: 0;
		transform: scale(0.95);
		transform: translateY(-100%);
	}
	.menu-enter-to,
	.menu-leave-from {
		opacity: 1;
		transform: scale(1);
		transform: translateY(0);
	}
	.menu-enter-active,
	.menu-leave-active {
		transition: all 0.4s ease-out;
	}
</style>
