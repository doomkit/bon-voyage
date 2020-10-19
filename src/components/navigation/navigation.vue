<template>
	<div class="relative" style="height: 64px">
		<nav class="absolute z-20 w-full bg-gray-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between h-16">
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<img class="h-8 w-8" src="@/assets/logo.svg" />
						</div>
						<span class="mx-2 font-bold text-indigo-600 select-none">
							Bon voyage
						</span>
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
							</div>
						</div>
					</div>

					<div class="-mr-2 flex md:hidden">
						<hamburger-button v-model:showMenu="showMenu"></hamburger-button>
					</div>
				</div>
			</div>
		</nav>

		<mobile-menu
			v-model:show="showMenu"
			:items="mainItems"
			:items2="dropdownItems"
		></mobile-menu>
	</div>
</template>

<script>
	import NavigationLink from './navigation-link';
	import Dropdown from '../ui/dropdown';
	import MobileMenu from './mobile-menu';
	import HamburgerButton from './hamburger-button';

	export default {
		components: { NavigationLink, Dropdown, MobileMenu, HamburgerButton },
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
