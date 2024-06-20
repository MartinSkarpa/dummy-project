import { Container, Grid } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { skeletonArray } from '../../constants';
import { useFeatureFlagDataDummy } from '../../../../database';
import { FeatureFlag, FeatureFlagSkeleton } from './components';

export const FeatureFlagsForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [featureFlagIdsList, setFeatureFlagIdsList] = useState([]);

  const { fetchFeatureFlagIdsListDummy } = useFeatureFlagDataDummy();

  useEffect(() => {
    fetchFeatureFlagIdsListDummy()
      .then((message) => setFeatureFlagIdsList(message))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [fetchFeatureFlagIdsListDummy]);

  const renderFeatureFlags = useMemo(
    () =>
      isLoading ? skeletonArray.map((_, index) => <FeatureFlagSkeleton key={index} />) : featureFlagIdsList.map((key) => <FeatureFlag key={key} name={key} />),
    [featureFlagIdsList, isLoading]
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
