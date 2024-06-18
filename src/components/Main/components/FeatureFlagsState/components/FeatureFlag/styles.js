export const getFeatureFlagValueSx =
  (value) =>
  ({ typography, palette }) => ({
    '& > span': {
      color: value ? palette.success.main : palette.error.main,
      fontWeight: typography.fontWeightBold,
    },
  });
