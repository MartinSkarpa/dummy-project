import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { navbarBrandSx } from './styles';

export const Navbar = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar>
        <Typography variant="h6" noWrap component="a" href="/" sx={navbarBrandSx}>
          Flagio
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
);
