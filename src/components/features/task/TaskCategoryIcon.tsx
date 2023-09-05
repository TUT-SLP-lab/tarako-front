import type { TablerIconsProps } from '@tabler/icons-react';

import { TaskCategory } from '@/generated/typescript-axios';
import {
  IconCalendar,
  IconDots,
  IconFiles,
  IconMoneybag,
  IconUsers,
} from '@tabler/icons-react';

type Props = {
  category: TaskCategory;
} & TablerIconsProps;

export const TaskCategoryIcon = ({ category, ...iconProps }: Props) => {
  switch (category) {
    case TaskCategory.Hr:
      return <IconUsers {...iconProps} />;
    case TaskCategory.Accounting:
      return <IconMoneybag {...iconProps} />;
    case TaskCategory.GeneralAffairs:
      return <IconFiles {...iconProps} />;
    case TaskCategory.Diary:
      return <IconCalendar {...iconProps} />;
    case TaskCategory.Other:
      return <IconDots {...iconProps} />;
  }
};
