<template>
  <div class="footer-container">
    <footer class="main-footer">
      <div class="footer-content mx-auto">
        <div class="footer-left">
          <img src="/src/assets/manfromthefog.jpg" alt="Company Logo" class="footer-logo w- polaroid-inversion rounded-3xl">
          <ul>
            <li v-for="contact in contacts" :key="contact.type">
              <a :href="contact.link" target="_blank" class="group relative inline-flex items-center transition duration-300 gap-0.5 px-1" data-hover-color="purple">
                <img class="mr-1 h-3 w-auto duration-200 inversion" :src="contact.icon">
                <p class="z-40 text-white text-opacity-100">{{ contact.text }}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-right border-l-4 border-white">
          <div class="ms-5">
            <div class="top-row mb-[20px]">
              <div class="footer-nav mb-3">
                <router-link to="/" class="nav-link">Home</router-link>
                <router-link to="/projects" class="nav-link">Projects</router-link>
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </div>
              <div class="footer-nav">
                <a v-for="icon in socialIcons" :key="icon.href + icon.src" :href="icon.href" target="_blank"><img :src="icon.src" :alt="icon.alt" class="github-icon w-[24px] h-[24px] inversion"></a>
              </div>
            </div>
            <div class="border-y-2 border-white py-3 flex items-center">
              <a href="https://se-webring.xyz/" target="_blank" class="group relative inline-flex items-center transition duration-300 gap-0.5 px-1" data-hover-color="purple">
                <img class="mr-1 h-10 w-auto inversion " src="/src/assets/icons/webring.svg">
                <p>University of Waterloo Software Engineering Webring</p>
              </a>
            </div>
            <div class="mt-[20px]">
              <p class="text-sm">Copyright © 2025 Man From The Fog. Some rights reserved.</p>
              <p class="text-sm">Contents distributed under CC BY-SA 4.0.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const contacts = [
  {
    type: 'phone',
    link: 'tel:+1(403) 202-1058',
    icon: '/src/assets/icons/phone.svg',
    text: '(403) 202-1058'
  },
  {
    type: 'email',
    link: 'mailto:infinityscrub74@gmail.com',
    icon: '/src/assets/icons/email.svg',
    text: 'infinityscrub74@gmail.com'
  },
  {
    type: 'location',
    link: 'https://maps.app.goo.gl/Rg2KRVFbeasfGSmz6',
    icon: '/src/assets/icons/location.svg',
    text: '290 Westmount Rd N, Waterloo, ON N2L 3G3'
  }
]

const socialIcons = [
  { href: 'https://www.linkedin.com/in/qinkai-li-40198b31a/', src: '/src/assets/icons/linkedin.svg', alt: 'GitHub' },
  { href: 'https://github.com/manfromthefog', src: '/src/assets/icons/github.svg', alt: 'GitHub' },
  { href: 'https://www.youtube.com/@thepropertytheygiveyou', src: '/src/assets/icons/youtube.svg', alt: 'GitHub' },
  { href: 'https://www.instagram.com/kailiovermind0112/', src: '/src/assets/icons/instagram.svg', alt: 'GitHub' },
]
</script>

<style scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}
.main-footer {
  width: 100%;
  min-height: 200px;
  padding: 40px 0;
  background-color: #000000; /* Dark background for the overall footer */
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
}
.footer-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Stretch items to fill height */
  padding: 0;
  flex-wrap: wrap;
}
.footer-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 300px;
  padding: 20px;
  box-sizing: border-box;
}
.footer-logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 20px;
}
.footer-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute space vertically */
  flex: 2; /* Take more space */
  min-width: 400px;
  padding: 20px;
  box-sizing: border-box;
}
.footer-nav {
  display: flex;
  gap: 20px;
  align-items: center;
}
.nav-link {
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
}
.theme-toggle {
  display: flex;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}
.theme-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  filter: invert(0);
}
.alumni-text {
  font-size: 1rem;
  margin-bottom: 20px;
}
.contact-info p {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .footer-left,
  .footer-right {
    align-items: center;
    text-align: center;
    min-width: unset;
    width: 100%;
  }
  .footer-logo {
    margin-bottom: 20px;
  }
  .contact-info,
  .social-links {
    margin-top: 20px;
  }
  .top-row {
    flex-direction: column;
    gap: 20px;
  }
  .footer-nav {
    flex-direction: column;
    gap: 10px;
  }
}
</style>