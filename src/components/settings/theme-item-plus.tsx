import { useColorScheme } from 'nativewind';
import React from 'react';

import { ItemIcon } from '@/components/settings/itemIcon';
import type { ColorSchemeType } from '@/core';
import { useSelectedTheme } from '@/core';
import { colors } from '@/ui';
import { SwtichThemeIcon } from '@/ui/icons';

export const ThemeItem = () => {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? '#fff' : colors.neutral[500];
  const onSelect = React.useCallback(() => {
    console.log('selectedTheme', selectedTheme);
    const val: ColorSchemeType = selectedTheme === 'dark' ? 'light' : 'dark';
    setSelectedTheme(val as ColorSchemeType);
  }, [selectedTheme, setSelectedTheme]);
  return (
    <>
      <ItemIcon
        icon={<SwtichThemeIcon color={iconColor} />}
        onPress={onSelect}
      />
    </>
  );
};
