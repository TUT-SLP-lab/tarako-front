import { BaseLayout } from '@/components/layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <div className="flex h-[calc(100vh-100px)]">
        <div className="w-[60%] bg-gray-300"></div>
        <div className="w-[40%] bg-gray-500"></div>
      </div>
    </BaseLayout>
  );
}
