import { FormControlLabel, Grid, Switch } from '@mui/material';
import { useFormStatus } from 'react-dom';
import { featureFlagProps } from '../../../../constants';

// eslint-disable-next-line react/prop-types
export const FeatureFlag = ({ name, value }) => {
  // NOTE Property "pending" from useFormStatus will cause re-render of this component, same like
  //  passing a property from a parent component.
  const { pending } = useFormStatus();

  return (
    <Grid {...featureFlagProps}>
      <FormControlLabel label={name} control={<Switch defaultChecked={value} disabled={pending} name={name} />} />
    </Grid>
  );
};
