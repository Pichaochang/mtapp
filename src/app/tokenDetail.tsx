/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable max-lines-per-function */
import { useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import {
  colors,
  FocusAwareStatusBar,
  Image,
  Radio,
  SafeAreaView,
  ScrollView,
  Text,
  useModal,
  View,
} from '@/ui';
import { ArrowLeft, ArrowRight, CopyIcon, SearchIcon } from '@/ui/icons';

export default function RecordList() {
  const RadioExample = () => {
    const [selected, setSelected] = React.useState(false);
    return (
      <Radio.Root
        checked={selected}
        onChange={setSelected}
        accessibilityLabel="radio button"
        className="pb-2"
      >
        <Radio.Icon checked={selected} />
        <Radio.Label
          className="my-2 text-xs  text-[#a7a7a7] dark:text-[#a7a7a7]"
          text="不在提醒"
        />
      </Radio.Root>
    );
  };
  const { ref: ref1, present: present1, dismiss: dismiss1 } = useModal();
  const { ref: ref2, present: present2, dismiss: dismiss2 } = useModal();

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
  // if (isError) {
  //   return (
  //     <View>
  //       <Text> Error Loading data </Text>
  //     </View>
  //   );
  // }
  const styles = StyleSheet.create({
    line: {
      overflow: 'hidden', // 隐藏溢出内容
      opacity: 0.1,
      backgroundColor: 'transparent', // 将背景色设置为透明
      borderBottomWidth: 0.5, // 设置底部边框宽度
      width: '100%', // 设置线的长度
    },
  });
  const ThinLine = () => {
    return (
      <View
        className="mt-2 border-[#f1f4f6] dark:border-[#f1f4f6]"
        style={styles.line}
      />
    );
  };
  const styles2 = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 20,
      width: '100%',
      alignItems: 'center',
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 12,
    },
  });
  const BottomButton = ({ onPress }) => {
    return (
      <View className="flex w-full flex-row px-4" style={styles2.container}>
        <TouchableOpacity
          className="flex-1 bg-[#66B08F] dark:bg-[#66B08F]"
          onPress={onPress}
          style={styles2.button}
        >
          <Text style={styles2.buttonText}>转账</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="ml-2 flex-1 bg-[#3B6ADA] dark:bg-[#3B6ADA]"
          onPress={onPress}
          style={styles2.button}
        >
          <Text style={styles2.buttonText}>收款</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="ml-2 flex-1 bg-[#18191B] dark:bg-[#18191B]"
          onPress={onPress}
          style={styles2.button}
        >
          <Text style={styles2.buttonText}>兑换</Text>
        </TouchableOpacity>
      </View>
    );
  };
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
        <Text className="w-1/3 flex-1 text-center text-lg">转账</Text>
        <Text className="w-1/3 " />

        {/* <View /> */}
      </View>
      <ScrollView className="bg-[#f1f4f6]">
        <SafeAreaView className="flex-1 ">
          <View className="bg-[#fff] px-4 py-2 dark:bg-[#18191B] ">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center ">
                <Image
                  className="flex-0  my-2 mr-3 h-10 w-10 rounded-[20px]"
                  source={{
                    uri: 'https://img2.imgtp.com/2024/06/01/ho3GpugY.png',
                  }}
                />
                <Text>BNB</Text>
              </View>
              <View className="flex flex-row items-center justify-end">
                <Text className="mr-3 text-left text-xs text-[#a7a7a7] dark:text-[#717172]">
                  项目详情
                </Text>
                <ArrowRight color="#a7a7a7" width={7} height={7} />
              </View>
            </View>
            <ThinLine />

            <View className="mb-2 mt-4 flex flex-row items-center justify-between">
              <Text className="">钱包余额</Text>
              <View className="flex items-center text-right">
                <Text className="text-right text-xs">0.0001BNB</Text>
                <Text className="text-xs text-[#474849] dark:text-[#474849]">
                  ≈¥27.45
                </Text>
              </View>
            </View>
          </View>

          <View className="my-4 bg-[#fff]  px-4 py-2 dark:bg-[#18191B] ">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center ">
                <Image
                  className="flex-0  my-2 mr-3 h-10 w-10 rounded-[20px]"
                  source={require('../assets/home/dex.png')}
                />
                <Text>DEX价格:</Text>
                <Text className="text-[#CA2832] dark:text-[#CA2832]">
                  ¥4167.39
                </Text>
              </View>
              <View className="flex flex-row items-center justify-end">
                <Text className="mr-2 text-xs dark:text-[#a7a7a7]">去交易</Text>
                {/* <ArrowRight color={iconColor} width={10} height={10} /> */}
                <ArrowRight color="#a7a7a7" width={7} height={7} />
              </View>
            </View>
          </View>

          <View className="my-4 flex w-full flex-row items-center justify-between  bg-[#fff] px-4 text-[#3b3b3b] dark:text-[#fff]">
            <View className="flex  flex-row items-center">
              {/* border-b-2 border-[#717172]  dark:border-[#ffffff]"*/}
              <View className="mr-3 flex items-center py-2 text-lg">
                <View>
                  <Text>全部</Text>
                </View>
                <View className="mt-[2px] h-[3px] w-[25px] rounded-sm  bg-[#717172] dark:bg-[#ffffff]" />
              </View>

              <View className="mr-3 ">
                <Text className="text-[#a7a7a7] dark:text-[#717172]">转入</Text>
              </View>
              <View>
                <Text className="text-[#a7a7a7] dark:text-[#717172]">转出</Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-end">
              <View className="flex h-8 flex-row items-center justify-center rounded-[20px] p-2 dark:bg-[#232428]">
                <SearchIcon className="" color={iconColor} />
                <Text className="mr-10 text-xs">&nbsp;&nbsp;搜索</Text>
              </View>
            </View>
          </View>

          {/* token list */}
          <View className="w-full bg-[#fff] px-4">
            <View className="flex  w-full flex-row items-center justify-center">
              <Image
                className="flex-0  my-2 mr-3 h-10 w-10 rounded-[20px]"
                source={{
                  uri: 'https://img2.imgtp.com/2024/06/01/ho3GpugY.png',
                }}
              />
              <View className=" w-full flex-1 border-b border-[#717172] py-2	dark:border-[#232428]">
                <TouchableOpacity className="flex  flex-row items-center justify-between">
                  <View>
                    <View className="flex flex-row items-center justify-center text-right text-[#3b3b3b] dark:text-[#fff]">
                      <Text className="text-[#3b3b3b] dark:text-[#fff]">
                        0xF715f...f974B3cd
                      </Text>
                      <CopyIcon className="ml-1 text-xs" color={iconColor} />
                    </View>
                    <Text className="text-left text-xs text-[#a7a7a7] dark:text-[#717172]">
                      01/02 23:05:11
                    </Text>
                  </View>
                  <View>
                    <View className="text-right text-[#3b3b3b] dark:text-[#fff]">
                      <Text>0.006556</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <BottomButton
        onPress={() => {
          router.push('/recordList');
        }}
      />
    </>
    // font-semibold font-inter
  );
}
