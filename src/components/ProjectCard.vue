<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  project: Object,
  index: Number,
});
const emit = defineEmits(['flip']);
</script>

<template>
  <div class="relative w-full h-[450px] perspective cursor-pointer" @click="emit('flip', index)">
    <div
      class="absolute inset-0 transition-transform duration-500 preserve-3d"
      :class="{ 'rotate-y-180': project.flipped }">
      <!-- Front -->
      <div class="absolute inset-0 bg-white backface-hidden shadow-md transition-all duration-500 hover:shadow-xl rounded-xl overflow-hidden flex flex-col">
        <div class="h-full w-full bg-cover bg-center" :style="`background-image: url(${project.image})`"></div>
        <div class="p-4 border-t-2 border-gray-300 flex-1 flex flex-col">
          <div class="text-2xl mb-3">{{ project.title }}</div>
          <div class="flex flex-wrap gap-2 mb-2">
            <span
              v-for="(skill, idx) in project.skills"
              :key="idx"
              class="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full"
            >{{ skill }}</span>
          </div>
        </div>
        <div class="inline-flex items-center gap-4 border-t-2 p-4">
            <a v-if="project.demo" :href="project.demo" target="_blank" class="text-gray-400 hover:text-blue-500 relative link-underline">Demo &#8599;</a>
            <a v-if="project.repo" :href="project.repo" target="_blank" class="text-gray-400 hover:text-blue-500 relative link-underline">Repo &#8599;</a>
          </div>
      </div>
      <!-- Back -->
      <div class="absolute inset-0 bg-white transition-all duration-500 hover:shadow-xl backface-hidden rotate-y-180 shadow-md rounded-xl overflow-auto flex flex-col">
        <div class="p-[5rem] flex-1 flex justify-center text-justify">
          <span>{{ project.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perspective { perspective: 1000px; }
.preserve-3d { transform-style: preserve-3d; }
.backface-hidden { backface-visibility: hidden; }
.rotate-y-180 { transform: rotateY(180deg); }

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
