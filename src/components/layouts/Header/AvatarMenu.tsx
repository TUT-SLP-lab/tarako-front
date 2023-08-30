import { Avatar, Menu } from '@mantine/core';
import Link from 'next/link';
import { type ReactNode } from 'react';

type ActionMenu = {
  type: 'action';
  icon: ReactNode;
  label: string;
  onClick: () => void;
};

type LinkMenu = {
  type: 'link';
  icon: ReactNode;
  label: string;
  href: string;
};

export type Menu = ActionMenu | LinkMenu;

type Props = {
  src?: string;
  menus: Menu[];
  dangerMenus: Menu[];
};

export const AvatarMenu = ({ menus, dangerMenus, src }: Props) => {
  return (
    <Menu shadow="md" width={200} position="bottom-end">
      <Menu.Target>
        <button>
          <Avatar radius="xl" src={src} />
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        {menus.map((menu) =>
          menu.type === 'link' ? (
            <Link href={menu.href} key={menu.label}>
              <Menu.Item icon={menu.icon}>{menu.label}</Menu.Item>
            </Link>
          ) : (
            <Menu.Item key={menu.label} icon={menu.icon} onClick={menu.onClick}>
              {menu.label}
            </Menu.Item>
          ),
        )}
        <Menu.Divider />
        {dangerMenus.map((menu) =>
          menu.type === 'link' ? (
            <Menu.Item key={menu.label} icon={menu.icon} color="red">
              <Link href={menu.href}>{menu.label}</Link>
            </Menu.Item>
          ) : (
            <Menu.Item
              key={menu.label}
              icon={menu.icon}
              onClick={menu.onClick}
              color="red"
            >
              {menu.label}
            </Menu.Item>
          ),
        )}
      </Menu.Dropdown>
    </Menu>
  );
};
