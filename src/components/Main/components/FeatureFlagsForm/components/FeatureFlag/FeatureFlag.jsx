import { FormControlLabel, Grid, Switch } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { featureFlagProps } from '../../../../constants';
import { useFeatureFlagDataDummy } from '../../../../../../database';

// eslint-disable-next-line react/prop-types
export const FeatureFlag = ({ name }) => {
  const [value, setValue] = useState(false);

  const { fetchFeatureFlagDummy, setFeatureFlagDummy } = useFeatureFlagDataDummy();

  const handleSwitchClick = useCallback(() => {
    setFeatureFlagDummy(name, !value)
      .then(() => setValue(!value))
      .catch((err) => console.error('Error updating feature flag: ', err));
  }, [name, setFeatureFlagDummy, value]);

  useEffect(() => {
    fetchFeatureFlagDummy(name)
      .then(({ value }) => setValue(value))
      .catch((err) => console.error(err));
  }, [fetchFeatureFlagDummy, name]);

  return (
    <Grid {...featureFlagProps}>
      <FormControlLabel label={name} control={<Switch checked={value} onClick={handleSwitchClick} />} />
    </Grid>
  );
};
