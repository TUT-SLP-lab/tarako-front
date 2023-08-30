import type { NextPage } from 'next';

import IncompleteTask from '@/components/common/IncompleteTask';
import SeverityTransition from '@/components/common/SeverityTransition';
import TodaysSeverity from '@/components/common/TodaysSeverity';
import { Grid } from '@mantine/core';

const MyPage: NextPage = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={4}>
          <IncompleteTask />
        </Grid.Col>
        <Grid.Col span={4}>
          <TodaysSeverity />
        </Grid.Col>
        <Grid.Col span={4}>
          <SeverityTransition />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default MyPage;
