import { useColorScheme } from 'nativewind';
import React from 'react';

import { ThemeItem } from '@/components/settings/theme-item-plus';
import { colors, SafeAreaView, ScrollView, Text, View } from '@/ui';
import {
  AboutUsIcon,
  AddressIcon,
  ArrowRight,
  AssetIcon,
  FreiendIcon,
  RecordIcon,
  Ring,
  SettingIcon,
  WalletAdmiinIcon,
  WalletzyIcon,
} from '@/ui/icons';

// eslint-disable-next-line max-lines-per-function
export default function MyPage() {
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? '#fff' : colors.neutral[400];
  console.log('iconColor', iconColor, colorScheme);

  return (
    <>
      <View className="mt-6 flex h-14 flex-row items-center justify-between bg-[#fff] px-4 dark:bg-[#18191b]">
        <Text className="w-1/3 text-black" />
        <View className="flex  w-1/3 items-center justify-center">
          <Text className="text-center text-black">我的</Text>
        </View>
        <View className="flex  w-1/3  flex-row items-center justify-end">
          <ThemeItem />
          <Ring className="ml-5" color={iconColor} />
        </View>
      </View>
      <ScrollView className="bg-[#f1f4f6] dark:bg-[#0e0e0e]">
        <SafeAreaView className=" flex-1">
          {/* 第一部分 */}
          <View className="mb-2 flex flex-col bg-[#fff]  px-4 dark:bg-[#18191B]">
            <View className="flex h-14 w-full flex-row items-center justify-between">
              <View className="flex flex-row items-center justify-between">
                <AssetIcon className="text-base" color={iconColor} />
                <Text className="ml-2 text-base">资产总览</Text>
              </View>
              <ArrowRight width={14} className="text-base" color={iconColor} />
            </View>
            <View className="flex h-14 w-full flex-row items-center justify-between">
              <View className="flex flex-row items-center justify-between">
                <WalletAdmiinIcon className="text-base" color={iconColor} />
                <Text className="ml-2 text-base">钱包管理</Text>
              </View>
              <ArrowRight width={14} className="text-base" color={iconColor} />
            </View>
            <View className="flex h-14 w-full flex-row items-center justify-between">
              <View className="flex flex-row items-center justify-between">
                <RecordIcon className="text-base" color={iconColor} />
                <Text className="ml-2 text-base">交易记录</Text>
              </View>
              <ArrowRight width={14} className="text-base" color={iconColor} />
            </View>
          </View>

          <View className="my-2 flex flex-col bg-[#fff]  px-4 dark:bg-[#18191B]">
            <View className="flex h-14 w-full flex-row items-center justify-between">
              <View className="flex flex-row items-center justify-between">
                <AddressIcon className="text-base" color={iconColor} />
                <Text className="ml-2 text-base">地址簿</Text>
              </View>
              <ArrowRight width={14} className="text-base" color={iconColor} />
            </View>
          </View>

          <View className="my-2 flex flex-col bg-[#fff]  px-4 dark:bg-[#18191B]">
            <View className="flex h-14 w-full flex-row items-center justify-between">
              <View className="flex flex-row items-center justify-between">
                <FreiendIcon className="text-base" color={iconColor} />
                <Text className="ml-2 text-base">邀请好友</Text>
              </View>
              <ArrowRight width={14} className="text-base" color={iconColor} />
            </View>
            <View className="flex h-14 w-full flex-row items-center justify-between">
              <View className="flex flex-row items-center justify-between">
                <WalletzyIcon className="text-base" color={iconColor} />
                <Text className="ml-2 text-base">钱包指引</Text>
              </View>
              <ArrowRight width={14} className="text-base" color={iconColor} />
            </View>
            <View className="flex h-14 w-full flex-row items-center justify-between">
              <View className="flex flex-row items-center justify-between">
                <AboutUsIcon className="text-base" color={iconColor} />
                <Text className="ml-2 text-base">关于我们</Text>
              </View>
              <ArrowRight width={14} className="text-base" color={iconColor} />
            </View>
            <View className="flex h-14 w-full flex-row items-center justify-between">
              <View className="flex flex-row items-center justify-between">
                <SettingIcon className="text-base" color={iconColor} />
                <Text className="ml-2 text-base">系统设置</Text>
              </View>
              <ArrowRight width={14} className="text-base" color={iconColor} />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
