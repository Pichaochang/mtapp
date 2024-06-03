import { useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { getTxList } from '@/api';
import { getItem } from '@/core/storage';
import {
  colors,
  FocusAwareStatusBar,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  useModal,
  View,
} from '@/ui';
import { ArrowLeft } from '@/ui/icons';

// eslint-disable-next-line max-lines-per-function
export default function RecordList() {
  const { ref, present, dismiss } = useModal();
  const router = useRouter();

  // const { data, isPending, isError } = usePosts();
  // const renderItem = React.useCallback(
  //   ({ item }: { item: Post }) => <Card {...item} />,
  //   []
  // );
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? '#fff' : colors.neutral[400];
  // colors.neutral[500]
  console.log('iconColor', iconColor, colorScheme);
  const [list, setList] = useState([]);
  const initData = async () => {
    const chainId = (getItem('selectChain') || {}).chainId;
    const address = (getItem('selectWallet') || {}).address;
    console.log('getTxList', chainId, address);

    const { data } = await getTxList(chainId, address);
    setList(data || []);
    console.log('getTxList', data);
  };
  useEffect(() => {
    initData();
  }, []);
  return (
    <>
      <FocusAwareStatusBar />
      {/* 头部 */}
      <View className="flex h-20 flex-row  items-center px-4 pt-12 ">
        <View className="flex h-full w-1/3 flex-row items-center">
          <ArrowLeft
            onPress={() => {
              router.push('/');
            }}
            className=""
            color={iconColor}
          />
          <Text
            onPress={() => {
              router.push('/');
            }}
          >
            返回
          </Text>
        </View>
        <Text className="w-1/3 flex-1 text-center text-lg">转账记录</Text>
        <Text className="w-1/3 " />

        {/* <View /> */}
      </View>
      <ScrollView className="bg-[#f7f7f7] px-4 dark:bg-[#0e0e0e]">
        <SafeAreaView className="flex-1">
          <View className="flex flex-row items-center justify-around ">
            <TouchableOpacity
              onPress={() => {
                router.push('/recordOp');
              }}
              className="flex flex-1 flex-col  items-center justify-center  rounded-[4px]  bg-white py-4 dark:bg-[#18191b]"
            >
              <Image
                className="flex-0  h-10 w-10 "
                source={require('../assets/home/z1.png')}
              />
              <Text className="mt-2">直接转账</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                router.push('/recordOp');
              }}
              className="ml-4 flex flex-1 flex-col items-center justify-center rounded-[4px]  bg-white py-4 dark:bg-[#18191b]"
            >
              <Image
                className="flex-0 h-10 w-10 "
                source={require('../assets/home/z2.png')}
              />
              <Text className="mt-2">地址簿转账</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.push('/recordOp');
              }}
              className="ml-4 flex flex-1 flex-col items-center  justify-center rounded-[4px]  bg-white py-4 dark:bg-[#18191b]"
            >
              <Image
                className="flex-0  h-10 w-10 "
                source={require('../assets/home/z3.png')}
              />
              <Text className="mt-2">扫码转账</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-2 bg-[#f1f4f6]  p-4 dark:bg-[#18191b]">
            <Text className="my-2 font-bold">最近转账</Text>
            {list.map((item, index) => {
              return (
                <View
                  key={index}
                  className=" bg-white px-2 py-4 dark:bg-[#18191b]"
                >
                  <Text>{item.transtionHash}</Text>
                  <Text className="text-xs dark:text-[#747575]">
                    {item.createdAt}
                  </Text>
                </View>
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
    // font-semibold font-inter
  );
}
