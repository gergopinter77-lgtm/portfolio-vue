<template>
    <div class="grid grid-cols-12 gap-2.5 mx-20 justify-center animate-slide-right">
        <div class="col-start-1 col-span-12 ">
            <h2 class="md:text-3xl text-xl font-[Biorhyme_Expanded] text-white mt-15 mb-6 animate-slide-right text-center md:text-left">
                <span class="text-red-500">A</span>bout <span class="text-red-500">M</span>e
            </h2>
            <p class="text-white font-[Bitcount] text-xl md:text-2xl max-md:text-center animate-slide-right">
                <span class="text-red-500">I</span> am a web developer with a strong focus on creating clean, functional, and user-centered digital experiences. My work is driven by a balance between technical precision and creative thinking, allowing me to build websites that are not only efficient but also intuitive and engaging to use.
                                                      Currently, I am studying Multimedia Design at SEA Esbjerg, where I am developing a broad skill set that spans web development, UX design, visual communication, and digital storytelling. This multidisciplinary approach shapes how I think about projects not just as code, but as complete experiences.
                                                      Alongside development, I have a deep interest in UX, ensuring that every interface I create feels natural and purposeful.
            </p>
        </div>
    </div>
</template>

<script setup>

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