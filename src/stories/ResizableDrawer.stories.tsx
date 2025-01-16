import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ResizableDrawer } from '../../lib/main';
import classes from './ResizableDrawer.module.css';
import { useState } from 'react';

const meta = {
  title: 'Components/ResizableDrawer',
  component: ResizableDrawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number', min: 100, max: 1000, step: 10 },
      description: 'Width of the drawer in pixels.',
    },
    minWidth: {
      control: { type: 'number', min: 100, max: 500, step: 10 },
      description: 'Minimum width of the drawer in pixels.',
    },
    maxWidth: {
      control: { type: 'number', min: 300, max: 1000, step: 10 },
      description: 'Maximum width of the drawer in pixels.',
    },
    open: {
      control: false,
      description: 'Controls whether the drawer is open or not.',
    },
    onClose: {
      control: false,
      description: 'Callback function triggered when the drawer is closed.',
    },
    onOpen: {
      control: false,
      description: 'Callback function triggered when the drawer is opened.',
    },
    header: {
      control: false,
      description: 'Header content of the drawer.',
    },
    footer: {
      control: false,
      description: 'Footer content of the drawer.',
    },
    children: {
      control: false,
      description: 'Main content of the drawer.',
    },
    draggerIcon: {
      control: false,
      description: 'Custom icon for the dragger handle.',
    },
    draggerClassName: {
      control: false,
      description: 'ustom className for the dragger handle.',
    },
  },
  args: {
    width: undefined,
    minWidth: undefined,
    maxWidth: undefined,
    onClose: () => {},
    onOpen: () => {},
  },
} satisfies Meta<typeof ResizableDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleDrawer = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <Button variant="contained" onClick={handleToggleDrawer}>
          open
        </Button>
        <ResizableDrawer
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
        >
          <div>
            <p>--------</p>
            <p>children</p>
            <p>resize</p>
            <p>drawer</p>
            <p>content</p>
            <p>--------</p>
          </div>
        </ResizableDrawer>
      </div>
    );
  },
  args: {
    width: undefined,
    minWidth: undefined,
    maxWidth: undefined,
  },
  argTypes: {
    width: { control: false },
    minWidth: { control: false },
    maxWidth: { control: false },
  },
};

export const WithResizeProps: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleDrawer = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <Button variant="contained" onClick={handleToggleDrawer}>
          open
        </Button>
        <ResizableDrawer
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
        >
          <div>
            <p>--------</p>
            <p>children</p>
            <p>resize</p>
            <p>drawer</p>
            <p>content</p>
            <p>--------</p>
          </div>
        </ResizableDrawer>
      </div>
    );
  },
  args: {
    width: 300,
    minWidth: 200,
    maxWidth: 500,
  },
};
