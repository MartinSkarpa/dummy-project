import { Container } from '@mui/material';
import { FeatureFlagsForm, FeatureFlagsFormSkeleton, FeatureFlagsState } from './components';
import { mainContainerSx } from './styles';
import { useFeatureFlagDataDummy } from '../../database';
import { useEffect, useState } from 'react';

export const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [featureFlags, setFeatureFlags] = useState({});

  const { fetchFeatureFlagsDummy } = useFeatureFlagDataDummy();

  useEffect(() => {
    fetchFeatureFlagsDummy()
      .then((message) => setFeatureFlags(message))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [fetchFeatureFlagsDummy]);

  return (
    <Container fixed sx={mainContainerSx}>
      <h1>Feature flags</h1>
      <Container>
        {isLoading && <FeatureFlagsFormSkeleton />}
        {!isLoading && <FeatureFlagsForm featureFlags={featureFlags} isLoading={isLoading} />}
      </Container>
      <FeatureFlagsState />
    </Container>
  );
};
