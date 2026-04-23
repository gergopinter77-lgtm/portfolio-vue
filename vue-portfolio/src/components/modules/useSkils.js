import { ref } from "vue";

export const useSkills = () => {
    const skills = ref([
        {
            id:1,
            title: "HTML",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            button: "Projects",
        },
        {
            id:2,
            title: "css",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            button: "Projects",
        },
        {
            id:3,
            title: "Javascript",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg",
            button: "Projects",
        },
        {
            id:4,
            title: "Vue.js",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
            button: "Projects",
        },
        {
            id:5,
            title: "TailwindCss",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
            button: "Projects",
        },
        {
            id:6,
            title: "Premiere Pro",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
            button: "Projects",
        },
        {
            id:7,
            title: "After Effects",
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
            button: "Projects",
        },
        {
            id:8,
            title: "Photoshop",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
            button: "Projects",
        },
        {
            id:9,
            title: "Illustraitor",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
            button: "Projects",
        },
        {
            id:10,
            title: "Indesign",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
            button: "Projects",
        },
    ]);
    return {
    skills
}
};


