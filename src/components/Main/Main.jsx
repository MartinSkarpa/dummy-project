import { Container } from '@mui/material';
import { FeatureFlagsForm, FeatureFlagsState } from './components';
import { mainContainerSx } from './styles';

export const Main = () => (
  <Container fixed sx={mainContainerSx}>
    <FeatureFlagsForm />
    <FeatureFlagsState />
  </Container>
);
