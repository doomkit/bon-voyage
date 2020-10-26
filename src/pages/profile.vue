<template>

  <div class="w-full mx-auto flex items-start md:space-x-8 flex-wrap md:flex-no-wrap">
    <div
      class="w-full md:w-1/3 p-4 rounded shadow-lg bg-white flex flex-col items-center mb-8"
    >
      <div
        class="w-24 h-24 bg-gray-400 rounded-lg mb-4 text-white text-6xl flex justify-center items-center"
      >
        <font-awesome-icon icon="smile" />
      </div>
      <h1 class="font-bold">Name Surname</h1>
      <h2 class="text-sm text-gray-600 mb-4">@username</h2>
      <div
        class="flex justify-between items-center divide-x divide-gray-300 text-center mb-6"
      >
        <div class="px-2">
          <p class="text-gray-500 text-xs mb-2">Trips planned</p>
          <p class="text-indigo-500 text-sm font-bold">2</p>
        </div>
        <div class="px-2">
          <p class="text-gray-500 text-xs mb-2">Miles travelled</p>
          <p class="text-indigo-500 text-sm font-bold">13.5</p>
        </div>
        <div class="px-2">
          <p class="text-gray-500 text-xs mb-2">Places visited</p>
          <p class="text-indigo-500 text-sm font-bold">7</p>
        </div>
      </div>
			<div class="w-48 md:w-full">
				<the-button
					:iconClass="'sign-out-alt'"
					:type="'button'"
					:text="'Logout'"
				></the-button>
			</div>
    </div>

    <div class="w-full md:w-2/3 p-4 rounded shadow-lg bg-white  mb-8">
			<h2 class="text-gray-600 text-sm pb-2 mb-4 uppercase font-thin border-b">User details</h2>
			<div v-for="item in props" :key="item" class="flex text-sm mb-2">
				<div class="w-1/3 text-gray-600">{{ item.text }}:</div>
				<div class="w-2/3 text-indigo-600">{{ item.val }}</div>
			</div>

			<h2 class="text-gray-600 text-sm pb-2 mb-4 mt-6 uppercase font-thin border-b">Account actions</h2>
			<div class="flex space-x-2">
				<the-button type="button" text="Edit information" color="secondary"></the-button>
				<the-button type="button" text="Delete account"  color="danger"></the-button>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			props: [
				{
					text: 'Email',
					val: 'email@email'
				},
				{
					text: 'Phone',
					val: '+420 000 999 888'
				},
				{
					text: 'City',
					val: 'Prague'
				},
			]
		}
	}
}
</script>