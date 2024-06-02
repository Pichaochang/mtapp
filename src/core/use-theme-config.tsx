import type { Theme } from '@react-navigation/native';
import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

import colors from '@/ui/colors';

const DarkTheme: Theme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    primary: '#406ad7',
    background: colors.charcoal[950],
    text: colors.charcoal[100],
    border: colors.charcoal[500],
    // card: colors.charcoal[850],
    card: 'transparent',
  },
};

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: colors.primary[400],
    primary: '#406ad7',
    background: colors.white,
  },
};

export function useThemeConfig() {
  const { colorScheme } = useColorScheme();

  if (colorScheme === 'dark') return DarkTheme;

  return LightTheme;
}
