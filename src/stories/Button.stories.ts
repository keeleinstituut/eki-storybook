import type { StoryObj, Meta } from '@storybook/html';
import { fn } from '@storybook/test';
import type { Button } from './Button';
import { createButton } from './Button';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],

  parameters: {
    controls: { sort: 'none' },
  },

  render: (args) => {
    return createButton(args);
  },

  argTypes: {
    onClick: { action: 'clicked' },
    buttonLabel: {
      name: 'Button text',
      description: 'Modify button label text',
      control: 'text',
    },
    buttonSize: {
      name: 'Button size',
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    iconDisplay: {
      name: 'Enable icon',
      description: 'Show or hide button icon',
      control: 'boolean'
    },
    iconOnly: {
      name: 'Display only icon',
      description: 'Toggle only button icon and remove label text',
      control: 'boolean',
      if: { arg: 'iconDisplay', eq: true },
    },
    iconPosition: {
      name: 'Position icon',
      description: 'Position icon before or after label',
      control: { type: 'select' },
      options: ['left', 'right'],
      if: { arg: 'iconDisplay', eq: true },
    },
  },

  args: { onClick: fn() },

} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    iconDisplay: false,
    iconOnly: false,
    buttonLabel: 'Button',
  },
};