<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  image: String,
  title: String,
  demo: String,
  repo: String,
  skills: Array,
  description: String,
});
</script>

<template>
  <div class="bg-white overflow-hidden shadow-md transition duration-300 hover:shadow-xl group">
    <!-- Project Image -->
    <div class="h-80 w-full bg-cover blur-xs grayscale group-hover:filter-none transition-filter duration-300" :style="`background-image: url(${image})`"></div>
    <div class="p-4 border-y-2 border-gray-300">
      <div class="text-2xl mb-3">{{ title }}</div>
      <!-- Skills Pills -->
      <div class="flex flex-wrap gap-2 ">
        <span v-for="(skill, index) in skills" :key="index" class="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
          {{ skill }}
        </span>
      </div>
    </div>

    <!-- Description -->
    <div class=" border-t-gray-300 p-5">{{ description }}</div>
    <div class="inline-flex items-center justify-start gap-4 w-full p-4 border-t-2 border-gray-300">
      <a
        v-if="demo"
        :href="demo"
        target="_blank"
        class="relative text-gray-400 transition-colors duration-200 hover:text-blue-500 link-underline"
        >Demo &#8599;</a>
      <a
        v-if="repo"
        :href="repo"
        target="_blank"
        class="relative text-gray-400 transition-colors duration-200 hover:text-blue-500 link-underline"
        >Repository &#8599;</a>
    </div>
  </div>
</template>

<style scoped>
.link-underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: #3b82f6; /* Tailwind blue-500 */
  transition: width 0.3s ease;
}

.link-underline:hover::after {
  width: 100%;
}
</style>