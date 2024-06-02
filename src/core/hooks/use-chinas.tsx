import { useMMKVBoolean } from 'react-native-mmkv';

import { storage } from '../storage';

const SElECT_CHAINS = 'SElECT_CHAINS';

export const useChain = () => {
  const [chain, setChain] = useMMKVBoolean(SElECT_CHAINS, storage);
  if (chain === undefined) {
    return [true, setChain] as const;
  }
  return [chain, setChain] as const;
};
export const loadSelectedChain = () => {
  const theme = storage.getString(SElECT_CHAINS);
  if (theme !== undefined) {
    console.log('theme', theme);
    // setChain(theme);
  }
};
