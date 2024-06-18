import { Grid, Skeleton } from '@mui/material';
import { featureFlagProps } from '../../../../constants';
import { FeatureFlag } from './FeatureFlag';

export const FeatureFlagSkeleton = () => (
  <Grid {...featureFlagProps}>
    <Skeleton variant="text">
      <FeatureFlag name="Random text" />
    </Skeleton>
  </Grid>
);
