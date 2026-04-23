<template>
<div class="mx-4 md:mx-20 justify-center grid grid-cols-12 gap-2.5 lg:gap-y-6 md:gap-y-3 sm:gap-y-1 ">
  <div class="col-start-1 col-span-12">
    <h3 class="text-base sm:text-xl max-[640px]:text-lg max-[500px]:text-base max-[450px]:text-sm max-[351px]:text-xs xl:text-3xl max-[900px]:text-2xl font-[Biorhyme_Expanded] text-white animate-slide-right">
      <span class="text-red-500">W</span>ELCOME TO
    </h3>
  </div>

  <div class="col-span-12 font-[Biorhyme_Expanded] text-white text-center
              text-2xl sm:text-4xl max-[640px]:text-3xl max-[500px]:text-2xl max-[450px]:text-xl max-[351px]:text-lg max-[900px]:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
    <div class="relative inline-block whitespace-nowrap">
      <span class="invisible" aria-hidden="true">GERGŐ PINTÉR'S</span>
      <RouterLink to="/about" id="name" class="absolute inset-0 transition cursor-pointer"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <span
          v-for="(ch, index) in displayed"
          :key="index"
          class="transition-colors duration-300"
          :class="ch.red || isHovered ? 'text-red-500' : 'text-white'"
        >{{ ch.char }}</span>
      </RouterLink>
    </div>
  </div>

  <div class="xl:col-start-9 col-start-10 max-[1161px]:col-start-9 max-[654px]:col-start-8 max-[500px]:col-start-7 max-[360px]:col-start-6 max-[1161px]:ml-17 max-[1115px]:ml-12 max-[900px]:ml-6 max-[840px]:ml-2 max-[800px]:ml-0 max-[654px]:ml-10 max-[1035px]:ml-6 max-[974px]:ml-2 max-[929px]:ml-0 max-[580px]:ml-6 max-[536px]:ml-2 max-[500px]:ml-12 max-[466px]:ml-8 max-[430px]:ml-4 max-[360px]:ml-10 max-[351px]:ml-12 max-[331px]:ml-10 col-span-4 min-[1210px]:ml-3 xl:ml-13">
    <h3 class="text-base sm:text-xl max-[640px]:text-lg max-[500px]:text-base max-[450px]:text-sm max-[351px]:text-xs max-[900px]:text-2xl xl:text-3xl font-[Biorhyme_Expanded] text-white animate-slide-right">
      <span class="text-red-500">P</span>ORTFOLIO
    </h3>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isHovered = ref(false)

const chars = [
  { char: 'G', red: true },
  { char: 'E', red: false },
  { char: 'R', red: false },
  { char: 'G', red: false },
  { char: 'Ő', red: false },
  { char: ' ', red: false },
  { char: 'P', red: true },
  { char: 'I', red: false },
  { char: 'N', red: false },
  { char: 'T', red: false },
  { char: 'É', red: false },
  { char: 'R', red: false },
  { char: "'", red: false },
  { char: 'S', red: false }
]

const displayed = ref([])
const running = ref(false)
let timer = null

onMounted(() => {
  let i = 0
  function step() {
    if (i < chars.length) {
      displayed.value.push(chars[i])
      i++
      timer = setTimeout(step, 70)
    }
  }
  step()
})

onUnmounted(() => clearTimeout(timer))
</script>

<style scoped>
    @keyframes slide-right {
  from {
    opacity: 0;
    transform: translateX(-24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-right {
  opacity: 0;
  animation: slide-right 1s ease forwards;
}
</style>