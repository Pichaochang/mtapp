/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable max-lines-per-function */
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { transform } from '@/api';
import { getItem } from '@/core/storage';
import {
  colors,
  FocusAwareStatusBar,
  Image,
  Modal,
  Radio,
  SafeAreaView,
  ScrollView,
  Text,
  useModal,
  View,
} from '@/ui';
import { ArrowLeft, ArrowRight, RefreshIcon, ScanIcon } from '@/ui/icons';

export default function RecordList() {
  const [walletname] = useState((getItem('selectWallet') || {}).name);
  const [chainId] = useState((getItem('selectChain') || {}).chainId);
  const [ethName] = useState((getItem('selectChain') || {}).ethName);
  const [chainName] = useState((getItem('selectChain') || {}).chainName);

  const [address] = useState((getItem('selectWallet') || {}).address);
  const [text, setText] = useState('');
  const [Num, setNum] = useState('');

  useEffect(() => { }, []);
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
  const iconColor2 = colorScheme === 'dark' ? '#474849' : '#474849';
  // text-[#474849] dark:text-[#474849]
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
      opacity: 0.3,
      backgroundColor: 'transparent', // 将背景色设置为透明
      borderBottomWidth: 0.5, // 设置底部边框宽度
      width: '100%', // 设置线的长度
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
  const styles2 = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 20,
      width: '100%',
      alignItems: 'center',
    },
    button: {
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
    },
  });
  const BottomButton = ({ onPress }) => {
    return (
      <View className="w-full px-4" style={styles2.container}>
        <TouchableOpacity
          className="w-full bg-[#3B6ADA] dark:bg-[#3B6ADA]"
          onPress={onPress}
          style={styles2.button}
        >
          <Text className="text-white" style={styles2.buttonText}>
            确认
          </Text>
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
      <ScrollView className="bg-[#f1f4f6] dark:bg-[#0e0e0e]">
        <SafeAreaView className="flex-1">
          <View className=" bg-white px-4  py-2  dark:bg-[#18191B] ">
            <View className="flex flex-row items-center justify-between">
              <Text>收款地址</Text>
              <View className="flex flex-row items-center justify-end">
                <Text className="mr-2 text-xs text-[#3B6ADA] dark:text-[#304382]">
                  选择钱包
                </Text>
                <ArrowRight color="#3B6ADA" width={10} height={10} />
              </View>
            </View>
            <View className="flex flex-row items-center justify-between">
              {/* <Text className="text-xs text-[#474849] dark:text-[#474849]">
                <TextInput
                  style={{ height: 20 }}
                  onChangeText={(text) => setText(text)}
                  value={text}
                />
              </Text> */}
              <TextInput
                placeholder="输入或粘贴钱包地址"
                className="text-xs text-[#474849] dark:text-[#474849]"
                style={{ height: 20 }}
                placeholderTextColor={iconColor2}
                onChangeText={(text) => setText(text)}
                value={text}
              />
              <View className="flex flex-row items-center justify-end">
                <ScanIcon color="#3B6ADA" width={14} height={14} />
              </View>
            </View>
          </View>

          <View className="my-4 bg-white  px-4 py-2 dark:bg-[#18191B] ">
            <View className="flex flex-row items-center justify-between">
              <Text>转账金额</Text>
              <View className="flex flex-row items-center justify-end">
                <Text className="mr-2 text-xs ">{ethName}</Text>
                <ArrowRight color={iconColor} width={10} height={10} />
              </View>
            </View>
            <View className="mt-4 flex flex-row items-center justify-between">
              {/* <Text className="text-xs text-[#474849] dark:text-[#474849]">
                请输入数量
              </Text> */}
              <TextInput
                placeholderTextColor={iconColor2}
                className="text-xs text-[#474849] dark:text-[#474849]"
                placeholder="请输入数量"
                style={{ height: 20 }}
                onChangeText={(text) => setNum(text)}
                value={Num}
              />
              <View className="flex flex-row items-center justify-end">
                <ScanIcon color="#3B6ADA" width={14} height={14} />
              </View>
            </View>
            <ThinLine />
            <View className="mb-2 mt-4 flex flex-row items-center justify-between">
              <Text className="">钱包余额</Text>
              <Text className="text-xs">0.0001 {ethName}</Text>
            </View>
          </View>

          <View className="my-4 bg-white  px-4 py-2 dark:bg-[#18191B] ">
            <View className="flex flex-row items-center justify-between">
              <Text>网络费用</Text>
              <View className="flex flex-row items-center justify-end">
                <RefreshIcon color="#3B6ADA" width={10} height={10} />
                <Text className="mr-2 text-xs text-[#3B6ADA] dark:text-[#304382]">
                  9秒后更新
                </Text>
              </View>
            </View>
            <ThinLine />

            <View className="mt-4 flex flex-row items-center justify-between px-4">
              <View className="flex flex-row items-center">
                <Image
                  className="h-6 w-6"
                  contentFit="cover"
                  source={require('../assets/home/zxc.png')}
                />
                <Text className="ml-1 text-[12px]">推荐</Text>
              </View>
              <View className="flex flex-row items-center justify-end">
                <Text className="mr-2 text-xs text-[#3B6ADA] dark:text-[#304382]">
                  预计15 秒
                </Text>
              </View>
            </View>

            <View className="mt-4 flex flex-row items-center justify-between px-4">
              <Text className="text-xs text-[#d6d6d6] dark:text-[#d6d6d6]">
                预估费用
              </Text>
              <Text className="text-xs text-[#d6d6d6] dark:text-[#d6d6d6]">
                $0.038
              </Text>
              <Text className="text-xs">0.0000636 {ethName}</Text>
            </View>

            <View className="mt-4 flex flex-row items-center justify-between px-4">
              <Text className="text-xs text-[#d6d6d6] dark:text-[#d6d6d6]">
                预估费用
              </Text>
              <Text className="text-xs text-[#d6d6d6] dark:text-[#d6d6d6]">
                $0.038
              </Text>
              <Text className="text-xs">0.0000636 {ethName}</Text>
            </View>
            <ThinLine />
            <View className="mb-2 mt-4 flex flex-row items-center justify-end">
              <Text className="mr-2">高级功能</Text>
              <ArrowRight color={iconColor} width={12} height={12} />
            </View>
          </View>
          <Modal
            snapPoints={['70%']} // optional
            title="交易详情"
            ref={ref1}
          >
            {/* <View className="z-0 -mt-2 flex h-14  flex-row justify-around rounded-md dark:bg-[#232428]"> */}

            <View
              style={{ flexDirection: 'row', flex: 1 }}
              className=" bg-white pt-2 dark:bg-[#18191b]"
            >
              <BottomSheetScrollView className=" px-4">
                <View className="flex h-12 w-full flex-row items-center justify-center rounded-[8px]  dark:bg-[#222325] ">
                  <Text>
                    {Num} {ethName}
                  </Text>
                </View>
                <View className="flex flex-row py-4">
                  <Text className="mr-2 text-[#a7a7a7] dark:text-[#a7a7a7]">
                    付款地址
                  </Text>
                  <View>
                    <Text>{address}</Text>
                    <Text className="text-[#a7a7a7] dark:text-[#a7a7a7]">
                      ( {walletname})
                    </Text>
                  </View>
                </View>
                <View className="flex flex-row py-4">
                  <Text className="mr-2 text-[#a7a7a7] dark:text-[#a7a7a7]">
                    收款地址
                  </Text>
                  <View>
                    <Text>{text}</Text>
                    <Text className="text-[#a7a7a7] dark:text-[#a7a7a7]">
                      ({walletname})
                    </Text>
                  </View>
                </View>
                <View className="flex flex-row py-4">
                  <Text className="mr-2 text-[#a7a7a7] dark:text-[#a7a7a7]">
                    网络费
                  </Text>
                  <View>
                    <Text>0.0564</Text>
                    <Text className="text-[#a7a7a7] dark:text-[#a7a7a7]">
                      预估 $0.038~最大 $0.0564
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={async () => {
                    const res = await transform(chainId, address, text);
                    router.replace('/');
                    console.log(
                      'chainId, address, text)',
                      chainId,
                      address,
                      text,
                      res
                    );
                  }}
                  className="text-md flex h-12 w-full items-center justify-center rounded-md bg-[#3B6ADA] px-3  "
                >
                  <Text className="text-white">确认支付</Text>
                </TouchableOpacity>
              </BottomSheetScrollView>
            </View>
          </Modal>
          <Modal
            snapPoints={['70%']} // optional
            title="转账安全提示"
            ref={ref2}
          >
            {/* <View className="z-0 -mt-2 flex h-14  flex-row justify-around rounded-md dark:bg-[#232428]"> */}

            <View
              style={{ flexDirection: 'row', flex: 1 }}
              className=" bg-white pt-2 dark:bg-[#18191b]"
            >
              <BottomSheetScrollView className=" px-4">
                <View className="flex items-center justify-center">
                  <Image
                    className="my-3 h-8 w-8"
                    source={require('../assets/home/danger.png')}
                  />
                  <Text className="my-2">转账提醒</Text>
                  <Text className="my-2 text-center text-xs text-[#a7a7a7] dark:text-[#a7a7a7]">
                    您当前正在进行转账操作，请确保您的接收钱包与当前转出钱包
                    属于同一网络，否则您的资产无法到账!
                  </Text>
                </View>
                <Text className="my-2">当前网络</Text>
                <View className="mb-4 flex h-12 w-full flex-row items-center justify-start rounded-[8px]  dark:bg-[#222325] ">
                  <Text className="px-4 text-[#a7a7a7] dark:text-[#a7a7a7]">
                    {chainName}
                  </Text>
                </View>

                <RadioExample />

                <TouchableOpacity
                  onPress={() => {
                    present1();
                    dismiss2();
                  }}
                  className="text-md flex h-12 w-full items-center justify-center rounded-md bg-[#3B6ADA] px-3  "
                >
                  <Text className="text-white">继续转账</Text>
                </TouchableOpacity>
              </BottomSheetScrollView>
            </View>
          </Modal>
        </SafeAreaView>
      </ScrollView>
      <BottomButton
        onPress={() => {
          if (!text) {
            showMessage({
              message: '请输入地址',
              type: 'danger',
            });
            return;
          }
          dismiss1();
          present2();
        }}
      />
    </>
    // font-semibold font-inter
  );
}
