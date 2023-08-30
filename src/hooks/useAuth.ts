import { mockUsers } from '@/mocks/mockUsers';
import useLocalStorage from 'use-local-storage';

export const useAuth = () => {
  const [userId, setUserId] = useLocalStorage<string | undefined>(
    'userId',
    undefined,
  );

  const isAuth = !!userId;

  const logout = () => {
    setUserId(undefined);
  };

  const login = (userId: string) => {
    setUserId(userId);
  };

  const user = mockUsers.find((user) => user.id === userId);

  return {
    user,
    isAuth,
    login,
    logout,
  };
};
