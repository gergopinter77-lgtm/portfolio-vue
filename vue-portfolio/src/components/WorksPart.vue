
<template>
  <div class="grid grid-cols-12 gap-2.5 mx-4 md:mx-20 justify-center">
    <div class="col-start-1 col-span-12 animate-slide-right">
      <h2 class="md:text-3xl text-2xl font-[Biorhyme_Expanded] text-white mt-15 mb-6 text-center md:text-left">
        <span class="text-red-500">M</span>y <span class="text-red-500">P</span>rojects
      </h2>
 
          <div class="grid grid-cols-12 gap-2.5 my-15">
            <div v-for="folder in folders" :key="folder.id" class="col-span-6 md:col-span-3 cursor-pointer group" @click="openFolder(folder)">
          <div class="relative flex flex-col items-center gap-2 p-4 rounded transition-all duration-300 border border-transparent hover:border-red-900/40 hover:bg-white/5">
            <div class="relative w-24 h-20 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:-translate-y-1">

              <div class="absolute top-0 left-0 w-10 h-3 bg-red-800 rounded-tl rounded-tr" style="clip-path: polygon(0 0, 80% 0, 100% 100%, 0 100%);"></div>

              <div class="absolute top-2.5 left-0 w-full h-16 rounded-sm bg-linear-to-br from-red-950/80 to-red-950/40 border border-red-800/35">
                <div class="absolute inset-0 rounded-sm bg-linear-to-b from-red-500/5 to-transparent"></div>
                <div class="absolute bottom-2 left-0 right-0 flex justify-center">
                  <span class="text-red-400/70 font-[Bitcount] text-xs tracking-widest uppercase">{{ folder.type }}</span>
                </div>
              </div>
 
              <div class="absolute top-2.5 left-0 w-full h-16 rounded-sm pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,0,0,0.15)_3px,rgba(0,0,0,0.15)_4px)]"></div>
            </div>
            <span class="text-white font-[Bitcount] text-sm tracking-wide text-center group-hover:text-red-400 transition-colors duration-200">
              {{ folder.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
 

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-150 ease-in"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div v-if="activeFolder" class="col-start-1 col-span-12 mt-4 rounded border bg-red-950/10 border-red-900/40">

        <div class="flex items-center justify-between px-5 py-3 border-b border-red-900/25">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-red-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>
            </svg>
            <span class="text-red-400 font-[Bitcount] text-sm tracking-wide">{{ activeFolder.name }}</span>
            <span class="text-red-900/40 font-[Bitcount] text-xs">— {{ activeFolder.projects.length }} projects</span>
          </div>
          <button
            @click="closeFolder" class="text-red-900/50 hover:text-red-400 transition-colors font-[Bitcount] text-xs px-2 py-0.5 border border-red-900/30 hover:border-red-700/50 rounded">
              close ✕
          </button>
        </div>
 

        <div class="grid grid-cols-12 gap-2.5 p-5">
          <div v-for="project in activeFolder.projects" :key="project.id" class="col-span-6 md:col-span-3 group/proj flex items-center gap-3 p-3 rounded border border-transparent hover:border-red-900/30 hover:bg-red-900/10 cursor-pointer transition-all duration-150" @click="openProject(project)">
            <svg viewBox="0 0 48 56" class="w-8 h-10 shrink-0" fill="none">
              <path d="M8 0h22l12 12v44H8V0z" fill="#1a0808" stroke="rgba(185,28,28,0.5)" stroke-width="1"/>
              <path d="M30 0l12 12H30V0z" fill="#2d0f0f" stroke="rgba(185,28,28,0.4)" stroke-width="0.5"/>
              <rect x="8" y="30" width="32" height="10" rx="1" :fill="project.tagColor" opacity="0.85"/>
              <text x="24" y="38" text-anchor="middle" font-size="6" fill="white" font-family="monospace">{{ project.ext }}</text>
            </svg>
            <div class="flex flex-col">
              <span class="text-white font-[Bitcount] text-xs group-hover/proj:text-red-400 transition-colors leading-snug">{{ project.name }}</span>
              <span class="text-red-900/40 font-[Bitcount] text-[10px]">{{ project.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
 
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-150 ease-in"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" @click.self="closeProject">
        <div class="relative flex flex-col w-150 max-w-[95vw] max-h-[85vh] rounded border overflow-hidden bg-red-950/10 border-red-900/50 shadow-[0_0_60px_rgba(185,28,28,0.15),0_25px_60px_rgba(0,0,0,0.8)]">
 

          <div class="flex items-center justify-between px-4 py-2 shrink-0 select-none bg-linear-to-r from-red-950/60 to-red-900/20 border-b border-red-900/35">
            <div class="flex items-center gap-2">
              <svg viewBox="0 0 48 56" class="w-4 h-5" fill="none">
                <path d="M8 0h22l12 12v44H8V0z" fill="#1a0808" stroke="rgba(185,28,28,0.6)" stroke-width="1.5"/>
                <path d="M30 0l12 12H30V0z" fill="#2d0f0f" stroke="rgba(185,28,28,0.4)" stroke-width="1"/>
                <rect x="8" y="30" width="32" height="10" rx="1" :fill="selectedProject.tagColor" opacity="0.9"/>
                <text x="24" y="38" text-anchor="middle" font-size="6" fill="white" font-family="monospace">{{ selectedProject.ext }}</text>
              </svg>
              <span class="text-red-300 font-[Bitcount] text-xs">{{ selectedProject.name }}.{{ selectedProject.ext.toLowerCase() }}</span>
            </div>
            <button @click="closeProject" class="w-4 h-4 rounded-full bg-red-800 flex items-center justify-center group/close">
              <span class="text-red-200 text-[8px] leading-none opacity-0 group-hover/close:opacity-100 transition-opacity">✕</span>
            </button>
          </div>
 
          <div class="relative w-full h-64 overflow-hidden shrink-0 bg-red-950/20">
            <img v-if="selectedProject.image" :src="selectedProject.image" :alt="selectedProject.name" class="w-full h-full opacity-95 object-contain" @error="e => e.target.style.display = 'none'"/>
            
            <div class="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 48 56" class="w-16 h-20 opacity-10" fill="none">
                <path d="M8 0h22l12 12v44H8V0z" fill="white" stroke="white" stroke-width="1"/>
                <path d="M30 0l12 12H30V0z" fill="#aaa" stroke="#aaa" stroke-width="0.5"/>
              </svg>
            </div>
         
            <div class="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,0,0,0.08)_3px,rgba(0,0,0,0.08)_4px)]"></div>
         
            <div class="absolute bottom-0 left-0 right-0 h-16 pointer-events-none bg-linear-to-b from-transparent to-red-950/80"></div>
          </div>
 
          <div class="flex flex-col gap-3 px-5 py-4 overflow-y-auto">
            <div class="flex items-start justify-between gap-4">
              <div class="flex flex-col gap-1">
                <span class="text-white font-[Biorhyme_Expanded] text-lg leading-tight">{{ selectedProject.name }}</span>
                <span class="text-red-900/50 font-[Bitcount] text-xs">{{ selectedProject.year }} · {{ selectedProject.ext }}</span>
              </div>
              <a v-if="selectedProject.url" :href="selectedProject.url" class="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded border font-[Bitcount] text-xs text-red-400 border-red-900/40 hover:border-red-600/60 hover:bg-red-900/15 transition-all duration-150">
                Open ↗
              </a>
            </div>
            <p class="text-white/60 font-[Bitcount] text-sm leading-relaxed border-t border-red-900/20 pt-3">
              {{ selectedProject.description }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
 
<script setup>
import { useFolders } from './modules/useFolders.js';
 
const { folders, activeFolder, selectedProject, openFolder, closeFolder, openProject, closeProject } = useFolders()
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