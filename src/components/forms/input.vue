<template>
  <div class="relative flex flex-col w-full">
    <label
      :for="label"
      class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 cursor-pointer"
    >
      {{ label }}
    </label>

    <input
      :id="label"
      type="text"
      :placeholder="placeholder"
      class="text-sm sm:text-base text-white placeholder-gray-500 w-full rounded bg-gray-900 focus:bg-gray-700 focus:outline-none py-2 pr-2 pl-12"
    />
    <div
      class="absolute text-gray-500 text-sm sm:text-base w-10 flex justify-center rounded-l bottom-0 p-2"
    >
      X
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String,
  },
};
</script>
