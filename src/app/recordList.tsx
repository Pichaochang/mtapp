import { useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

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
import { ArrowLeft, CopyIcon } from '@/ui/icons';
const styles = StyleSheet.create({
  line: {
    overflow: 'hidden', // 隐藏溢出内容
    opacity: 0.3,
    backgroundColor: 'transparent', // 将背景色设置为透明
    borderBottomWidth: 0.5, // 设置底部边框宽度
    width: '100%', // 设置线的长度
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});

const ThinLine = () => {
  return (
    <View
      className="mt-2 border-[#c9cacb] dark:border-[#f1f4f6]"
      style={styles.line}
    />
  );
};
// eslint-disable-next-line max-lines-per-function
export default function RecordList() {
  const { ref, present, dismiss } = useModal();
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const iconColor2 = colorScheme === 'dark' ? '#fff' : colors.neutral[500];
  const iconColor = colorScheme === 'dark' ? '#fff' : colors.neutral[400];
  // colors.neutral[500]
  console.log('iconColor', iconColor, colorScheme);
  const [list, setList] = useState([]);
  const initData = async () => {
    const chainId = (getItem('selectChain') || {}).chainId;
    const address = (getItem('selectWallet') || {}).address;
    if (!chainId || !address) return;
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

          <View className="mt-2 bg-[#fff]  p-4 dark:bg-[#18191b]">
            <Text className="my-2 font-bold">最近转账</Text>
            {list.map((item, index) => {
              return (
                <View key={index}>
                  <View className="flex flex-row items-center  justify-center  bg-white p-[5px] dark:bg-[#18191b]">
                    <View className="flex flex-1">
                      <Text>{item.transtionHash}</Text>
                      <Text className="text-xs text-[#bbbdbe] dark:text-[#747575]">
                        {item.createdAt}
                      </Text>
                    </View>
                    <CopyIcon className="ml-1 text-xs" color={iconColor2} />
                  </View>
                  <ThinLine />
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
