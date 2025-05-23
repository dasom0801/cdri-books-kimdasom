import type { Meta, StoryObj } from '@storybook/react';
import NavMenu from './';

const meta = {
  title: 'layouts/NavMenu',
  component: NavMenu,
} satisfies Meta<typeof NavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
