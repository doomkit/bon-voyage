<template>
	<button
		:type="type"
		class="group relative w-full flex justify-center py-2 px-4 text-sm leading-6 font-medium rounded text-white focus:outline-none  focus:shadow-outline-indigo transition duration-150 ease-in-out"
		:class="{
			'bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 active:bg-indigo-700': !color || color === 'primary',
			'bg-red-600 hover:bg-red-500 focus:border-red-700 active:bg-red-700': color === 'danger',
			'bg-gray-600 hover:bg-gray-500 focus:border-gray-700 active:bg-gray-700': color === 'secondary'
		}"
	>
		<span
			class="absolute left-0 inset-y-0 flex items-center pl-3"
			:class="{
				'text-indigo-400': !color || color === 'primary',
				'text-red-400': color === 'danger',
				'text-gray-400': color === 'secondary'
			}"
		>
			<font-awesome-icon v-if="iconClass" :icon="iconClass" />
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
			color: String		// primary, secondary, danger
		},
	};
</script>
