<template>
	<div class="relative flex flex-col w-full">
		<label
			:for="label"
			class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 cursor-pointer"
		>
			{{ label }}
		</label>

		<!-- Fixes autocomplete issue -->
		<input style="opacity: 0; position: absolute" />
		<input
			:id="label"
			:type="type"
			:name="name"
			:placeholder="placeholder"
			class="text-sm sm:text-base text-white placeholder-gray-500 w-full rounded bg-gray-900 focus:bg-gray-700 focus:outline-none py-2 px-2"
			:class="[iconClass && 'pl-12']"
			:autocomplete="autocomplete"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
		<div
			v-if="iconClass"
			class="absolute text-gray-500 text-sm sm:text-base w-10 flex justify-center rounded-l bottom-0 p-3"
		>
			<font-awesome-icon :icon="iconClass" />
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			label: String,
			placeholder: String,
			iconClass: String,
			name: String,
			type: String,
			autocomplete: String,
			modelValue: String,
		},
	};
</script>

<style scoped>
	/* Autofill styles override */
	/*
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover,
	select:-webkit-autofill,
	select:-webkit-autofill:hover {
		border: none;
		-webkit-text-fill-color: white;
		-webkit-box-shadow: 0 0 0px 1000px #1a202c inset;
		transition: background-color 5000s ease-in-out 0s;
	}
	input:-webkit-autofill:focus,
	textarea:-webkit-autofill:focus,
	select:-webkit-autofill:focus {
		border: none;
		-webkit-text-fill-color: white;
		-webkit-box-shadow: 0 0 0px 1000px #4a5568 inset;
		transition: background-color 5000s ease-in-out 0s;
	}
	*/
</style>
