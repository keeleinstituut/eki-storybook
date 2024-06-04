import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';
import { createRadioButton, RadioButton } from './RadioButton';

const meta: Meta<RadioButton> = {
  title: 'Forms/RadioButton',
  tags: ['autodocs'],

  parameters: {
    controls: { sort: 'none' },
  },

  argTypes: {
    name: { 
      name: 'Radio buttons label',
      description: 'Name attribute for the radio buttons',
      control: 'text',
    },
    count: { 
      name: 'Radio buttons count',
      description: 'Number of radio buttons to display',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1
      },
    },
    radioBehind: {
      name: 'Radio button behind',
      description: 'Move radio button behind label',
      control: 'boolean',
    },
  },

  args: {
    name: 'Radio button',
    count: 3,
    radioBehind: false,
    onChange: fn()
  },
  
  render: (args) => {
    const radioButton = createRadioButton(args);
    return radioButton;
  },
} satisfies Meta<RadioButton>;

export default meta;
type Story = StoryObj<RadioButton>;

export const DynamicCount: Story = {
  args: {
    name: 'Radio button',
    count: 3,
  },
};
