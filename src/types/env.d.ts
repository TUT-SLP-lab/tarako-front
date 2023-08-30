declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_USER_ID_1: string;
      NEXT_PUBLIC_USER_ID_2: string;
      NEXT_PUBLIC_ADMIN_USER_ID: string;
    }
  }
}

export {};
