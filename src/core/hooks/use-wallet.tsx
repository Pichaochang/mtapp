import { useMMKVBoolean } from 'react-native-mmkv';

import { storage } from '../storage';

const SElECT_CHAINS = 'SElECT_CHAINS';

export const useWallet = () => {
  const [chain, setChain] = useMMKVBoolean(SElECT_CHAINS, storage);
  if (chain === undefined) {
    return [true, setChain] as const;
  }
  return [chain, setChain] as const;
};
export const loadSelectedWallet = () => {
  const theme = storage.getString(IS_FIRST_TIME);
  if (theme !== undefined) {
    console.log('theme', theme);
  }
};
