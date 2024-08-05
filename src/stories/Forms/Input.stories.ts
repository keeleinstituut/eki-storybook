import type { StoryObj, Meta } from '@storybook/html';
import { createInput, Input } from './Input';
import feather from 'feather-icons';

const meta: Meta<Input> = {
  title: 'Forms/Input',
  tags: ['autodocs'],

  argTypes: {
    inputSize: {
      name: 'Input size',
      description: 'Change input size',
      control: { type: 'select' },
      options: ['large', 'medium', 'small'],
    },
    inputLabel: { 
      name: 'Input label',
      description: 'Label before input field',
      control: 'text',
    },
    inputLabelDisplay: {
      name: 'Enable label',
      descritprion: 'Show or hide input label',
      control: 'boolean'
    },
    inputIconDisplay: {
      name: 'Enable icon',
      description: 'Show or hide input icon',
      control: 'boolean'
    },
    inputIcon: {
      name: 'Icon',
      control: { type: 'text' },
      description: 'Feather icon name (e.g., "circle")',
      if: { arg: 'inputIconDisplay', eq: true },
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    inputHelperTextDisplay: {
      name: 'Enable helper text',
      description: 'Show or hide helper text',
      control: 'boolean'
    },
    inputHelperText: {
      name: 'Helper text',
      control: { type: 'text' },
      description: 'Helper text for the input field',
    },
    inputDisabled: {
      name: 'Disable input field',
      control: 'boolean',
      description: 'Disable input field',
    },
  },

  args: {
    inputSize: 'large',
    inputLabel: 'Label',
    placeholder: 'Placeholder',
    inputHelperText: 'This is a helper text.',
  },
  
  render: (args) => {
    const input = createInput(args);
    document.body.appendChild(input);
    feather.replace();
    document.body.removeChild(input);

    return input;
  },

} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<Input>;

export const DefaultInput: Story = {
  args: {
    inputLabelDisplay: false,
  }
};

export const InputWithLabel: Story = {
  args: {
    inputLabelDisplay: true,
  }
};

export const InputWithHelperText: Story = {
  args: {
    inputLabelDisplay: true,
    inputHelperTextDisplay: true,
  }
};

export const InputWithDecorator: Story = {
  args: {
    inputIconDisplay: true,
    inputIcon: 'eye',
  },
};

export const InputWithEverything: Story = {
  args: {
    inputLabelDisplay: true,
    inputIconDisplay: true,
    inputIcon: 'eye',
    inputHelperTextDisplay: true,
  },
};