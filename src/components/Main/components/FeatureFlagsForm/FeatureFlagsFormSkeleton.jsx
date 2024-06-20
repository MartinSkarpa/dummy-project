import { Button, Grid, Skeleton } from '@mui/material';
import { skeletonArray } from '../../constants';
import { FeatureFlagSkeleton } from './components';
import { gridButtonsSx } from './styles';

export const FeatureFlagsFormSkeleton = () => (
  <Grid container id="featureFlagsFormContainer">
    {skeletonArray.map((_, index) => (
      <FeatureFlagSkeleton key={index} />
    ))}
    <Grid item xs={12} sx={gridButtonsSx}>
      <Skeleton variant="rounded">
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Skeleton>
    </Grid>
  </Grid>
);
