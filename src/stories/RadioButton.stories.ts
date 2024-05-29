import type { StoryObj, Meta } from '@storybook/html';
import { fn } from '@storybook/test';
import type { RadioButton } from './RadioButton';
import { createRadioButton } from './RadioButton';

const meta: Meta<RadioButton> = {
  title: 'Components/RadioButton',
  tags: ['autodocs'],
  parameters: {
    controls: { sort: 'none' },
  },
  
  render: (args) => createRadioButton(args),

  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the radio button',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the radio button',
    },
    value: {
      control: 'text',
      description: 'Value attribute for the radio button',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state of the radio button',
    },
    onChange: {
      action: 'changed',
      description: 'Change event handler for the radio button',
    },
  },
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<RadioButton>;

export const Default: Story = {
  args: {
    label: 'Radio Button',
    name: 'radio-group',
    value: 'default',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Radio Button',
    name: 'radio-group',
    value: 'checked',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Radio Button',
    name: 'radio-group',
    value: 'unchecked',
    checked: false,
  },
};
