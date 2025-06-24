<template>
  <a :href="href" target="_blank" class="group relative flex flex-col items-center justify-center p-4 bg-black text-white rounded-full w-20 h-20 duration-200 overflow-hidden">
    <div class="absolute transition-all duration-300 ease-in-out group-hover:translate-y-full group-hover:opacity-0">
      <img :src="src" :alt="alt" class="w-8 h-8 inversion"/>
    </div>
    <div class="absolute translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
      <svg class="w-8 h-8" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
      </svg>
    </div>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  src: String,
  alt: String,
  href: String,
});
</script>

<style scoped>
.inversion {
  filter: invert(100%);
}
</style> 