import type { Meta, StoryObj } from '@storybook/react';

import { navBar } from './nav-bar';

const meta = {
  component: navBar,
} satisfies Meta<typeof navBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};