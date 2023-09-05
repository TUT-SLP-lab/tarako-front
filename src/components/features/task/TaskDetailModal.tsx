import type { ModalProps } from '@mantine/core';

import { useTask } from '@/utils/hooks/api/useTask';
import { Modal } from '@mantine/core';

type Props = {
  taskId: string;
} & ModalProps;

export const TaskDetailModal = ({ taskId, ...modalProps }: Props) => {
  const { task, isLoading } = useTask({ taskId });

  if (task === undefined || isLoading) {
    return null;
  }

  return (
    <Modal
      {...modalProps}
      size="xl"
      centered
      title={<h2 className="text-2xl font-bold text-normal">{task.title}</h2>}
      padding="xl"
    >
      <p className="text-lg text-normal">{task.details}</p>
    </Modal>
  );
};
