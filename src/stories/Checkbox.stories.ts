import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';
import { createCheckbox, Checkbox } from './Checkbox';

const meta: Meta<Checkbox> = {
  title: 'Components/Checkbox',
  tags: ['autodocs'],

  parameters: {
    controls: { sort: 'none' },
  },

  argTypes: {
    name: { 
      name: 'Checkboxes label',
      description: 'Name attribute for the radio buttons',
      control: 'text',
    },
    count: { 
      name: 'Checkboxes count',
      description: 'Number of radio buttons to display',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1
      },
    },
    checkboxBehind: {
      name: 'Checkbox behind',
      description: 'Move radio button behind label',
      control: 'boolean',
    },
  },

  args: {
    name: 'checkbox',
    count: 3,
    checkboxBehind: false,
    onChange: fn()
  },
  
  render: (args) => {
    const checkbox = createCheckbox(args);
    return checkbox;
  },
} satisfies Meta<Checkbox>;

export default meta;
type Story = StoryObj<Checkbox>;

export const DynamicCheckboxes: Story = {
  args: {
    count: 3,
  },
};
