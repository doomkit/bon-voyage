<template>
	<div
		class="container mx-auto min-h-screen flex flex-col justify-center items-center py-4 px-2 sm:px-4 pb-16"
	>
		<img class="mx-auto h-12 w-auto" src="@/assets/logo.svg" />
		<h1 class="text-gray-800 text-2xl text-center font-bold mb-2">
			Create new account
		</h1>
		<p class="text-gray-700 mb-6">
			Already a member?
			<router-link :to="{ name: 'Login' }" v-slot="{ href, navigate }">
				<a
					:href="href"
					@click="navigate"
					class="text-indigo-500 hover:text-indigo-700 focus:text-indigo-800"
				>
					Sign in
				</a>
			</router-link>
		</p>
		<div
			class="w-full md:w-3/4 lg:w-1/2 bg-gray-800 rounded-lg py-6 px-4 sm:px-6 shadow-2xl"
		>
			<form action="" class="space-y-2">
				<the-input
					label="Username"
					placeholder="Username"
					iconClass="user-circle"
					name="username"
					type="text"
					autocomplete="off"
				></the-input>
				<the-input
					label="Email"
					placeholder="Email"
					iconClass="envelope"
					name="email"
					type="email"
					autocomplete="off"
				></the-input>
				<the-input
					label="Password"
					placeholder="Password"
					iconClass="unlock-alt"
					name="password"
					type="password"
					autocomplete="new-password"
				></the-input>

				<div class="pt-6">
					<the-button
						text="Create account"
						type="submit"
						iconClass="sign-in-alt"
					></the-button>
				</div>
			</form>
		</div>
		<p class="text-xs text-gray-600 px-2 mt-4">
			By creating an account, you agree to the
			<span
				class="text-indigo-500 hover:text-indigo-700 focus:text-indigo-800 cursor-pointer"
			>
				Terms of Service
			</span>
		</p>
	</div>
</template>

<script>
	import TheInput from './../components/forms/input';

	export default {
		components: { TheInput },
		setup() {
			function onSubmit(e) {
				console.log('submitted', e);
			}

			return {
				onSubmit,
			};
		},
	};
</script>
