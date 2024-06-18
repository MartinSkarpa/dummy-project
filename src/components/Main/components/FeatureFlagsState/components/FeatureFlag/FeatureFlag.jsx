import { Grid, Typography } from '@mui/material';
import { featureFlagProps } from '../../../../constants';
import { getFeatureFlagValueSx } from './styles';

export const FeatureFlag = ({ name, value }) => (
  <Grid {...featureFlagProps}>
    <Typography variant="body1" sx={getFeatureFlagValueSx(value)}>
      {name}: <span>{value ? 'Yes' : 'No'}</span>
    </Typography>
  </Grid>
);
