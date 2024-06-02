import { useColorScheme } from 'nativewind';
import React from 'react';

import {
  colors,
  FocusAwareStatusBar,
  Image,
  InputPlus,
  ScrollView,
  Text,
  View,
} from '@/ui';
import { ArrowRight, ScanIcon } from '@/ui/icons';
export default function FindPage() {
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? colors.neutral[400] : '#070707';
  return (
    <>
      <FocusAwareStatusBar />

      <ScrollView>
        <View className="flex-1 px-4 pt-8 ">
          <View className="flex h-12 flex-row items-center justify-between">
            <InputPlus placeholder="搜索本地DApp或输入链接访问" />
            <ScanIcon className="ml-4 shrink-0" color={iconColor} />
          </View>

          <View>
            <Image
              className="h-56 w-full rounded-t-xl"
              source={require('../../assets/findPage/back.png')}
              contentFit="contain"
            />
          </View>

          <View>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-lg">我的 DApp</Text>
              <Text className="text-base text-[#000] dark:text-[#373839]">
                编辑
              </Text>
            </View>
            <View>
              <Image source={require('../../assets/findPage/findPage.png')} />
            </View>

            <View className="mt-2 flex h-14 w-full flex-row items-center justify-between rounded-[6px] bg-[#f1f4f6] px-2 pr-4 dark:bg-[#232428]">
              <View className="flex flex-row items-center justify-between">
                <Image
                  className="h-8 w-8 rounded-t-xl"
                  source={require('../../assets/findPage/findPage.png')}
                  contentFit="contain"
                />
                <Text className="ml-4 text-base">如何收藏 DApp与 TIP协议</Text>
              </View>
              <ArrowRight className="text-base" color={iconColor} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
