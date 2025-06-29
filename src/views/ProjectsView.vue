<script setup>
import { h, ref } from 'vue'
import InlineLogoLink from '../components/InlineLogoLink.vue'
import TimelineEntry from '../components/TimelineEntry.vue'
import ProjectCard from '../components/ProjectCard.vue'

const activeSkills = ref(new Set())
function toggleSkill(skillAlt) {
  if (activeSkills.value.has(skillAlt)) {
    activeSkills.value.delete(skillAlt)
  } else {
    activeSkills.value.add(skillAlt)
  }
}

import JavaLogo from '../assets/logos/stack/java.png'
import JupyterLogo from '../assets/logos/stack/jupyter.png'
import VoltaLogo from '../assets/logos/stack/volta.png'
import PythonLogo from '../assets/logos/stack/python.png'
import JavaScriptLogo from '../assets/logos/stack/javascript.png'
import VueLogo from '../assets/logos/stack/vuejs.png'
import DjangoLogo from '../assets/logos/stack/django.png'
import ReactLogo from '../assets/logos/stack/reactjs.png'
import TailwindLogo from '../assets/logos/stack/tailwind.png'
import BootstrapLogo from '../assets/logos/stack/bootstrap.png'
import CSharpLogo from '../assets/logos/stack/csharp.png'
import UnityLogo from '../assets/logos/stack/unity.png'

const skills = [
  { src: JavaLogo, alt: 'Java', shadowColor: '#E51F2F' },
  { src: JupyterLogo, alt: 'Jupyter', shadowColor: '#E87125' },
  { src: VoltaLogo, alt: 'Volta', shadowColor: '#eDcf3a' },
  { src: PythonLogo, alt: 'Python', shadowColor: '#F1CA3F' },
  { src: JavaScriptLogo, alt: 'JavaScript', shadowColor: '#EDD619' },
  { src: VueLogo, alt: 'Vue.js', shadowColor: '#42b883' },
  { src: DjangoLogo, alt: 'Django', shadowColor: '#0D4B33' },
  { src: ReactLogo, alt: 'React', shadowColor: '#5CD2F0' },
  { src: TailwindLogo, alt: 'Tailwind', shadowColor: '#33B6EE' },
  { src: BootstrapLogo, alt: 'Bootstrap', shadowColor: '#7A27F0' },
  { src: CSharpLogo, alt: 'C#', shadowColor: '#36128A' },
  { src: UnityLogo, alt: 'Unity', shadowColor: '#1C2834' },
]

import LinkCCLogo from '../assets/logos/linkcc.png'
import TKSLogo from '../assets/logos/tks.png'
import CCCLogo from '../assets/logos/ccc.png'
import UniteLogo from '../assets/logos/unite.png'
import ShadCanadaLogo from '../assets/logos/shadcanada.png'

import Sprint1 from '../assets/events/1/sprint1.jpg'
import Sprint2 from '../assets/events/1/sprint2.jpg'
import Sprint3 from '../assets/events/1/sprint3.jpg'
import Sprint4 from '../assets/events/1/sprint4.jpg'
import Sprint5 from '../assets/events/1/sprint5.jpg'
import Showcase1 from '../assets/events/2/showcase1.jpg'
import Showcase2 from '../assets/events/2/showcase2.jpg'
import Showcase3 from '../assets/events/2/showcase3.jpg'
import Showcase4 from '../assets/events/2/showcase4.jpg'
import Showcase5 from '../assets/events/2/showcase5.jpg'
import IB1 from '../assets/events/3/ib1.jpg'
import IB2 from '../assets/events/3/ib2.jpg'
import IB3 from '../assets/events/3/ib3.jpg'
import IB4 from '../assets/events/3/ib4.jpg'
import IB5 from '../assets/events/3/ib5.jpg'
import Contest1 from '../assets/events/4/contest1.jpg'
import Contest2 from '../assets/events/4/contest2.jpg'
import Contest3 from '../assets/events/4/contest3.jpg'
import Contest4 from '../assets/events/4/contest4.jpg'
import Contest5 from '../assets/events/4/contest5.jpg'
import Disruptors1 from '../assets/events/5/disruptors1.jpg'
import Disruptors2 from '../assets/events/5/disruptors2.jpg'
import Disruptors3 from '../assets/events/5/disruptors3.jpg'
import Disruptors4 from '../assets/events/5/disruptors4.jpg'
import Disruptors5 from '../assets/events/5/disruptors5.jpg'
import TKS1 from '../assets/events/6/tks1.jpg'
import TKS2 from '../assets/events/6/tks2.jpg'
import TKS3 from '../assets/events/6/tks3.jpg'
import TKS4 from '../assets/events/6/tks4.jpg'
import TKS5 from '../assets/events/6/tks5.jpg'
import Shad1 from '../assets/events/7/shad1.jpg'
import Shad2 from '../assets/events/7/shad2.jpg'
import Shad3 from '../assets/events/7/shad3.jpg'
import Shad4 from '../assets/events/7/shad4.jpg'
import Shad5 from '../assets/events/7/shad5.jpg'
import Youth1 from '../assets/events/8/youth1.jpg'
import Youth2 from '../assets/events/8/youth2.jpg'
import Youth3 from '../assets/events/8/youth3.jpg'
import Youth4 from '../assets/events/8/youth4.jpg'
import Youth5 from '../assets/events/8/youth5.jpg'  
const timelineEntries = ref([
  {
    time: 'June 15, 2025',
    event: 'LinkCC Autonomous Vehicle Sprint',
    description: () => h('span', [
      "I played an executive role alongside ", h(InlineLogoLink, {logo: LinkCCLogo, color: 'yellow', href: 'https://linkcc.ca/'}, { default: () => 'LinkCC Youth Society' })," in this event where we introduced participants to the art of presentation and how to effective communicate ideas. The facility experienced a blackout but we were able to adapt in the dark and successfully complete the event.",
    ]),
    images: [
      Sprint1,
      Sprint2,
      Sprint3,
      Sprint4,
      Sprint5,
    ],
  },
  {
    time: 'June 7, 2025',
    event: 'TKS 2024-2025 Showcase',
    description: () => "Incredibly grateful to be a presenter at the TKS 2024-2025 Showcase. There were many incredible ideas, but even more incredible people who made their ideas a reality. I presented my project on magnetohydrodynamic models for fast neutron molten salt reactors. I was also able to hear from some of the leaders in the Calgary tech industry (eg. the mayor of Calgary).",
    images: [
      Showcase1,
      Showcase2,
      Showcase3,
      Showcase4,
      Showcase5,
    ],
  },
  {
    time: 'May 5-21, 2025',
    event: 'International Baccalaureate Exams',
    description: () => "I don't know what happened in these past three years. I think my IB coordinator has a good metaphor for IB. Don't look at the mountain, and just climb. Once you're over, you'll be shocked at yourself for making it through.",
    images: [
      IB1,
      IB2,
      IB3,
      IB4,
      IB5,
    ],
  },
  {
    time: 'October 27, 2024',
    event: '2024 Curiosity Contest',
    description: () =>
    h('span', [
      "I co-founded and led the nonprofit ", h(InlineLogoLink, {logo: CCCLogo, color: 'white', href: 'https://chinookcuriositycentral.vercel.app'}, { default: () => 'Chinook Curiosity Central' }),". We held the Curiosity Contest in 2024, one of Alberta's largest math events. Check out our results on the CCC website!"
    ]),
    images: [
      Contest1, 
      Contest2,
      Contest3,
      Contest4,
      Contest5,
    ],
  },
  {
    time: 'October 1-2, 2024',
    event: 'Energy Disruptors Unite 2024',
    description: () =>
    h('span', [
      "I attended ", h(InlineLogoLink, {logo: UniteLogo, color: 'purple', href: 'https://www.energydisruptors.com/'}, { default: () => 'Energy Disruptors Unite 2024' }),", the world's most collaborative energy event. Representing TKS, I placed second in the Microsoft Hackathon track. I also had the opportunity to meet with leaders in the energy and innovation sectors. A 10/10 experience!"
    ]),
    images: [
      Disruptors1,
      Disruptors2,
      Disruptors3,
      Disruptors4,
      Disruptors5,
    ],
  },
  {
    time: 'September 1, 2024 - June 1, 2025',
    event: 'TKS Innovate',
    description: () =>
    h('span', [
      "I was a member of ", h(InlineLogoLink, {logo: TKSLogo, color: 'black', href: 'https://tks.world/'}, { default: () => 'The Knowledge Society' }),", a highly competitive youth innovation program. I was a semifinalist for the Microsoft spring challenge. Arguably, TKS was the most transformative experience of my life.",
    ]),
    images: [
      TKS1,
      TKS2,
      TKS3,
      TKS4,
      TKS5,
    ],
  },
  {
    time: 'June 30 - July 1, 2024',
    event: 'Shad Canada 2024',
    description: () =>
    h('span', [
      "I was a fellow at ", h(InlineLogoLink, {logo: ShadCanadaLogo, color: 'blue', href: 'https://shad.ca'}, { default: () => 'Shad Canada' })," held at their York Campus and placed second in the Design-Entrepreneurship challenge. I met some amazing people and had a great time."
    ]),
    images: [
      Shad1,
      Shad2,
      Shad3,
      Shad4,
      Shad5,
    ],
  },
  {
    time: 'August 1-4, 2023',
    event: 'Tomorrow Youth Summer Camps',
    description: () => 'I helped organize the summer camps over the summer of 2022 for immigrant youth. A part of our proceeds went towards the 35th TIES Gala. We organized a second fall camp in November of that year.',
    images: [
      Youth1,
      Youth2,
      Youth3,
      Youth4,
      Youth5,
    ],
  },
]);

import SkylineSurvivalCover from '../assets/projects/skylinesurvival.png'
import PortfolioCover from '../assets/projects/portfolio.png'
import ChinookCuriosityCentralCover from '../assets/projects/chinookcuriositycentral.png'
import BlockedManCover from '../assets/projects/blockedman.png'
import ConnectFourCover from '../assets/projects/connect-four.png'
import ContainmentCover from '../assets/projects/withermancy.png'
import RuralIrrigationCover from '../assets/projects/irrigation.png'
import FarlandsCover from '../assets/projects/farlands.png'

const ProjectList = ref([
  { flipped: false,
    image: SkylineSurvivalCover,
    title: 'Skyline Survival',
    demo: '#',
    repo: 'https://github.com/manfromthefog/skyline-survival',
    skills: ['Unity', 'C#', '.NET',],
    description: "A spin-off of Unity's Battle resource pack. Features a wave counter, smoother movement, new explosive powerups, and new enemies. The project was partially corrupted after a hardware incident, and restoration is ongoing.",
  },
  
  { flipped: false,
    image: PortfolioCover,
    title: 'Personal Website',
    demo: '#',
    repo: 'https://github.com/manfromthefog',
    skills: ['Node.js', 'Vue.js', 'Tailwind CSS'],
    description: 'My portfolio website. Includes my projects, skills, timeline of events, and a mini-blog. Built using Vue3 and Tailwind CSS. The use of v-for signficantly simplified the component structure.',
  },
  { flipped: false,
    image: ChinookCuriosityCentralCover,
    title: 'Chinook Curiosity Central',
    demo: 'https://chinookcuriositycentral.vercel.app',
    repo: 'https://github.com/manfromthefog/chinookcuriositycentral',
    skills: ['HTML5', 'CSS', 'Bootstrap', 'Vercel'],
    description: 'A website rehaul for the nonprofit I co-founded. Used HTML5 + CSS, Javascript, and Bootstrap for responsive design. Middleware hosted on Vercel. Backend updates are pending.',
  },
  { flipped: false,
    image: BlockedManCover,
    title: 'Blocked Man',
    demo: '#',
    repo: 'https://github.com/manfromthefog/blocked-man',
    skills: ['Unity', 'C#', 'WebGL'],
    description: "A fun Unity game built on Skyline Survival's resource pack. You control a sphere in third person and must precisely avoid obstacles to reach the end. Powerups are available! WebGL build is present but not active.",
  },
  { flipped: false,
    image: ConnectFourCover,
    title: 'Connect 4 AI',
    demo: '#',
    repo: 'https://github.com/manfromthefog/Connect-4-AI',
    skills: ['Java', 'Java Swing', 'JPanel', 'MiniMax',],
    description: 'A very basic implementation of the minimax AI algorithm in Connect 4. Graphics powered by Java Swing and JPanel. The AI features adjustable depth and is suprisingly good for its simplicity.',
  },
  
  { flipped: false,
    image: ContainmentCover,
    title: 'Containment',
    demo: '#',
    repo: 'https://github.com/manfromthefog/Containment-1',
    skills: ['Django', 'CSS', 'HTML5'],
    description: 'My first full-stack HTML5 web application, featuring a form, basic CSS, Django middleware and a SQL database powered by a not-so-legal third party API (a bit of hacking was necessary). Hence, I shut the app down.',
  },
  { flipped: false,
    image: RuralIrrigationCover,
    title: 'Rural Irrigation',
    demo: '#',
    repo: 'https://github.com/manfromthefog/Rural-Irrigation',
    skills: ['Python',],
    description: "A Python program for monitoring irrigation progress for water-deficient areas. It uses a simple GUI to display the complete status of the irrigation system. It won first place in 2024 I/O Labs Hack for Humanity Hackathon.",
  },
  { flipped: false,
    image: FarlandsCover,
    title: 'Limitless: A Farlands Story',
    demo: '#',
    repo: '#',
    skills: ['Forge API', 'C++',],
    description: 'A minecraft horror mod / ARG loosely inspired by the Far Land Anomaly and the Backrooms. Features a new procedurally generated dimension. The lore extends beyond the mod itself. The project is pending for development.',
  },
]);

function flipCard(index) {
  ProjectList.value[index].flipped = !ProjectList.value[index].flipped;
}

function flipAll(state) {
  ProjectList.value.forEach(project => {
    project.flipped = state;
  });
}
</script>

<template>
  <div>
  <div class="w-[70%] mx-auto flex flex-col gap-16 min-h-[calc(100vh-120px)]">
    <!-- 🔷 Skill Tags (Above Projects) -->
    <section class="w-full">
      <h1 class="text-6xl font-normal mb-10">My Stack</h1>
      <!--  -->
      <div class="grid grid-cols-10 gap-12 justify-start">
        <div v-for="skill in skills" :key="skill.alt" class="flex flex-col gap-2 group">
          <div class="cursor-box cursor-pointer rounded-md flex items-center justify-center h-full w-full transition-transform duration-300"
            :class="{ 'active-glow': activeSkills.has(skill.alt) }"
            @click="toggleSkill(skill.alt)"
            :style="{'--shadow-color': skill.shadowColor}">
            <img :src="skill.src" :alt="skill.alt" class="h-auto w-[70%] py-2" />
          </div>
          <p class="text-sm text-center text-gray-800 font-medium">{{ skill.alt }}</p>
        </div>
      </div>
    </section>
    <!-- 🔷 Projects Section -->
    <section class="mb-24">
      <h1 class="text-6xl font-normal mb-8">Projects</h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProjectCard
          v-for="(project, index) in ProjectList"
          :key="index"
          :project="project"
          @flip="flipCard(index)"
          class=" transition duration-300">
        </ProjectCard>
      </div>
    </section>
  </div>
  <div class="w-[90%] bg-gray-400 h-[1px] mx-auto"></div>
  <section class="w-full pt-[5rem] pb-10 px-4 md:px-32 z-3">
    <h1 class="text-5xl font-bold mb-10">Timeline</h1>
    <div class="flex flex-col items-start">
      <TimelineEntry
        v-for="(entry, id) in timelineEntries"
        :key="id"
        :timeline="entry"
        class="mb-7"
        style="opacity: 1; transform: none;">
        <template #description>
          <component :is="entry.description" />
        </template>
      </TimelineEntry>
    </div>
  </section>
  </div> 
</template>

<style scoped>
.cursor-box {
  position: relative;
  transition: all 0.3s ease;
  background: linear-gradient(145deg, #f2f2f2, #e6e6e6);
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
}

.active-glow, .cursor-box:hover {
  transform: scale(1.05);
  box-shadow:
    0 0 10px rgb(231, 231, 231),
    0 0 20px var(--shadow-color) !important;
}

.cursor-box::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: -100%;
  background: linear-gradient(60deg, transparent, rgba(0, 0, 0, 0.06), transparent);
  transform: translateX(0%);
  transition: transform 0.5s ease;
}

.cursor-box:hover::before {
  transform: translateX(100%);
}

</style>
