import type { StoryObj, Meta } from '@storybook/html';
import { fn } from '@storybook/test';
import type { Button } from './Button';
import { createButton } from './Button';
import feather from 'feather-icons';

const meta: Meta<Button> = {
  title: 'Components/Button',
  tags: ['autodocs'],

  parameters: {
    controls: { sort: 'none' },
  },

  argTypes: {
    onClick: {
      name: 'Click event',
      description: 'Event triggered on click',
      action: 'clicked'
    },
    buttonLabel: {
      name: 'Button text',
      description: 'Modify button label text',
      control: 'text',
      if: { arg: 'iconOnly', eq: false },
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
    icon: {
      name: 'Icon',
      control: { type: 'text' },
      description: 'Feather icon name (e.g., "circle")',
      if: { arg: 'iconDisplay', eq: true },
    },
  },

  args: { onClick: fn() },
  
  render: (args) => {
    const button = createButton(args);
    document.body.appendChild(button);
    feather.replace();
    document.body.removeChild(button);

    return button;
  },

} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<Button>;

export const DefaultButton: Story = {
  args: {
    buttonSize: 'medium',
    buttonLabel: 'Default button',
    iconDisplay: false,
    iconOnly: false,
    iconPosition: 'left',
    icon: 'circle',
  },
};

export const ButtonWithLeftIcon: Story = {
  args: {
    buttonSize: 'medium',
    buttonLabel: 'Button with left icon',
    iconDisplay: true,
    iconOnly: false,
    iconPosition: 'left',
    icon: 'circle',
  },
};

export const ButtonWithRightIcon: Story = {
  args: {
    buttonSize: 'medium',
    buttonLabel: 'Button with right icon',
    iconDisplay: true,
    iconOnly: false,
    iconPosition: 'right',
    icon: 'circle',
  },
};

export const ButtonWithOnlyIcon: Story = {
  args: {
    buttonSize: 'medium',
    iconDisplay: true,
    iconOnly: true,
    iconPosition: 'left',
    icon: 'circle',
  },
};