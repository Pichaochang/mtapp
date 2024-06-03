import { useColorScheme } from 'nativewind';
import React from 'react';

import type { Post } from '@/api';
import { Card } from '@/components/card';
import {
  colors,
  FocusAwareStatusBar,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from '@/ui';
import { ArrowBottom, LiriIcon, MenuuuuIcon } from '@/ui/icons';

// eslint-disable-next-line max-lines-per-function
export default function Market() {
  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => <Card {...item} />,
    []
  );
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? '#fff' : colors.neutral[500];
  // colors.neutral[500]
  console.log('iconColor', iconColor, colorScheme);
  // if (isError) {
  //   return (
  //     <View>
  //       <Text> Error Loading data </Text>
  //     </View>
  //   );
  // }
  return (
    <>
      <FocusAwareStatusBar />
      {/* 头部 */}
      <View className="flex h-20 flex-row items-center justify-between px-4 pt-12  dark:bg-[#18191b] ">
        <View className="flex-0 flex h-full flex-row items-center">
          <LiriIcon className="" color={iconColor} />
        </View>
        <View className="flex h-full w-full flex-1 flex-row items-center justify-center text-[#3b3b3b] dark:text-[#fff]">
          <View className="flex flex-row items-center">
            <Text className="px-2 text-[#5d5e5f] dark:text-[#5d5e5f]">
              兑换
            </Text>
            <View className="flex items-center text-lg font-bold	">
              <Text className="font-bold">跨链</Text>
            </View>
            <Text className="pl-2 text-[#5d5e5f] dark:text-[#5d5e5f]">
              行情
            </Text>
          </View>
        </View>
        <View className="flex-0 flex h-full flex-row items-center justify-end">
          <MenuuuuIcon className="ml-3" color={iconColor} />
        </View>
      </View>
      <ScrollView className="px-4 dark:bg-[#18191b] ">
        <SafeAreaView className="flex-1">
          <View className="flex-1  font-inter">
            <View className="mb-2 flex h-8 flex-row items-center justify-between text-[#3b3b3b] dark:text-[#fff]">
              <Text className="font-bold">选择跨链资产</Text>
              <Text>余额: 0</Text>
            </View>
            {/* bg-[#f6f6f6] */}
            <View className="flex h-16 flex-row items-center justify-between bg-[#f6f6f6] p-2 text-[#3b3b3b] dark:bg-[#0E0E0E] dark:text-[#fff]">
              <View className="w-[45%]">
                <View className="flex w-full flex-row  items-center justify-between rounded-md p-2  dark:bg-[#222325]">
                  <View className="flex  flex-row items-center">
                    <Image
                      className="mr-3 h-8 w-8"
                      source={require('../../assets/home/USDT.png')}
                    />
                    <Text>USDT</Text>
                  </View>
                  <View>
                    <ArrowBottom className="ml-3" color={iconColor} />
                  </View>
                </View>
              </View>
              <Text className="text-[#c1c1c1] dark:text-[#383838]">
                转出数量
              </Text>
            </View>

            <Text className="m-3  text-right text-[#c1c1c1]  dark:text-[#383838]">
              最小兑换~
            </Text>

            <View className="mb-2 flex h-8 flex-row items-center justify-between text-[#3b3b3b] dark:text-[#fff]">
              <Text className="font-bold">转出链~</Text>
              <Text>接收链</Text>
            </View>

            <View className="flex h-16 flex-row items-center justify-between bg-[#f6f6f6] p-2 text-[#3b3b3b] dark:bg-[#0E0E0E]  dark:text-[#fff]">
              <View className="w-[45%]">
                <View className="flex w-full flex-row  items-center justify-between rounded-md p-2 dark:bg-[#222325]">
                  <View className="flex  flex-row items-center">
                    <Image
                      className="mr-3 h-8 w-8"
                      source={require('../../assets/home/BNB.png')}
                    />
                    <Text>BNB</Text>
                  </View>
                  <View>
                    <ArrowBottom className="ml-3" color={iconColor} />
                  </View>
                </View>
              </View>
              <View className="w-[45%]">
                <View className="flex w-full flex-row  items-center justify-between rounded-md p-2 dark:bg-[#222325]">
                  <View className="flex  flex-row items-center">
                    <Image
                      className="mr-3 h-8 w-8"
                      source={require('../../assets/home/BCH.png')}
                    />
                    <Text>BCH</Text>
                  </View>
                  <View>
                    <ArrowBottom className="ml-3" color={iconColor} />
                  </View>
                </View>
              </View>
            </View>

            <Text className="m-3  text-right text-[#c1c1c1]  dark:text-[#383838]">
              最小兑换~
            </Text>

            <Text className="mb-2 flex h-8 flex-row items-center justify-between font-bold text-[#3b3b3b] dark:text-[#fff]">
              接收地址
            </Text>

            <View className="flex h-16 flex-row items-center justify-between rounded-md bg-[#f6f6f6] px-3 py-2 text-[#3b3b3b] dark:bg-[#0E0E0E] dark:text-[#fff]">
              <Text className=" text-black dark:text-[#383838]">
                请输入或选择接收地址
              </Text>
              <View className="flex h-4 flex-row">
                <View className="h-full w-[1px] dark:bg-[#222325]" />
                <ArrowBottom className="ml-3" color={iconColor} />
              </View>
            </View>
            <Text className="my-3 text-xs text-[#F14866] dark:text-[#F14866]">
              接收地址请勿填写交易所账号
            </Text>

            <View className="text-md flex h-12 w-full items-center justify-center rounded-md bg-[#3B6ADA] px-3  ">
              <Text className="text-white">确认</Text>
            </View>
            <View className="mt-4 flex rounded-lg border border-[#f6f6f6] p-2 dark:border dark:border-[#222325]">
              <View className="mb-2 flex flex-row items-center justify-between">
                <Text className="text-xs text-[#a7a7a7] dark:text-[#717172]">
                  手续费
                </Text>
                <View className="text-black dark:text-[#212223]">
                  <ArrowBottom className="ml-3" color={iconColor} />
                </View>
              </View>
              <View className="mb-2 flex flex-row items-center justify-between">
                <Text className="text-xs text-[#a7a7a7] dark:text-[#717172]">
                  最大兑换数量
                </Text>
                <View className="text-black dark:text-[#212223]">
                  <ArrowBottom className="ml-3" color={iconColor} />
                </View>
              </View>
              <View className="mb-2 flex flex-row items-center justify-between">
                <Text className="text-xs text-[#a7a7a7] dark:text-[#717172]">
                  兑换路径
                </Text>
                <View className="text-black dark:text-[#212223]">
                  <ArrowBottom className="ml-3" color={iconColor} />
                </View>
              </View>
            </View>

            <View className="m-2 flex h-8 flex-row items-center justify-between text-[#3b3b3b] dark:text-[#fff]">
              <Text className="font-bold">最近一条记录</Text>
              <Text className='className="text-xs dark:text-[#717172]" text-[#a7a7a7]'>
                更多记录
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
    // font-semibold font-inter
  );
}
