import type { Menu } from './AvatarMenu';

import { AvatarMenu } from './AvatarMenu';
import { PageLink } from './PageLink';
import { useSection } from '@/utils/hooks/api/useSection';
import { useAuth } from '@/utils/hooks/useAuth';
import {
  IconHelp,
  IconLogout,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const Header = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { section } = useSection({ sectionId: user?.section_id });

  // TODO: 原因を調査する
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (user === undefined) {
    return null;
  }

  const avatarMenuMenus = {
    normal: [
      {
        type: 'link',
        icon: <IconUser size={14} />,
        label: 'マイページ',
        href: `/users/${user.user_id}`,
      },
      {
        type: 'link',
        icon: <IconSettings size={14} />,
        label: '設定',
        href: '/settings',
      },
      {
        type: 'link',
        icon: <IconHelp size={14} />,
        label: 'ヘルプ',
        href: '/help',
      },
    ],
    danger: [
      {
        type: 'action',
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
          className="mb-2 cursor-pointer"
        />
        <h1 className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-3xl font-bold leading-none text-transparent">
          Tarako
        </h1>
      </Link>
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-4">
          <PageLink href="/" active={router.pathname === '/'}>
            トップ
          </PageLink>
          <PageLink
            href={`/sections/${user.section_id}`}
            active={router.pathname === '/sections/[sectionId]'}
          >
            {section?.name}
          </PageLink>
          <PageLink href="/sections" active={router.pathname === '/sections'}>
            部署一覧
          </PageLink>
        </div>
        <AvatarMenu
          src={user?.icon}
          menus={[...avatarMenuMenus.normal]}
          dangerMenus={[...avatarMenuMenus.danger]}
        />
      </div>
    </header>
  );
};
