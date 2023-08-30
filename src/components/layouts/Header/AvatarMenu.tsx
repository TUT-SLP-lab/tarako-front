import type { ReactNode } from 'react';

import { Avatar, Menu } from '@mantine/core';

export type Menu = {
  icon: ReactNode;
  label: string;
  onClick: () => void;
};

type Props = {
  avatarUrl?: string;
  menus: Menu[];
  dangerMenus: Menu[];
};

export const AvatarMenu = ({ menus, dangerMenus, avatarUrl }: Props) => {
  return (
    <Menu shadow="md" width={200} position="bottom-end">
      <Menu.Target>
        <button>
          <Avatar radius="xl" src={avatarUrl} />
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        {menus.map((menu) => (
          <Menu.Item key={menu.label} icon={menu.icon} onClick={menu.onClick}>
            {menu.label}
          </Menu.Item>
        ))}
        <Menu.Divider />
        {dangerMenus.map((menu) => (
          <Menu.Item
            key={menu.label}
            color="red"
            icon={menu.icon}
            onClick={menu.onClick}
          >
            {menu.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
