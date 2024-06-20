import { Container, Grid } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { skeletonArray } from '../../constants';
import { useFeatureFlagDataDummy } from '../../../../database';
import { FeatureFlag, FeatureFlagSkeleton } from './components';

export const FeatureFlagsForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [featureFlags, setFeatureFlags] = useState([]);

  const { fetchFeatureFlagsDummy } = useFeatureFlagDataDummy();

  useEffect(() => {
    fetchFeatureFlagsDummy()
      .then((message) => setFeatureFlags(message))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [fetchFeatureFlagsDummy]);

  const renderFeatureFlags = useMemo(
    () =>
      isLoading
        ? skeletonArray.map((_, index) => <FeatureFlagSkeleton key={index} />)
        : Object.entries(featureFlags).map(([key, value]) => <FeatureFlag key={key} defaultValue={value} name={key} />),
    [featureFlags, isLoading]
  );

  return (
    <>
      <h1>Feature flags</h1>
      <Container>
        <Grid container id="featureFlagsFormContainer">
          {renderFeatureFlags}
        </Grid>
      </Container>
    </>
  );
};
