<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    timeline: Object,
});
</script>

<template>
  <div class="flex items-start w-full mb-12 relative opacity-0 transform translate-y-10 animate-fade-in-up">
    <!-- Vertical Line -->
    <div class="w-1 bg-black h-[128%] absolute left-3.5 top-0 z-0"></div>
    <!-- Dot -->
    <div class="w-3 h-3 bg-black rounded-full absolute left-2.5 top-0 z-10"></div>

    <div class="ml-10 flex flex-col md:flex-row w-full items-center">
      <!-- Left: Text Content -->
      <div class="w-1/2 flex flex-col items-start">
        <p class="inline-block px-2 py-1 mb-5 font-semibold text-white bg-stone-900 dark:bg-white dark:text-stone-900 rounded-md ">{{ timeline.time }}</p>
        <h2 class="text-2xl font-semibold mb-2">{{ timeline.event }}</h2>
        <div class="text-gray-900 text-justify pr-0 md:pr-8 lg:pr-16 text-lg">
          <slot name="description">
            {{ timeline.description }}
          </slot>
        </div>
      </div>
      <!-- Right: Images -->
      <div class="w-1/2 flex flex-wrap justify-center items-center md:justify-start gap-4 mt-4 md:mt-0">
        <img v-for="(image, index) in timeline.images" :key="index" :src="image" alt="Timeline Image" class="w-32 h-32 object-cover rounded-md shadow-lg polaroid" />
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Define the keyframes for the fade-in-up animation */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply the animation */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}
</style>
