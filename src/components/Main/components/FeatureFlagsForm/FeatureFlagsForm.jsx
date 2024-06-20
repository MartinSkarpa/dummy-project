import { Button, CircularProgress, Grid } from '@mui/material';
import { useActionState, useMemo } from 'react';
import { FeatureFlag } from './components';
import { buttonSx, gridButtonsSx } from './styles';
import { useFeatureFlagDataDummy } from '../../../../database';

// eslint-disable-next-line react/prop-types
export const FeatureFlagsForm = ({ featureFlags }) => {
  const { setFeatureFlagsDummy } = useFeatureFlagDataDummy();

  const updateFeatureFlagData = (prevFeatureFlags, payload) => {
    const currentFeatureFlags = { ...prevFeatureFlags };

    Object.keys(currentFeatureFlags).forEach((key) => (currentFeatureFlags[key] = false));

    payload.forEach((_, key) => (currentFeatureFlags[key] = true));

    return setFeatureFlagsDummy(currentFeatureFlags)
      .then(() => currentFeatureFlags)
      .catch((err) => console.error(err));
  };

  // NOTE You can pass initialState to useActionState only once.
  const [formFeatureFlags, formAction, isPending] = useActionState(updateFeatureFlagData, featureFlags);

  const renderFeatureFlags = useMemo(
    () => Object.entries(formFeatureFlags).map(([name, value]) => <FeatureFlag key={name} name={name} value={value} />),
    [formFeatureFlags]
  );

  return (
    <form action={formAction}>
      <Grid container id="featureFlagsFormContainer">
        {renderFeatureFlags}
        <Grid item xs={12} sx={gridButtonsSx}>
          <Button type="submit" disabled={isPending} variant="contained" sx={buttonSx}>
            Submit
            {isPending && <CircularProgress size={14} color="inherit" />}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
