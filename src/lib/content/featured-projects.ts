import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'EpicLicenses',
      description: 'An Advanced Java, Kotlin, JavaScript, and Python License Manager.',
      tasks:
        "As a freelancer, I understand the importance of ensuring you are paid for your work and being able to revoke the right of access if a Chargeback is made and such. So I created ELicenses a solution to all of the above. Easily managed by Discord Embeds.",
      url: 'https://elicenses.vercel.app/',
      img: '/elicenses.png',
      tags: [
        'Javascript',
        'Node.js',
        'MongoDB',
        'Redis',
      ],
    }
  ],
};

export default featuredProjectsSection;
