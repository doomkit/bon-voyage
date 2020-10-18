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
			class="w-full md:w-3/4 lg:w-1/2 bg-gray-800 shadow-2xl rounded-lg py-6 px-4 sm:px-6 mb-4"
		>
			<form @submit.prevent="onSubmit" class="space-y-2 relative">
				<div class="relative">
					<the-input
						label="Username"
						placeholder="Username"
						iconClass="user-circle"
						name="username"
						type="text"
						autocomplete="off"
						v-model="username"
					></the-input>
					<p
						class="absolute right-0 text-red-700 text-sm transition duration-300"
						:class="[invalidForm && !username ? 'opacity-1' : 'opacity-0']"
					>
						Please enter your username
					</p>
				</div>
				<div class="relative">
					<the-input
						label="Password"
						placeholder="Password"
						iconClass="unlock-alt"
						name="password"
						type="password"
						autocomplete="new-password"
						v-model="password"
					></the-input>
					<p
						class="absolute right-0 text-red-700 text-sm transition duration-300"
						:class="[invalidForm && !password ? 'opacity-1' : 'opacity-0']"
					>
						Please enter your password
					</p>
				</div>
				<div class="pt-6">
					<the-button
						text="Sign in"
						type="submit"
						iconClass="sign-in-alt"
					></the-button>
				</div>
			</form>
		</div>
		<p
			class="text-red-700 text-right text-sm transition duration-300"
			:class="[invalidForm && !invalidForm ? 'opacity-1' : 'opacity-0']"
		>
			Failed to login. Wrong username or password.
		</p>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	// import { ref, reactive, computed } from "@vue/composition-api"

	import TheInput from './../components/forms/input';
	import { login } from '../services/auth';

	export default {
		components: { TheInput },
		setup() {
			const router = useRouter();

			let username = ref('');
			let password = ref('');
			let invalidForm = ref(false);
			let loginFailed = ref(false);

			function onSubmit() {
				if (!username.value.length || !password.value.length) {
					invalidForm.value = true;
					return;
				}
				const loggedIn = login(username.value, password.value);
				if (loggedIn) router.push('/dashboard');
				else {
					// TODO: show error message
					loginFailed.value = true;
				}
			}

			return {
				username,
				password,
				invalidForm,
				loginFailed,
				onSubmit,
			};
		},
	};
</script>
