<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <div class="bg-black bg-[radial-gradient(circle,#444_1px,transparent_4px)] bg-size-[80px_80px] min-h-screen">
    <header class="sticky top-0 z-1000">
      <nav>
        <div>
          <div class="place-self-center z-100 relative">
            
            <button 
              @click="isOpen = !isOpen"
              @mouseenter="isOpen = true"
              @mouseleave="isOpen = false"
              class="relative lg:w-85 md:w-70 sm:w-60 w-50 bg-white text-black font-[BitCount] lg:text-[36px] md:text-[32px] sm:text-[28px] text-[24px] mt-5 rounded-lg cursor-pointer" 
              :class="isOpen ? 'rounded-b-none' : 'rounded-lg'">
              Find Out More
              <div 
                class="absolute top-full right-0 flex flex-col bg-white rounded-b-lg lg:w-85 md:w-70 sm:w-60 w-50 overflow-hidden transition-all duration-300 ease-in-out"
                :class="isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'">
                <RouterLink class="transition duration-200 hover:text-red-500" to="/">Home</RouterLink>
                <RouterLink class="transition duration-200 hover:text-red-500" to="/about">About</RouterLink>
                <RouterLink class="transition duration-200 hover:text-red-500" to="/works">My Works</RouterLink>
                <a href="public/cv.pdf" download class="transition duration-200 hover:text-red-500">Download CV</a>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <RouterView />
  </div>

  <footer class="h-25 bg-black">
    <div class="flex flex-row items-center justify-center h-full">
      <a class="flex flex-row items-center text-xl font-[Bitcount] mr-10" href="https://www.linkedin.com/in/gergő-pintér"><img class="h-5 w-5 mr-2 grayscale hover:grayscale-0" src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt=""><span class="leading-none translate-y-0.5 max-sm:hidden">LinkedIn</span></a>
      <a class="flex flex-row items-center text-xl font-[Bitcount] mr-10" href="mailto:gerpin01@easv365.dk"><img class="h-7 w-7 mr-2 grayscale hover:grayscale-0" src="https://upload.wikimedia.org/wikipedia/commons/8/81/Email_new.svg" alt=""><span class="leading-none translate-y-0.5 max-sm:hidden">Email</span></a>
      <a class="flex flex-row items-center text-xl font-[Bitcount]" href="tel:+4524821004"><img class="h-4.5 w-4.5 mr-2 grayscale hover:grayscale-0" src="https://upload.wikimedia.org/wikipedia/commons/d/db/Pictograms-nps-emergency_telephone-2.svg" alt=""><span class="leading-none translate-y-0.5 max-sm:hidden">Phone</span></a>
    </div>
  </footer>
</template> 

<style scoped>

</style>
