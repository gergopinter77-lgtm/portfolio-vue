<template>
    <div ref="containerRef" class="flex w-full items-center flex-col">
        <template v-for="(item, index) in links" :key="item.label">
            <a v-if="item.download" :href="item.to" download class="menu-item text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl justify-self-center font-[BitCount] mb-15 last:mb-0 transition duration-200 hover:text-red-500 opacity-0" :style="{ '--i': index }" :class="{ 'in-view': isVisible }">
                <span class="text-red-500">{{ item.label[0] }}</span>{{ item.label.slice(1) }}
            </a>
            <RouterLink v-else :to="item.to" class="menu-item text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl justify-self-center font-[BitCount] mb-15 last:mb-0 transition duration-200 hover:text-red-500 opacity-0" :style="{ '--i': index }" :class="{ 'in-view': isVisible }">
                <span class="text-red-500">{{ item.label[0] }}</span>{{ item.label.slice(1) }}
            </RouterLink>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref(null)
const isVisible = ref(false)
let observer = null

const links = [
  { to: 'about', label: 'About Me' },
  { to: 'about', label: 'My Works' },
  { to: 'public/cv.pdf', label: 'Download CV', download: true },
]

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  if (containerRef.value) observer.observe(containerRef.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.menu-item.in-view {
  animation: slide-up 0.6s ease forwards;
  animation-delay: calc(var(--i) * 150ms);
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>