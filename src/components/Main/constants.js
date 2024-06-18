import { featureFlagGridSx } from './styles';

export const featureFlagProps = {
  item: true,
  md: 6,
  sx: featureFlagGridSx,
  xs: 12,
};

export const skeletonArray = Array(Math.ceil(Math.random() * 10)).fill(null);
