export const mockUsers = [
  {
    id: process.env.NEXT_PUBLIC_USER_ID_1,
    name: '田中夏子',
    description: '田中夏子です。よろしくお願いします。趣味は読書です。',
    section: '経理部',
    email: 'tanaka.natsuko@tarako',
    icon: '/user_1.png',
  },
  {
    id: process.env.NEXT_PUBLIC_USER_ID_2,
    name: '山田太郎',
    description: '山田太郎です。よろしくお願いします。趣味は野球です。',
    section: '営業部',
    email: 'yamada.taro@tarako',
    icon: '/user_2.png',
  },
  {
    id: process.env.NEXT_PUBLIC_ADMIN_USER_ID,
    name: '管理五郎',
    description:
      '管理者五郎です。よろしくお願いします。人と関わる仕事が好きです。',
    section: '管理部',
    email: 'admin.goro@tarako',
    icon: '/admin.png',
  },
];
