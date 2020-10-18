<template>
	<header class="bg-white shadow">
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold leading-tight text-gray-900">
				Dashboard
			</h1>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<!-- Replace with your content -->
			<div class="px-4 py-6 sm:px-0">
				<div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
					<div class="w-48">
						<the-button
							text="Logout"
							type="button"
							iconClass="sign-out-alt"
							@click="handleLogout"
						>
						</the-button>
					</div>
				</div>
			</div>
			<!-- /End replace -->
		</div>
	</main>
</template>

<script>
	import { useRouter } from 'vue-router';
	import { logout } from './../services/auth';

	export default {
		setup() {
			const router = useRouter();

			function handleLogout() {
				logout();
				router.push('/login');
			}

			return { handleLogout };
		},
	};
</script>
