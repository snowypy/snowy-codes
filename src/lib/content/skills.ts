import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Website Development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using Next.js with TypeScript & TailWindCSS',
        'Developing responsive single-page applications using React.js',
        'Creating lovely APIs with Insomnia and Postman',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'vue', icon: 'logos:vue' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'database', icon: 'icon:mongodb-icon' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Learning to design user friendly interfaces using Figma',
        'Experience in developing design systems and style guides',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
    {
      id: getId(),
      title: 'Frontend Development',
      lottie: {
        light: '/lotties/backend.json',
        dark: '/lotties/backend-dark.json',
      },
      points: [
        'Producing scalable and maintainable applications using pythong',
        'Developing the best Java Projects in Java',
        'Optimising Java code in Kotlin.',
      ],
      softwareSkills: [
        { name: 'java', icon: 'logos:java' },
        { name: 'kotlin', icon: 'logos:kotlin-icon' },
        { name: 'python', icon: 'logos:python' },
        { name: 'skript', icon: 'vscode-icons:file-type-sql' },
      ],
    },
  ],
};
