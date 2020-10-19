<template>
	<div class="relative" style="height: 64px">
		<nav class="absolute z-20 w-full bg-gray-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between h-16">
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<img class="h-8 w-8" src="@/assets/logo.svg" />
						</div>
						<span class="mx-2 font-bold text-indigo-600 select-none"
							>Bon voyage</span
						>
						<div class="hidden md:block">
							<div class="ml-10 flex items-baseline space-x-4">
								<navigation-link
									v-for="item in mainItems"
									:key="item"
									:text="item.text"
									:path="item.path"
								></navigation-link>
							</div>
						</div>
					</div>

					<div class="hidden md:block">
						<div class="ml-4 flex items-center md:ml-6">
							<!-- Profile dropdown -->
							<div class="ml-3 relative">
								<div>
									<dropdown v-model:show="showDropdown" :items="dropdownItems">
										<button
											class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
											id="user-menu"
											aria-label="User menu"
											aria-haspopup="true"
											@click.stop="showDropdown = !showDropdown"
										>
											<div class="h-8 w-8 rounded-full bg-gray-500"></div>
										</button>
									</dropdown>
								</div>
								<!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --></div>
						</div>
					</div>

					<div class="-mr-2 flex md:hidden">
						<!-- Mobile menu button -->
						<button
							@click="showMenu = !showMenu"
							class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
						>
							<svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									:class="[showMenu && 'block', !showMenu && 'hidden']"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
								<path
									:class="[showMenu && 'hidden', !showMenu && 'block']"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>

		<transition name="menu">
			<div
				v-if="showMenu"
				class="md:hidden absolute z-10 right-0 w-full bg-gray-800 rounded-b-lg"
				style="margin-top: 64px"
			>
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<navigation-link
						v-for="item in mainItems"
						:key="item"
						:text="item.text"
						:path="item.path"
						@click="showMenu = !showMenu"
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
							v-for="item in dropdownItems"
							:key="item"
							:text="item.text"
							:path="item.path"
							@click="showMenu = !showMenu"
							class="block"
						></navigation-link>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import NavigationLink from './navigation-link';
	import Dropdown from '../ui/dropdown';

	export default {
		components: { NavigationLink, Dropdown },
		data() {
			return {
				mainItems: [
					{ text: 'Dashboard', path: { name: 'Dashboard' } },
					{ text: 'Login', path: { name: 'Login' } },
					{ text: 'Registration', path: { name: 'Registration' } },
				],
				dropdownItems: [
					// TODO: add Profile path
					{ text: 'Profile', path: { name: 'Dashboard' } },
					{ text: 'Sign out', path: { name: 'Login' } },
				],
				showDropdown: false,
				showMenu: false, // Mobile resolution
			};
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
		transition: all 0.5s ease-in;
	}
</style>
