import { Container, Grid } from '@mui/material';
import { useMemo } from 'react';
import { skeletonArray } from '../../constants';
import { useFeatureFlagDataStoreDummy } from "../../../../database";
import { FeatureFlag, FeatureFlagSkeleton } from './components';

export const FeatureFlagsState = () => {
  const { featureFlagData } = useFeatureFlagDataStoreDummy();

  const renderFeatureFlags = useMemo(
    () =>
      featureFlagData === undefined
        ? skeletonArray.map((_, index) => <FeatureFlagSkeleton key={index} />)
        : Object.entries(featureFlagData).map(([name, value]) => <FeatureFlag key={name} name={name} value={value} />),
    [featureFlagData]
  );

  return (
    <>
      <h1>Actual state</h1>
      <Container>
        <Grid container id="featureFlagsStateContainer">
          {renderFeatureFlags}
        </Grid>
      </Container>
    </>
  );
};
