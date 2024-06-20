import { Grid } from '@mui/material';
import { skeletonArray } from '../../constants';
import { FeatureFlagSkeleton } from './components';

export const FeatureFlagsFormSkeleton = () => (
  <Grid container id="featureFlagsFormContainer">
    {skeletonArray.map((_, index) => (
      <FeatureFlagSkeleton key={index} />
    ))}
  </Grid>
);
