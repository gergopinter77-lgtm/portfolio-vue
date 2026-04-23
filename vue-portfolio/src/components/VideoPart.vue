<template>
    <div class="md:grid grid-cols-12 gap-2.5 md:mx-20 mx-4 mt-15 flex flex-col" ref="containerRef">
        <div class="relative cols-staart-1 col-span-12"
            :class="{ 'in-view' : isVisible }"
            :style="{ '--i': 0 }"
            >
            <h3 class="text-white font-[Biorhyme_Expanded] text-3xl">
                <span class="text-red-500 ">M</span>y <span class="text-red-500">V</span>ideo <span class="text-red-500 ">C</span>V
            </h3>
        </div>
        <iframe src="https://www.youtube.com/embed/Gjk-3yKxGuY" frameborder="0" title="YouTube video player" class="col-start-3 col-span-8 w-full h-96.5 my-12 grayscale hover:grayscale-0 duration-300"></iframe>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    const containerRef = ref(null)
    const isVisible = ref(false)
    let observer = null

    onMounted(() => {
        observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    isVisible.value = true
                    observer.disconnect()
                }
            },
            { threshold: 0.2}
        )
        if (containerRef.value) observer.observe(containerRef.value)
    })

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
    .relative { opacity: 0; transition: opacity 0.4s ease calc(var(--i) * 0.05s); }
    .in-view  { opacity: 1; }
</style>