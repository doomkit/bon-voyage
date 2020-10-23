<template>
  <div class="w-full h-full" style="padding-top: 64px">
    <navigation></navigation>
    <main class="h-full flex flex-col bg-gray-200">
      <header class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            {{ $route.name }}
          </h1>
        </div>
      </header>
      <div class="overflow-y-auto custom-scroll w-full h-full">
        <div class="container max-w-screen-lg max-w-7xl mx-auto p-8">
          <!-- Content -->
          <router-view v-slot="{ Component }">
            <transition name="dashboard">
              <component :is="Component" />
            </transition>
          </router-view>
          <!-- /Content -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from "../components/navigation/navigation";

export default {
  components: { Navigation },
};
</script>

<style>
/* Router animation */
.dashboard-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}
.dashboard-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}
.dashboard-enter-active {
  transition: all 0.3s ease 0.3s;
}
.dashboard-leave-active {
  transition: all 0.3s ease;
}
.dashboard-enter-to .dashboard-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
