<script setup>
import SocialLink from '../components/SocialLink.vue';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import instagramIcon from '../assets/icons/instagram.svg';

const socialLinks = [
  { src: linkedinIcon, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/qinkai-li-40198b31a/' },
  { src: githubIcon, alt: 'GitHub', href: 'https://github.com/kailiovermind-2314' },
  { src: youtubeIcon, alt: 'YouTube', href: 'https://www.youtube.com/@thepropertytheygiveyou' },
  { src: instagramIcon, alt: 'Instagram', href: 'https://www.instagram.com/kailiovermind0112/' },
];

</script>

<template>
  <div class="flex flex-col relative ">
    <section class="flex items-start justify-center relative mx-auto w-full mt-5">
      <div class="flex flex-col md:flex-row w-full items-center">
        <!-- Left: Text Column -->
        <div class="w-full md:w-1/2 flex flex-col items-start">
          <div class="px-4 md:pl-32 md:pr-4">
            <div class="relative flex items-center gap-6">
              <div class="relative group">
                <img
                  src="/src/assets/manfromthefog.jpg"
                  alt="Profile"
                  class="w-32 h-32 object-cover rounded-full border-4 border-[#495f60] transition duration-300 polaroid"
                />
                <span class="absolute -bottom-1 -right-1 text-4xl shake-hover">
                  👋
                </span>
              </div>
              <div>
                <h1 class="text-6xl font-normal mb-2">Man From The Fog</h1>
                <h3 class="text-4xl font-normal mb-2">(aka. Qinkai Li)</h3>
              </div>
            </div>
            <div class="w-full h-[1px] bg-gray-300 mt-[1.5rem] mb-4"></div>
            <div class="order-2 flex flex-col items-start gap-4 text-lg">
              <!-- Introduction -->
              <div class="flex flex-col gap-3 ">
                <p class="inline">
                  I'm an incoming first year intending to study <a class="inline-link" href="https://uwaterloo.ca/future-students/programs/software-engineering" target="_blank" data-hover-color="yellow">Software Engineering</a> at the <span class="font-semibold">University of Waterloo</span>. I'm an engineer, but I'm also a visionary and advocate.
                </p>
                <p class="inline">
                  In high school, I was the lead executive for three organizations and played an executive role in countless others. Through the process I became interested in developing web solutions. In my senior years, I developed a passion for the natural sciences through the <span class="font-semibold">International Baccalaureate (IB) Diploma program.</span>
                </p>
                <p class="inline">
                  I focused on applying my programming skills to model natural phenomena and developed a keen interest in modeling low-altitude ion propulsion systems. Developing solutions to real-world problems is what software engineering means to me.  
                </p>
                <p class="inline">
                  In my free time, I write poetry and play basketball!
                </p>
              </div>
              <!-- Social Media Links -->
              <div class="flex justify-around w-full mt-10">
                <SocialLink
                  v-for="link in socialLinks"
                  :key="link.href"
                  :src="link.src"
                  :alt="link.alt"
                  :href="link.href"
                />
              </div>
            </div>
          </div>  
        </div>
        <!-- Right: Image Block -->
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div class="relative group flex justify-center w-full">
            <img
              src="/src/assets/scenery.jpg"
              alt="Profile"
              class="w-[700px] h-[650px] object-cover rounded-xl polaroid"
            />
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

.shake-hover {
  display: inline-block;
  transition: transform 0.3s ease-in-out;
}

.group:hover .shake-hover {
  animation: shake 0.5s ease-in-out 2;
}
</style>
