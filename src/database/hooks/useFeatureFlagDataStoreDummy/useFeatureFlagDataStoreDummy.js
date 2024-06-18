import { create } from 'zustand';
import { featureFlagsListDummy } from '../constants';

export const useFeatureFlagDataStoreDummy = create(() => ({
  featureFlagData: featureFlagsListDummy,
}));
