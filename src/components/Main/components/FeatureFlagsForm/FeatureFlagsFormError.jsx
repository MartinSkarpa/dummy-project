import { Typography } from '@mui/material';
import { featureFlagsFormErrorSx } from './styles';

export const FeatureFlagsFormError = () => (
  <Typography variant="h6" sx={featureFlagsFormErrorSx}>
    Oops! That should not happen.
  </Typography>
);
