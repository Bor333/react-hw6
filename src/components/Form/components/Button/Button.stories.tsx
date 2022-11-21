import React from 'react';
import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  argTypes: {
    click: { action: 'click' },
  },
  component: Button,
  title: 'MyComponents/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (arg) => (
  <Button {...arg}>test</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
