import { CircularProgress, FormControlLabel, Grid, Switch, Typography } from '@mui/material';
import { startTransition, useCallback, useOptimistic, useState } from 'react';
import { featureFlagProps } from '../../../../constants';
import { useFeatureFlagDataDummy } from '../../../../../../database';
import { circularProgressSx, errorSx } from './styles';

// eslint-disable-next-line react/prop-types
export const FeatureFlag = ({ defaultValue, name }) => {
  const [value, setValue] = useState(defaultValue);
  const [valueOptimistic, setValueOptimistic] = useOptimistic(value);
  const [error, setError] = useState(null);

  const { setFeatureFlagDummy } = useFeatureFlagDataDummy();

  // NOTE Operation must be in tag "form" or in "startTransition" function.
  // NOTE Operation must be async/await in order to make this stuff working.
  const handleSwitchClick = useCallback(() => {
    // NOTE Other states (useState) must be mutated outside the transition to take
    //  an immediate effect.
    setError(null);

    startTransition(async () => {
      setValueOptimistic(!value);

      try {
        await setFeatureFlagDummy(name, !value);

        setValue(!value);
      } catch (err) {
        console.error('Error updating feature flag: ', err);
        setError('Ooops!');
      }
    });
  }, [name, setFeatureFlagDummy, setValueOptimistic, value]);

  const isPending = value !== valueOptimistic;
  const label = (
    <>
      <span>{name}</span>
      {isPending && <CircularProgress size={16} sx={circularProgressSx} />}
      {error && (
        <Typography component="span" variant="body1" sx={errorSx}>
          {error}
        </Typography>
      )}
    </>
  );

  return (
    <Grid {...featureFlagProps}>
      <FormControlLabel label={label} control={<Switch checked={valueOptimistic} disabled={isPending} onClick={handleSwitchClick} />} />
    </Grid>
  );
};
