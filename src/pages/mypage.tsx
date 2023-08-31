import type { NextPage } from 'next';

import SeverityTransition from '@/components/common/SeverityTransition';
import IncompleteTask from '@/components/common/TaskStatus';
import TodaysSeverity from '@/components/common/TodaysSeverity';
import { Grid } from '@mantine/core';

const MyPage: NextPage = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={4}>
          <SeverityTransition />
        </Grid.Col>
        <Grid.Col span={2}>
          <Grid>
            <Grid.Col span={12}>
              <IncompleteTask />
            </Grid.Col>
            <Grid.Col span={12}>
              <TodaysSeverity />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default MyPage;
