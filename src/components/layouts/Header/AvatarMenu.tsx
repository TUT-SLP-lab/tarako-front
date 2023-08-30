import { Avatar, Menu } from '@mantine/core';
import { useState, type ReactNode, useEffect } from 'react';

export type Menu = {
  icon: ReactNode;
  label: string;
  onClick: () => void;
};

type Props = {
  src?: string;
  menus: Menu[];
  dangerMenus: Menu[];
};

export const AvatarMenu = ({ menus, dangerMenus, src }: Props) => {
  // TODO: 原因を調査する
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Menu shadow="md" width={200} position="bottom-end">
      <Menu.Target>
        <button>
          <Avatar radius="xl" src={src} />
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
