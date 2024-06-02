import * as React from 'react';

import type { TxKeyPath } from '@/core';
import { Pressable, View } from '@/ui';

type ItemProps = {
  text?: TxKeyPath;
  value?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
};

export const ItemIcon = ({ text, value, icon, onPress }: ItemProps) => {
  const isPressable = onPress !== undefined;
  return (
    <Pressable
      onPress={onPress}
      pointerEvents={isPressable ? 'auto' : 'none'}
      className="flex-row items-center justify-between"
    >
      <View className="flex-row items-center">
        {icon && <View>{icon}</View>}
      </View>
      {/* <View className="flex-row items-center">
        <Text className="text-neutral-600 dark:text-white">{value}</Text>
        {isPressable && (
          <View className="pl-2">
            <ArrowRight />
          </View>
        )}
      </View> */}
    </Pressable>
  );
};
