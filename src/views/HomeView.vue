<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { SpeedInsights } from '@vercel/speed-insights/vue';

import ContactEntry from '../components/Contacts.vue';
import InlineEntry from '../components/Inline.vue';

import linkedinicon from '../assets/icons/linkedin.svg';
import githubicon from '../assets/icons/github.svg';
import youtubeicon from '../assets/icons/youtube.svg';
import instagramicon from '../assets/icons/instagram.svg';

import waterloologo from '../assets/logos/uwaterloo.png';

const contactinfo = [
    { src: linkedinicon, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/qinkai-li-40198b31a/' },
    { src: githubicon, alt: 'GitHub', href: 'https://github.com/manfromthefog' },
    { src: youtubeicon, alt: 'YouTube', href: 'https://www.youtube.com/@thepropertytheygiveyou' },
    { src: instagramicon, alt: 'Instagram', href: 'https://www.instagram.com/qlil_0112/' },
];

const socialLinksOffset = ref(0);
const updateSocialLinksPosition = () => {
    // Get DOM elements first since #app is mounted onto a dev
    const appElement = document.querySelector('#app');
    const placeholder = document.querySelector('.placeholder');

    // Early return if either some element doesn't exist
    // Defensive programming measure

    if (!appElement || !placeholder) return;

    const viewportHeight = window.innerHeight;
    const scrollPosition = appElement.scrollTop;
    const documentHeight = appElement.scrollHeight;
    
    // Use the placeholder to our advantage
    // Get relative position
    const placeholderRect = placeholder.getBoundingClientRect();

    // Calculate how much of the placeholder is in the viewport
    const visibleAmount = Math.max(0, 
        Math.min(
            placeholder.offsetHeight, // max possible
            viewportHeight - placeholderRect.top // actual visible amount
        )
    );

    // Debugging, check in console to see things change real-time
    // use :style = { transform: `translateY(${...offset..})px`} to apply smooth css translation
    console.log({
        viewportHeight,
        scrollPosition,
        documentHeight,
        placeholderRect,
    });
    console.log('Visible footer:', visibleAmount);
    console.log('Will translate by:', -visibleAmount + 'px');

    socialLinksOffset.value = visibleAmount;
}

onMounted(() => {
    const appElement = document.querySelector('#app');
    if (appElement) {
        appElement.addEventListener('scroll', updateSocialLinksPosition);
        window.addEventListener('resize', updateSocialLinksPosition);
        updateSocialLinksPosition();
    }
    
})

onUnmounted(() => {
    const appElement = document.querySelector('#app');
    if (appElement) {
        appElement.removeEventListener('scroll', updateSocialLinksPosition);
        window.removeEventListener('resize', updateSocialLinksPosition);
    }
})
</script>

<template>
    <SpeedInsights/>
    <div class="flex flex-col relative min-h-[90vh] justify-center">
        <section class="flex items-center justify-center relative mx-auto w-full mt-[-12rem]">
            <!-- Left: Text Column -->
            <div class="w-full lg:w-1/2 flex flex-col items-center">
                <div class="px-5 lg:px-20">
                    <div class="relative flex items-center gap-6">
                        <div class="relative group w-auto">
                            <img src="/src/assets/manfromthefog.jpg" alt="Profile" class="w-32 h-32 object-cover rounded-full border-4 border-[#93c4c6] transition duration-300 polaroid"/>
                            <span class="absolute -bottom-1 -right-1 text-4xl shake-hover">👋</span>
                        </div>
                        <div>
                            <h1 class="2xl:text-5xl md:text-4xl text-3xl font-normal mb-2">Man From The Fog</h1>
                            <h3 class="text-3xl font-normal mb-2">(aka. Qinkai Li)</h3>
                        </div>
                    </div>
                    <div class="w-full h-[1px] bg-gray-300 mt-[1.5rem] mb-4"></div>
                    <div class="order-2 flex flex-col items-start gap-4 text-md">
                        <!-- Introduction -->
                        <div class="flex flex-col gap-3">
                            <p class="inline">
                            I'm a first year studying    <InlineEntry :logo="waterloologo" color="yellow" href="https://uwaterloo.ca/future-students/programs/software-engineering">Software Engineering</InlineEntry> at the University of Waterloo. I'm an engineer, but also a visionary and advocate.
                            </p>
                            <p class="inline">
                            In high school, I led three organizations and played an executive role in many others. I became interested in developing web solutions in the process.
                            </p>
                            <p class="inline">
                            I developed an interest in the natural sciences through the IB Diploma, and I aim to continue applying software engineering principles to scientific research in the future.
                            </p>
                            <p class="inline">
                            In my free time, I write poetry and play basketball!
                            </p>
                        </div>
                        <!-- Social Media Links -->
                        <div class="fixed top-[35%] left-8 z-50 items-start hidden lg:flex flex-col gap-10 social-links-transform" :style="{ transform: `translateY(-${socialLinksOffset}px)` }">
                            <ContactEntry v-for="link in contactinfo" :key="link.href" :src="link.src" :alt="link.alt" :href="link.href"/>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    </div>
</template>

<style scoped>
@keyframes shake {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-15deg); }
    75% { transform: rotate(15deg); }
}

.social-links-transform {
    transition: transform 0.8s cubic-bezier(0.01, 0.01, 0.01, 1);
}

.shake-hover {
    display: inline-block;
    transition: transform 0.3s ease-in-out;
}

.group:hover .shake-hover {
    animation: shake 0.5s ease-in-out 2;
}
</style>
