import type { Menu } from './AvatarMenu';

import { AvatarMenu } from './AvatarMenu';
import { useAuth } from '@/hooks/useAuth';
import {
  IconHelp,
  IconLogout,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  const { user, logout } = useAuth();

  const avatarMenuMenus = {
    normal: [
      {
        icon: <IconUser size={14} />,
        label: 'プロフィール',
        onClick: () => {},
      },
      {
        icon: <IconSettings size={14} />,
        label: '設定',
        onClick: () => {},
      },
      {
        icon: <IconHelp size={14} />,
        label: 'ヘルプ',
        onClick: () => {},
      },
    ],
    danger: [
      {
        icon: <IconLogout size={14} />,
        label: 'ログアウト',
        onClick: logout,
      },
    ],
  } as const satisfies {
    normal: ReadonlyArray<Menu>;
    danger: ReadonlyArray<Menu>;
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-header items-center justify-between border-b border-gray-200 bg-white px-8">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Tarako"
          width={100}
          height={100}
          className="cursor-pointer"
        />
        <h1 className="mt-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-3xl font-bold leading-none text-transparent">
          Tarako
        </h1>
      </Link>
      <AvatarMenu
        avatarUrl={user?.iconUrl}
        menus={[...avatarMenuMenus.normal]}
        dangerMenus={[...avatarMenuMenus.danger]}
      />
    </header>
  );
};
