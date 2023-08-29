import { Timeline, Text } from '@mantine/core';
import { IconGitBranch } from '@tabler/icons-react';

/** TODO: めちゃくちゃ雑に実装しているので、レイアウト修正しっかりやる */
export const TimelineView = () => {
  return (
    <Timeline bulletSize={24}>
      <Timeline.Item
        bullet={<IconGitBranch size={16} />}
        bulletSize={32}
        title={
          <div className="flex items-center justify-between">
            <p className="text-2xl">New branch</p>
            <div className="h-5 w-5 rounded-full bg-red-500" />
          </div>
        }
        className="cursor-pointer"
      >
        <Text color="dimmed" size="md">
          急遽電話での対応が入り、対応中の案件を中断して対応しました。
        </Text>
        <Text size="xs" mt={8}>
          2 hours ago
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconGitBranch size={16} />}
        bulletSize={32}
        title={<p className="text-2xl">New branch</p>}
        className="cursor-pointer"
      >
        <Text color="dimmed" size="md">
          急遽電話での対応が入り、対応中の案件を中断して対応しました。
        </Text>
        <Text size="xs" mt={8}>
          2 hours ago
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconGitBranch size={16} />}
        bulletSize={32}
        title={<p className="text-2xl">New branch</p>}
        className="cursor-pointer"
      >
        <Text color="dimmed" size="md">
          急遽電話での対応が入り、対応中の案件を中断して対応しました。
        </Text>
        <Text size="xs" mt={8}>
          2 hours ago
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconGitBranch size={16} />}
        bulletSize={32}
        title={<p className="text-2xl">New branch</p>}
        className="cursor-pointer"
      >
        <Text color="dimmed" size="md">
          急遽電話での対応が入り、対応中の案件を中断して対応しました。
        </Text>
        <Text size="xs" mt={8}>
          2 hours ago
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconGitBranch size={16} />}
        bulletSize={32}
        title={<p className="text-2xl">New branch</p>}
        className="cursor-pointer"
      >
        <Text color="dimmed" size="md">
          急遽電話での対応が入り、対応中の案件を中断して対応しました。
        </Text>
        <Text size="xs" mt={8}>
          2 hours ago
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconGitBranch size={16} />}
        bulletSize={32}
        title={<p className="text-2xl">New branch</p>}
        className="cursor-pointer"
      >
        <Text color="dimmed" size="md">
          急遽電話での対応が入り、対応中の案件を中断して対応しました。
        </Text>
        <Text size="xs" mt={8}>
          2 hours ago
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconGitBranch size={16} />}
        bulletSize={32}
        title={<p className="text-2xl">New branch</p>}
        className="cursor-pointer"
      >
        <Text color="dimmed" size="md">
          急遽電話での対応が入り、対応中の案件を中断して対応しました。
        </Text>
        <Text size="xs" mt={8}>
          2 hours ago
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconGitBranch size={16} />}
        bulletSize={32}
        title={<p className="text-2xl">New branch</p>}
        className="cursor-pointer"
      >
        <Text color="dimmed" size="md">
          急遽電話での対応が入り、対応中の案件を中断して対応しました。
        </Text>
        <Text size="xs" mt={8}>
          2 hours ago
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconGitBranch size={16} />}
        bulletSize={32}
        title={<p className="text-2xl">New branch</p>}
        className="cursor-pointer"
      >
        <Text color="dimmed" size="md">
          急遽電話での対応が入り、対応中の案件を中断して対応しました。
        </Text>
        <Text size="xs" mt={8}>
          2 hours ago
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconGitBranch size={16} />}
        bulletSize={32}
        title={<p className="text-2xl">New branch</p>}
        className="cursor-pointer"
      >
        <Text color="dimmed" size="md">
          急遽電話での対応が入り、対応中の案件を中断して対応しました。
        </Text>
        <Text size="xs" mt={8}>
          2 hours ago
        </Text>
      </Timeline.Item>
    </Timeline>
  );
};
