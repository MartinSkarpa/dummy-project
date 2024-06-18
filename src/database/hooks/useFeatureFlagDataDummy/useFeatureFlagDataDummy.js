import { useCallback } from 'react';
import { useFeatureFlagDataStoreDummy } from '../useFeatureFlagDataStoreDummy';
import { promiseDelay } from './constants';

export const useFeatureFlagDataDummy = () => {
  const { setState, getState } = useFeatureFlagDataStoreDummy;

  const fetchFeatureFlagIdsListDummy = useCallback(
    (rejectPromise = false) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const { featureFlagData } = getState();

          if (!rejectPromise) {
            resolve(Object.keys(featureFlagData));
          } else {
            reject('Fetching feature flag ids was rejected by programmer.');
          }
        }, promiseDelay);
      }),
    [getState]
  );

  const fetchFeatureFlagDummy = useCallback(
    (name, rejectPromise = false) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const { featureFlagData } = getState();

          if (rejectPromise) {
            reject(`Fetching feature flag with ID "${name}" was rejected by programmer.`);

            return;
          }

          if (!Object.hasOwn(featureFlagData, name)) {
            reject(`Feature flag with ID "${name}" not found.`);

            return;
          }

          resolve({ name, value: featureFlagData[name] });
        }, promiseDelay);
      }),
    [getState]
  );

  const setFeatureFlagDummy = useCallback(
    (name, value) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const { featureFlagData } = getState();

          if (!Object.hasOwn(featureFlagData, name)) {
            reject(`Feature flag with ID "${name}" not found.`);

            return;
          }

          if (featureFlagData[name] === value) {
            resolve();

            return;
          }

          setState(({ featureFlagData }) => ({
            featureFlagData: { ...featureFlagData, [name]: value },
          }));

          resolve();
        }, promiseDelay);
      }),
    [getState, setState]
  );

  return {
    fetchFeatureFlagDummy,
    fetchFeatureFlagIdsListDummy,
    setFeatureFlagDummy,
  };
};
