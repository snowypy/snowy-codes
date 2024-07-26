import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hiya, my name is',
  title: 'Snowy.',
  tagline: 'I create optimised web applications.',
  description:
    "I am a passionate web developer with hands-on experience in JavaScript, TypeScript, React.js, Node.js, TailwindCSS, Prisma, and UI/UX design.",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'See My Experience',
    url: `/#experience`,
    hideInDesktop: true,
  },
};
