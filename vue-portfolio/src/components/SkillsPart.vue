<template>
  <div class="md:mx-20 mx-4 my-15" ref="containerRef">
    <h2 class="md:text-3xl text-2xl font-[Biorhyme_Expanded] text-white my-15 text-center md:text-left">
      <span class="text-red-500">M</span>y <span class="text-red-500">S</span>kills
    </h2>

    <div class="grid lg:grid-cols-10 gap-2.5 grid-cols-5">
      <div v-for="(skill, index) in skills" :key="skill.id" class="relative aspect-square bg-white rounded-sm flex items-center justify-center group cursor-pointer col-span-1" :class="{ 'in-view': isVisible }" :style="{ '--i': index }" @click="togglePopup(skill.id)" @mouseleave="closeIfNotClicked(skill.id)">
        <img :src="skill.logo" :alt="skill.title" class="w-3/4 h-3/4 object-contain grayscale hover:grayscale-0 transition duration-300"/>

        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-[#1a0505] border border-red-900 text-white px-4 py-3 rounded shadow-lg w-40 text-center pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-10" :class="activeSkill === skill.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 group-hover:opacity-100'">
          <div class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-red-900"></div>
          <p class="text-sm font-semibold mb-2 text-red-400">{{ skill.title }}</p>
          <RouterLink to="/works" class="inline-block bg-red-700 hover:bg-red-600 text-white text-xs font-bold px-3 py-1 rounded transition-colors duration-150">
            Projects
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useSkills } from './modules/useSkils'

const { skills } = useSkills()

const containerRef = ref(null)
const isVisible = ref(false)
const activeSkill = ref(null)
let observer = null

function togglePopup(id) {
  activeSkill.value = activeSkill.value === id ? null : id
}

function closeIfNotClicked(id) {
  if (activeSkill.value === id) return
}

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
  .relative { opacity: 0; transition: opacity 0.4s ease calc(var(--i) * 0.05s); }
  .in-view  { opacity: 1; }
</style>