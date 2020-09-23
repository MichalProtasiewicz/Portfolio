import React from 'react';
import { storiesOf } from '@storybook/react';
import spizarkaImage from 'assets/screenshots/spizarka.jpg';
import ProjectCard from './ProjectCard';

storiesOf('Molecules/ProjectCard', module).add('ProjectCard', () => (
  <ProjectCard
    title="Spizarka"
    description="React + Django aplication to store shopping products and generating shoping list."
    photo={spizarkaImage}
    codeLink="https://github.com/MichalProtasiewicz/Spizarka"
    liveLink="https://spizarkaa.herokuapp.com"
  />
));
