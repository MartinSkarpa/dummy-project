import { Grid } from '@mui/material';
import { use, useMemo } from 'react';
import { FeatureFlag } from './components';

// eslint-disable-next-line react/prop-types
export const FeatureFlagsForm = ({ featureFlagsDummyPromise }) => {
  // NOTE Promise should be created in parent component.
  const featureFlags = use(featureFlagsDummyPromise);

  const renderFeatureFlags = useMemo(
    () => Object.entries(featureFlags).map(([name, value]) => <FeatureFlag key={name} name={name} value={value} />),
    [featureFlags]
  );

  return (
    <Grid container id="featureFlagsFormContainer">
      {renderFeatureFlags}
    </Grid>
  );
};
