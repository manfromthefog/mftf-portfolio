<script setup>
import { ref } from 'vue'
import BlogModal from '../components/BlogModal.vue'
import Content1 from '../components/Posts/OutOut-.vue'
import Content2 from '../components/Posts/Lost.vue'
import Content3 from '../components/Posts/Knowledge.vue'
import Content4 from '../components/Posts/Shad.vue'

const activeModal = ref(null)
const showQuoteModal = ref(false)
const showContactModal = ref(false)

const blogPosts = [
  {
    id: "post1",
    date: 'August 4, 2025',
    title: 'Out, out –',
    summary: "Life's but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more. I really hope I'm not the only one who feels like life is stagnating. Deep down, I know this isn't how life is meant to be.",
    component: Content1,
  },
  {
    id: "post2",
    date: 'June 28, 2025',
    title: 'The Lost Generation?',
    summary: "Three years - and I'm a bit lost. Looking back, I feel like I lost a lot of what other people considered normal for a person my age. I'm not sure if it's just who I am, but sacrifices were made, and I'm not sure if I regret them.",
    content: "Hello2",
    component: Content2,
  },
  {
    id: "post3",
    date: 'June 7, 2024',
    title: 'Collective Knowledge',
    summary: "I can't see the future. I often think that life is so short, meaning I can't experience futuristic technologies, but again, who said I can't create them myself? And I'm blessed that other people are thinking the same.",
    content: "Hello3",
    component: Content3,
  },
  {
    id: "post4",
    date: 'July 27, 2024',
    title: 'Shad Canada',
    summary: "The greatest moments are often the ones we don't expect. The ones we look dearly upon in retrospect. Nothing ever happens twice, but I'm grateful that there are things which can take me back by surprise and make me feel alive.",
    content: "Hello4",
    component: Content4,
  },
]
</script>

<template>
  <div class="min-h-[120vh] mt-12">
    <div class="w-[70%] pb-[5%] mx-auto">
      <h1 class="text-6xl font-bold mb-4">The Fog</h1>
      <h5 class="italic mb-8">oh look, you found it. you really found it.</h5>
      <div class="flex flex-col sm:flex-row justify-start gap-5 items-center mb-8">
        <button class="bg-white border border-black rounded-md py-2 w-[300px] text-black hover:text-gray-700 transition duration-300" @click="showQuoteModal = true">
          Quote of the Day
        </button>
        <button class="bg-white border border-black rounded-md py-2 w-[300px] text-black hover:text-gray-700 transition duration-300"
        @click="showContactModal = true">
          Contact Me
        </button>
      </div>
      <div class="border-y-2 border-gray-200">
        <div v-for="(post, i) in blogPosts" :key="i" @click="activeModal = post.id" class="flex flex-col items-center sm:flex-row sm:items-center py-2 hover:bg-[#E5E7EB] transition cursor-pointer">
          <!-- Date -->
          <div class="sm:w-[25%] text-md font-medium text-gray-500 mb-2 sm:mb-0 ps-5">
            {{ post.date }}
          </div>

          <!-- Title -->
          <div class="sm:w-[35%]">
            <h2 class="text-base font-semibold underline underline-offset-4 decoration-gray-600">{{ post.title }}</h2>
          </div>

          <!-- Summary -->
          <div class="sm:w-[65%] text-md font-medium text-gray-500 pe-5 text-compressed">
            <p class="mt-2">{{ post.summary }}</p>
          </div>
        </div>
      </div>

      <BlogModal v-for="post in blogPosts" 
        :key="'modal-' + post.id"
        :show="activeModal === post.id"
        :title="post.title"
        :date="post.date"
        @close="activeModal = null">
        <component :is="post.component" />
      </BlogModal>

      <BlogModal :show="showQuoteModal" title="Quote of the Day" date="— Marianne Moore" @close="showQuoteModal = false">
        <div class="w-3/4 mx-auto my-6 border-l-2 border-black">
          <div class="ps-10 text-8xl">“</div>
          <p class="ps-10 text-2xl -translate-y-8">
            "Diversity, controversy; tolerance" — in that "citadel of learning" we have a fort that ought to armor us well.
            Blessed is the man who “takes the risk of a decision” — asks himself the question:
            “Would it solve the problem? Is it right as I see it? Is it in the best interests of all?"
          </p>
          <p class="ps-20 -translate-y-4">
            &mdash; <span class="italic">Blessed is the Man</span>
          </p>
        </div>
      </BlogModal>

      <BlogModal :show="showContactModal" title="Contact Me!" date="" @close="showContactModal = false">
        <form action="https://getform.io/f/avrydgwa" method="POST">
            <label for="name">Name</label>
            <input type="text" id="name" name="fullname" placeholder="Your name..." required>

            <label for="emailaddress">Email</label>
            <input type="email" id="emailaddress" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" size="30" placeholder="@youremail.com" required/>

            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Regarding the current geopolitical state of the world..." style="height:200px"></textarea>

            <input type="submit" value="Submit" id="submit-button">
        </form>
      </BlogModal>
    </div>
  </div>
</template>

<style scoped>
.text-compressed {
  letter-spacing: -0.5px;
}

input, select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 6px 0 16px 0;
  resize: vertical;
  outline: none;
  box-sizing: border-box;
}

#submit-button {
  background-color: #82c5e5;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease
}

#submit-button:hover {
  background-color: #39a9dc;
}
input:invalid {
  box-shadow: 0 0 5px 1px #39a9dc;
}

input:focus:invalid {
  box-shadow: none;
}
</style>
