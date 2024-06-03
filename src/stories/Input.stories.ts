import type { StoryObj, Meta } from '@storybook/html';
import { createInput, Input } from './Input';
import feather from 'feather-icons';

const meta: Meta<Input> = {
  title: 'Components/Input',
  tags: ['autodocs'],

  argTypes: {
    inputLabel: { 
      name: 'Input label',
      description: 'Label before input field',
      control: 'text',
    },
    inputIconDisplay: {
      name: 'Enable icon',
      description: 'Show or hide button icon',
      control: 'boolean'
    },
    inputIconPosition: {
      name: 'Position icon',
      description: 'Position icon inside input',
      control: { type: 'select' },
      options: ['left', 'right'],
      if: { arg: 'inputIconDisplay', eq: true },
    },
    inputIcon: {
      name: 'Icon',
      control: { type: 'text' },
      description: 'Feather icon name (e.g., "circle")',
      if: { arg: 'inputIconDisplay', eq: true },
    },
  },

  args: {
    inputLabel: 'Label',
  },
  
  render: (args) => {
    const button = createInput(args);
    document.body.appendChild(button);
    feather.replace();
    document.body.removeChild(button);

    return button;
  },

} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<Input>;

export const InputWithNoIcon: Story = {
  args: {
    inputIconDisplay: false,
  },
};

export const InputWithLeftIcon: Story = {
  args: {
    inputIconDisplay: true,
    inputIconPosition: 'left',
    inputIcon: 'user',
  },
};

export const InputWithRightIcon: Story = {
  args: {
    inputIconDisplay: true,
    inputIconPosition: 'right',
    inputIcon: 'user',
  },
};