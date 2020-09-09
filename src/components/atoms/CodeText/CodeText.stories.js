import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeText from './CodeText';

storiesOf('Atoms/CodeText', module).add('CodeText', () => (
  <CodeText>&lt;h1&gt;</CodeText>
));
