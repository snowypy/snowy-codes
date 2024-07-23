'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Snowy, a Manager at{' '}
            <Link
              href="https://store.minecrush.gg/"
              target="_blank"
              className="text-accent"
            >
              MineCrush
            </Link>
            .<br /> I'm also a Java Developer and I am reaching out into Kotlin.
            I Would like to explore as many langs as possible in order to expand my Tech Stack
          </p>
          <p>
            I have worked on several projects where I have been paid plentifully for my efforts such as at
            start-up -{' '}
            <Link
              href="https://store.opgens.com/"
              target="_blank"
              className="text-accent"
            >
              OPGens
            </Link>
            .
          </p>
          <p>
            I am currently focusing on expanding my skills away from Java & Kotlin
            so that I can become a Full Stack Developer
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;