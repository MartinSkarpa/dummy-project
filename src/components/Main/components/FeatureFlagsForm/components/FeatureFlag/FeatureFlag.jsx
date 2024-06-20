import { FormControlLabel, Grid, Switch } from '@mui/material';
import { useCallback, useState } from 'react';
import { featureFlagProps } from '../../../../constants';
import { useFeatureFlagDataDummy } from '../../../../../../database';

// eslint-disable-next-line react/prop-types
export const FeatureFlag = ({ name, value }) => {
  const [valueState, setValueState] = useState(value);

  const { setFeatureFlagDummy } = useFeatureFlagDataDummy();

  const handleSwitchClick = useCallback(() => {
    setFeatureFlagDummy(name, !valueState)
      .then(() => setValueState(!valueState))
      .catch((err) => console.error('Error updating feature flag: ', err));
  }, [name, setFeatureFlagDummy, valueState]);

  return (
    <Grid {...featureFlagProps}>
      <FormControlLabel label={name} control={<Switch checked={valueState} onClick={handleSwitchClick} />} />
    </Grid>
  );
};
