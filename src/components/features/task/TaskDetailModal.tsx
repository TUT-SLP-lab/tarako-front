import type { ModalProps } from '@mantine/core';

import { mockTasks } from '@/mocks/moskTasks';
import { Modal } from '@mantine/core';

type Props = {
  taskId: string;
} & ModalProps;

export const TaskDetailModal = ({ taskId, ...modalProps }: Props) => {
  const taskDetail = mockTasks.find((task) => task.id === taskId);

  if (taskDetail === undefined) {
    return null;
  }

  return (
    <Modal
      {...modalProps}
      size="xl"
      centered
      title={<h2 className="text-2xl font-bold">{taskDetail.title}</h2>}
    >
      <p className="text-lg">{taskDetail.description}</p>
    </Modal>
  );
};
