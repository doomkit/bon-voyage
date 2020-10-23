<template>
  <div class="w-full mx-auto flex space-x-8">
    <div
      class="w-1/3 p-4 rounded shadow-lg bg-white flex flex-col items-center"
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
      <the-button
        :iconClass="'sign-out-alt'"
        :type="'button'"
        :text="'Logout'"
      ></the-button>
    </div>

    <div class="w-2/3 p-4 rounded shadow-lg bg-white"></div>
  </div>
</template>
