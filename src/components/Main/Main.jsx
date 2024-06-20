import { Container } from '@mui/material';
import { FeatureFlagsForm, FeatureFlagsFormError, FeatureFlagsFormSkeleton, FeatureFlagsState } from './components';
import { mainContainerSx } from './styles';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useFeatureFlagDataDummy } from '../../database';

export const Main = () => {
  const { fetchFeatureFlagsDummy } = useFeatureFlagDataDummy();

  return (
    <Container fixed sx={mainContainerSx}>
      <h1>Feature flags</h1>
      <Container>
        <ErrorBoundary fallback={<FeatureFlagsFormError />}>
          <Suspense fallback={<FeatureFlagsFormSkeleton />}>
            <FeatureFlagsForm featureFlagsDummyPromise={fetchFeatureFlagsDummy()} />
          </Suspense>
        </ErrorBoundary>
      </Container>
      <FeatureFlagsState />
    </Container>
  );
};
