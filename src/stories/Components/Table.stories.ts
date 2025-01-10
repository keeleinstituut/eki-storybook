import type { StoryObj, Meta } from '@storybook/html';
import { createTable, Table } from './Table';

const meta: Meta<Table> = {
  title: 'Components/Table',
  tags: ['autodocs'],
  parameters: {
    controls: { sort: 'none' },
    pseudo: {
      active: true,
      focus: true,
    },
  },
  argTypes: {
    title: {
      name: 'Table title',
      control: 'text',
      description: 'Title of the table',
    },
    showDescription: { 
      name: 'Show description',
      control: 'boolean', 
      description: 'Toggle to show or hide the description' 
    },
    description: { 
      name: 'Table description',
      control: 'text', 
      description: 'Description text of the table',
      if: { arg: 'showDescription', eq: true },
    },
    columns: {
      name: 'Number of columns',
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'The number of columns in the table',
    },
    rows: {
      name: 'Number of rows',
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'The number of rows in the table',
    },
    showHead: {
      name: 'Show table head',
      control: 'boolean',
      description: 'Toggle to show or hide the table head'
    },
    smallHeadSwitch: {
      name: 'Small table head cells',
      control: 'boolean',
      description: 'Switch to small table head cells'
    },
    smallBodySwitch: {
      name: 'Small body cells',
      control: 'boolean',
      description: 'Switch to small table body cells'
    },
    checkbox: {
      name: 'Checkbox',
      control: 'boolean',
      description: 'Make table rows selectable'
    },
  },
  args: {
    title: 'Table Title',
    columns: 3,
    rows: 3,
    showDescription: false,
    description: 'Additional description if required',
    showHead: false,
    smallHeadSwitch: false,
    smallBodySwitch: false,
    checkbox: false,
  },
  render: (args) => {
    return createTable(args);
  },
};

export default meta;
type Story = StoryObj<Table>;

export const DefaultTable: Story = {};
