<template>
	<div
		class="container mx-auto min-h-screen flex flex-col justify-center items-center py-4 px-2 sm:px-4 pb-16"
	>
		<img class="mx-auto h-12 w-auto" src="@/assets/logo.svg" />
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
			class="w-full md:w-3/4 lg:w-1/2 bg-gray-800 rounded-lg py-6 px-4 sm:px-6 shadow-2xl"
		>
			<form @submit.prevent="onSubmit" class="space-y-2">
				<the-input
					label="Username"
					placeholder="Username"
					iconClass="user-circle"
					name="username"
					type="text"
					autocomplete="off"
					v-model="username"
				></the-input>
				<the-input
					label="Password"
					placeholder="Password"
					iconClass="unlock-alt"
					name="password"
					type="password"
					autocomplete="new-password"
					v-model="password"
				></the-input>

				<div class="pt-6">
					<the-button
						text="Sign in"
						type="submit"
						iconClass="sign-in-alt"
					></the-button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';

	import TheInput from './../components/forms/input';
	import TheButton from './../components/ui/button';

	export default {
		components: { TheInput, TheButton },
		setup() {
			const router = useRouter();

			let username = ref('');
			let password = ref('');

			function onSubmit() {
				console.log(`${username.value}:${password.value}`);
				router.push('/dashboard');
			}

			return {
				username,
				password,
				onSubmit,
			};
		},
	};
</script>
