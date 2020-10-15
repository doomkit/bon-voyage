<template>
	<div>
		<nav class="bg-gray-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between h-16">
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<img
								class="h-8 w-8"
								src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
								alt="Workflow logo"
							/>
						</div>
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
									<button
										class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
										id="user-menu"
										aria-label="User menu"
										aria-haspopup="true"
									>
										<img
											class="h-8 w-8 rounded-full"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
									</button>
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
							@click="toggleMenu()"
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

			<!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
			<div
				:class="[showMenu && 'block', !showMenu && 'hidden']"
				class="md:hidden"
			>
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<navigation-link
						v-for="item in mainItems"
						:key="item"
						:text="item.text"
						:path="item.path"
						@click="toggleMenu"
						class="block"
					></navigation-link>
				</div>
				<div class="pt-4 pb-3 border-t border-gray-700">
					<div class="flex items-center px-5 space-x-3">
						<div class="flex-shrink-0">
							<img
								class="h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
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
							v-for="item in otherItems"
							:key="item"
							:text="item.text"
							:path="item.path"
							@click="toggleMenu"
							class="block"
						></navigation-link>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	import NavigationLink from './navigation-link';

	export default {
		components: { NavigationLink },
		data() {
			return {
				mainItems: [
					{ text: 'Dashboard', path: '/dashboard' },
					{ text: 'Login', path: '/login' },
					{ text: 'Registration', path: '/registration' },
				],
				otherItems: [
					{ text: 'Profile', path: '/profile' },
					{ text: 'Sign out', path: '/login' },
				],
				showMenu: false, // Mobile resolution
			};
		},
		methods: {
			toggleMenu() {
				this.showMenu = !this.showMenu;
			},
		},
	};
</script>

<style></style>
