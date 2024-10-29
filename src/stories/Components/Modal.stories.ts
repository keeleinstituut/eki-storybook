import type { StoryObj, Meta } from '@storybook/html';
import { createModal, Modal } from './Modal';

const meta: Meta<Modal> = {
  title: 'Components/Modal',
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
      name: 'Modal title',
      control: 'text', 
      description: 'Title of the modal' 
    },
    showDescription: { 
      name: 'Show description',
      control: 'boolean', 
      description: 'Toggle to show or hide the description' 
    },
    description: { 
      name: 'Modal description',
      control: 'text', 
      description: 'Description text of the modal',
      if: { arg: 'showDescription', eq: true },
    },
    size: {
      name: 'Modal size',
      description: 'Size of the modal',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      name: 'Modal variant',
      description: 'Style variant of the modal',
      control: { type: 'select' },
      options: ['soft', 'outlined'],
    },
    color: {
      name: 'Modal color',
      description: 'Color theme of the modal',
      control: { type: 'select' },
      options: ['primary', 'neutral', 'danger', 'success'],
    },
  },
} satisfies Meta<Modal>;

export default meta;

type Story = StoryObj<Modal>;

export const DefaultModal: Story = {
  args: {
    title: 'Modal Title',
    showDescription: true,
    description: 'Description.',
    size: 'small',
    variant: 'soft',
    color: 'primary',
  },
  render: (args) => createModal(args),
};
