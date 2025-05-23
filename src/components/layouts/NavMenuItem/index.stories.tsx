import type { Meta, StoryObj } from '@storybook/react';
import NavMenuItem, { type NavMenuItemType } from './';

const meta = {
  title: 'layouts/NavMenuItem',
  component: NavMenuItem,
} satisfies Meta<typeof NavMenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const props: NavMenuItemType = {
  name: '도서 검색',
  path: '/',
  isActive: false,
};

export const Default: Story = {
  args: {
    ...props,
  },
};

export const Active: Story = {
  args: {
    ...props,
    isActive: true,
  },
};
