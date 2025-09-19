<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.querySelector('.placeholder')
    const footer = document.querySelector('.footer')

    function updateHeight() {
        if (footer && placeholder) {
        // Use computed style for more accuracy
        const computedHeight = getComputedStyle(footer).height
            placeholder.style.height = computedHeight
        }
    }

    window.addEventListener('resize', updateHeight)
    window.addEventListener('load', updateHeight)
    updateHeight()
})
</script>

<template>
  <!-- Static background wrapper -->
  <div class="main-bg bg-[url(/src/assets/background.jpg)] bg-fixed text-white">
    <Navbar/>
    <transition name="fade" mode="out-in" @before-enter="handleBeforeEnter" @after-enter="handleAfterEnter">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </transition>
  </div>
  <div class="placeholder"></div>
  <Footer class="footer"/>
</template>

<style scoped>
.main-bg {
    position: relative;
    z-index: 1;
}
.footer {
    position: fixed;
    z-index: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
