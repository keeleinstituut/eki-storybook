import type { Meta, StoryObj } from '@storybook/html';
import { createSelect, Select } from "./Select";

const meta: Meta<Select> = {
  title: "Components/Select",
  tags: ["autodocs"],

  parameters: {
    controls: { sort: "none" },
    pseudo: { active: true, focus: true },
  },

  argTypes: {
    size: { 
      name: "Size",
      description: "Select field size",
      control: { type: 'select' },
      options: ['medium', 'small'],
    },
    addLabel: {
      name: "Label",
      description: "Add label to select field",
      control: "boolean",
    },
    optionsCount: { 
      name: "Number of options",
      description: "Choose the number of options displayed in a dropdown",
      control: { type: "range", min: 1, max: 10, step: 1 }, 
    },
    selectState: {
      name: "Select field state",
      description: "Choose a state for the select field",
      control: { type: 'select' },
      options: ['default', 'disabled', 'error'],
    },
    width: {
      name: "Select width",
      description: "Select field and dropdown width",
      control: { type: 'select' },
      options: ['default', 'auto'],
    },
    multipleSelect: {
      name: "Multiple select",
      description: "Switch on/off multiple select in dropdown",
      control: "boolean",
    },
    checkbox: {
      name: "Checkboxes",
      description: "Add checkboxes to dropdown elements",
      control: "boolean",
      if: { arg: 'multipleSelect', eq: true },
    },
    valueDisplayStyle: {
      name: "Value style",
      description: "Select displayed value styles",
      control: { type: 'select' },
      options: ['chip', 'default'],
    },
  },

  args: {
    addLabel: true,
    optionsCount: 3,
    size: 'medium',
    selectState: 'default',
    multipleSelect: false,
    checkbox: false,
    width: 'default',
    valueDisplayStyle: 'default',
  },

  render: (args) => {
    return createSelect(args);
  },
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<Select>;

export const DefaultSelect: Story = {
  args: {

  },
};
