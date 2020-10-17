<template>
	<button
		:type="type"
		class="group relative w-full flex justify-center py-2 px-4 text-sm leading-6 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
	>
		<span
			class="text-indigo-400 absolute left-0 inset-y-0 flex items-center pl-3"
		>
			<font-awesome-icon :icon="iconClass" />
		</span>
		{{ text }}
	</button>
</template>

<script>
	export default {
		props: {
			iconClass: String,
			type: String,
			text: String,
		},
	};
</script>
