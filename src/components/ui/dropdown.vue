<template>
	<div class="relative inline-block text-left">
		<slot></slot>
		<transition name="dropdown">
			<div
				v-if="show"
				v-click-outside="() => $emit('update:show', false)"
				class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
			>
				<div class="py-1 rounded-md bg-white shadow-xs">
					<router-link
						v-for="item in items"
						:key="item"
						:to="item.path"
						v-slot="{ href, navigate, isActive }"
					>
						<a
							:href="href"
							@click="
								() => {
									$emit('update:show', false);
									item.handle ? item.handle() : navigate;
								}
							"
							:class="[isActive && 'font-bold bg-gray-100']"
							class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
						>
							{{ item.text }}
						</a>
					</router-link>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		props: {
			show: Boolean,
			items: Array,
		},
	};
</script>

<style>
	.dropdown-enter-from,
	.dropdown-leave-to {
		opacity: 0;
		transform: scale(0.95);
	}
	.dropdown-enter-to,
	.dropdown-leave-from {
		opacity: 1;
		transform: scale(1);
	}
	.dropdown-enter-active,
	.dropdown-leave-active {
		transition: all 0.1s ease-in;
		transition-property: opacity, transform;
	}
</style>
