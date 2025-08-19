    <script setup>
    import { watch, onUnmounted } from 'vue'

    const props = defineProps({
        show: Boolean,
        title: String,
        date: String,
    })
    const emit = defineEmits(['close'])

    watch(() => props.show, (val) => {
        document.body.style.overflow = val ? 'hidden' : ''
    })
    onUnmounted(() => {
        document.body.style.overflow = ''
    })
    </script>

    <template>
        <transition name="fade-down">
            <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center">
                <!-- Backdrop -->
                <div class="fixed inset-0 bg-black/25 backdrop-blur-xs" @click.self="$emit('close')"></div>

                <!-- Modal Container -->
                <div class="relative backdrop-blur-xl w-[50%] h-auto rounded-lg shadow-lg z-10 overflow-hidden flex flex-col">
                    <!-- Sticky Header -->
                    <div class="sticky top-0 flex justify-between items-center px-6 py-4 border-b z-20">
                        <div class="w-full">
                            <h2 class="text-2xl font-bold leading-tight">{{ title }}</h2>
                            <p class="text-sm text-gray-200 mt-1">{{ date }}</p>
                        </div>
                        <button @click="$emit('close')" class="text-xl font-bold ml-4 bg-transparent" style="outline: none;" aria-label="Close">
                            <img src="/src/assets/icons/close.svg" alt="Close" class="w-6 h-6">
                        </button>
                    </div>

                    <!-- Content Area -->
                    <div class="p-6">
                        <slot/>
                    </div>
                </div>
            </div>
        </transition>
    </template>

    <style scoped>
    .fade-down-enter-active {
        animation: fadeDown 0.4s ease-out;
    }
    .fade-down-leave-active {
        animation: fadeDown 0.3s ease-in reverse;
    }
    @keyframes fadeDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    </style>
