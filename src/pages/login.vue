<template>
	<div
		class="container mx-auto min-h-screen flex flex-col justify-center items-center py-4 px-2 sm:px-4"
	>
		<h1 class="text-gray-800 text-2xl text-center font-bold mb-2">
			Sign in to your account
		</h1>
		<p class="text-gray-700 mb-6">
			Not a member?
			<router-link to="/registration" v-slot="{ href, navigate }">
				<a
					:href="href"
					@click="navigate"
					class="text-indigo-500 hover:text-indigo-700 focus:text-indigo-800"
				>
					Create account
				</a>
			</router-link>
		</p>
		<div
			class="w-full md:w-3/4 lg:w-1/2 bg-gray-800 rounded-lg py-6 px-4 sm:px-6 shadow-2xl space-y-4"
		>
			<the-input
				label="Username"
				placeholder="Username"
				iconClass="user-circle"
				name="username"
				type="text"
			></the-input>
			<the-input
				label="Password"
				placeholder="Password"
				iconClass="unlock-alt"
				name="password"
				type="password"
			></the-input>
		</div>
	</div>
</template>

<script>
	import TheInput from './../components/forms/input';

	export default {
		components: { TheInput },
	};
</script>
