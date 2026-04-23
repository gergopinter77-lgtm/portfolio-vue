import { ref } from 'vue'

const foldersData = [
  {
    id: 1,
    name: 'Web Development',
    type: 'WEB',
    projects: [
      {
        id: 1, name: 'Brothers Lionheart Promo', ext: 'HTML/CSS', year: '2025', tagColor: '#7f1d1d',
        description: 'A promotional page for a local theater play.',
        image: 'https://i.imgur.com/lRBoG3z.png',
        url: 'https://gergopinter77-lgtm.github.io/1st-semester-exam-project-BrotherLionheart/',
      },
      {
        id: 2, name: 'Recipte Page', ext: 'HTML/CSS', year: '2025', tagColor: '#991b1b',
        description: 'A recreation of a recepie page from a design mockup.',
        image: 'https://i.imgur.com/3YDECVc.png',
        url: 'https://github.com/gergopinter77-lgtm/recipie-page-mandatory',
      },
      {
        id: 3, name: 'Vue And Tailwind practice', ext: 'Vue', year: '2026', tagColor: '#b91c1c',
        description: 'A small project to practice Vue and Tailwind.',
        image: '/projects/dashboard.png',
        url: 'https://github.com/gergopinter77-lgtm/vue-tailwind-practice',
      },
    ],
  },
  {
    id: 2,
    name: 'UX Design',
    type: 'UX',
    projects: [
      {
        id: 1, name: 'Brothers Lionheart Prototype', ext: 'FIG', year: '2025', tagColor: '#7f1d1d',
        description: 'A fully clickable prototype of a promotional website for a theater play.',
        image: 'https://i.imgur.com/lRBoG3z.png',
        url: 'https://www.figma.com/design/fBuIrFlpjE5rjkTzIOWcDQ/1st-semester-project?node-id=0-1&p=f&t=t49sJepft3edAiJO-0',
      },
      {
        id: 2, name: 'Recipe Page Ux research and prototype', ext: 'FIG', year: '2025', tagColor: '#991b1b',
        description: 'A recipe page prototype focusing on user experience and visual design.',
        image: 'https://i.imgur.com/0OVqnIb.png',
        url: 'https://www.figma.com/board/PcmzODzA5TIF988UPzKbDk/Untitled?t=a512US6bmXikccib-0',
      },
      {
        id: 3, name: 'Delivery App Ux research and prototype', ext: 'FIG', year: '2026', tagColor: '#b91c1c',
        description: 'Usability study with 12 participants, synthesized into insights.',
        image: 'https://i.imgur.com/0bo9sso.png',
        url: 'https://www.figma.com/board/py7FkiORf5KNNjsi3efSAQ/ux-app-design?node-id=0-1&p=f&t=3BCSwhXIxL4hsZCa-0',
      },
    ],
  },
  {
    id: 3,
    name: 'Content Creation',
    type: 'CNT',
    projects: [
      {
        id: 1, name: 'Welcome to Esbjerg Poster', ext: 'PS', year: '2025', tagColor: '#7f1d1d',
        description: 'A Poster for our Brochure about Esbjerg.',
        image: 'https://i.imgur.com/7gYm6K5.jpeg',
        url: 'https://i.imgur.com/7gYm6K5.jpeg',
      },
      {
        id: 2, name: 'Logo Redesign', ext: 'AI/ID', year: '2025', tagColor: '#991b1b',
        description: 'A logo redisign for the universities friday bar.',
        image: 'https://i.imgur.com/BtMuaGM.png',
        url: 'https://i.imgur.com/BtMuaGM.png',
      },
      {
        id: 3, name: 'Brochure Design', ext: 'ID', year: '2025', tagColor: '#b91c1c',
        description: 'A brochure about Esbjerg centrum.',
        image: 'https://i.imgur.com/Lc4S40p.png',
        url: 'https://drive.google.com/file/d/1cUHKV-unXnrWXZiG4HTgqNwvcUra2PVT/view',
      },
      {
        id: 4, name: 'Mini ME', ext: 'AI', year: '2025', tagColor: '#7f1d1d',
        description: 'Minime project in Adobe Illustrator.',
        image: 'https://i.imgur.com/YUKNr7B.png',
        url: 'https://i.imgur.com/YUKNr7B.png',
      },
    ],
  },
  {
    id: 4,
    name: 'Video Production',
    type: 'VID',
    projects: [
      {
        id: 1, name: 'VideoCV', ext: 'MP4', year: '2026', tagColor: '#7f1d1d',
        description: 'My Video CV showcasing my skills and experience in a creative way.',
        image: 'http://i.imgur.com/aN0ja4v.png',
        url: 'https://www.youtube.com/watch?v=Gjk-3yKxGuY',
      },
      {
        id: 2, name: 'SEA promotional video', ext: 'PP/AE', year: '2026', tagColor: '#991b1b',
        description: 'After Effects animations and camera work for promotional video.',
        image: '/projects/motion.png',
        url: 'https://youtube.com/shorts/SeayunfTTe4?si=W1wxGrYQe07CQC6o',
      },
      {
        id: 3, name: 'Short Film', ext: 'MOV', year: '2026', tagColor: '#b91c1c',
        description: 'Trace. Coming soon.',
        image: '/projects/film.png',
        url: '',
      },
      {
        id: 4, name: 'Movie scene recreation', ext: 'MOV', year: '2026', tagColor: '#b91c1c',
        description: 'A recreation of a famous scene from the series Dexter',
        image: 'https://i.imgur.com/hOVOgFG.png',
        url: 'https://www.youtube.com/watch?v=xYrcmipdYo0',
      },
    ],
  },
]

export function useFolders() {
  const folders = ref(foldersData)
  const activeFolder = ref(null)
  const selectedProject = ref(null)

  function openFolder(folder) {
    activeFolder.value = folder
    selectedProject.value = null
  }

  function closeFolder() {
    activeFolder.value = null
    selectedProject.value = null
  }

  function openProject(project) {
    selectedProject.value = project
  }

  function closeProject() {
    selectedProject.value = null
  }

  return { folders, activeFolder, selectedProject, openFolder, closeFolder, openProject, closeProject }
}