/* eslint-disable react-native/no-inline-styles */
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { getAssertList, getList } from '@/api';
import {
  colors,
  FocusAwareStatusBar,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  useModal,
  View,
} from '@/ui';
import {
  BuyIconP,
  CopyIcon,
  MenuIcon,
  PlusIcon,
  PlusPlusIcon,
  ReciveMoneyIcon,
  ScanIcon,
  SearchIcon,
  SwapIcon,
  TranferIcon,
  WalletIcon,
} from '@/ui/icons';

import { getItem, setItem } from '../../core/storage';

// eslint-disable-next-line max-lines-per-function
export default function Feed() {
  const [totalValuation, settotalValuation] = useState('0');
  const [homeList, setHomeList] = useState([]);
  const styles = StyleSheet.create({
    line: {
      overflow: 'hidden', // 隐藏溢出内容
      opacity: 0.1,
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
  // eslint-disable-next-line react/no-unstable-nested-components
  const ThinLine = () => {
    return (
      <View
        className="mt-2 border-[#e7e7e7] dark:border-[#f1f4f6]"
        style={styles.line}
      />
    );
  };
  const { ref, present, dismiss } = useModal();
  const [chainList, setChainList]: any = useState([]);

  const [chain, setChain]: any = useState({ walletItemVOList: [] });
  const [selectWallet, setSelectWallet]: any = useState({ name: '' });
  const getAllData = async (type = 'no') => {
    const { data, code } = await getList();
    console.log('data, code', data, code);
    setChainList(data);
    if (type == 'init') {
      if (getItem('selectChain')) {
        setInitData(getItem('selectChain'));
        getHomeData();
      } else {
        setInitData(data[0]);
        getHomeData();
      }
    }
  };
  useEffect(() => {
    getAllData('init');
  }, []);
  const setInitData = (item) => {
    setItem('selectChain', item);
    setItem('selectWallet', item.walletItemVOList[0]);
    setChain(item);
    setSelectWallet(item.walletItemVOList[0]);
    console.log('setInitData', item);
  };
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? '#fff' : colors.neutral[400];
  const iconColor2 = colorScheme === 'dark' ? '#393a3b' : colors.neutral[500];
  const router = useRouter();
  // colors.neutral[500]
  console.log('iconColor', iconColor, colorScheme);

  const renderItem = React.useCallback(
    (item, index): any => (
      <View className=" w-full" key={index}>
        <TouchableOpacity
          onPress={() => {
            setChain(item);
            setInitData(item);
          }}
          className="flex w-full flex-row items-center justify-center"
        >
          <Image
            className=" mt-4 h-10 w-10 rounded-[20px]"
            source={{
              uri: item.chainUrl,
            }}
            contentFit="scale-down"
            transition={1000}
            style={{
              height: 40,
              width: 40,
            }}
          />
        </TouchableOpacity>
      </View>
    ),
    []
  );
  const formatAddress = (address: string) => {
    if (!address) return;
    return `${address.slice(0, 6)}...${address.slice(
      address.length - 6,
      address.length
    )}`;
  };

  const getHomeData = async () => {
    const chainId = chain.chainId || (getItem('selectChain') || {}).chainId;
    const address =
      selectWallet.address || (getItem('selectWallet') || {}).address;
    console.log('getHomeData1', chainId, address);

    // chainId=2&address=0x0B4b782bCadBfdCc3556aD66F34cc39BA95DAB36
    const { data, code }: any = await getAssertList(
      chainId,
      address
      // '2',
      // '0x0b4b782bcadbfdcc3556ad66f34cc39ba95dab36'
    );
    console.log('getHomeData', chainId, address, data);
    if (code === '200') {
      setHomeList(data.assetsItemVOList || []);
      settotalValuation(data.totalValuation || '0');
    }
  };
  const walletItem = (item, index): any => (
    <TouchableOpacity
      key={index}
      className="mb-2 rounded-[8px] bg-slate-500 p-4 dark:bg-[#18191b]"
      onPress={() => {
        setSelectWallet(item);
        setItem('selectWallet', item);
        console.log('item', item);
        dismiss();
        getHomeData(item);
      }}
    >
      <Text>{chain.chainName}</Text>
      <View className="flex flex-row items-center ">
        <Text className="text-[#38393a] dark:text-[#38393a] ">
          {formatAddress(item.address)}
        </Text>
        <CopyIcon className="ml-1 text-xs" color={iconColor2} />
      </View>
      <Text className="text-right">
        {Number(item.balanceOf)}
        &nbsp;
        {chain.ethName}
      </Text>
    </TouchableOpacity>
  );
  return (
    <>
      <FocusAwareStatusBar />
      {/* 头部 */}
      <View className="flex h-20 flex-row  items-center justify-between px-4 pt-12 ">
        <View className="flex h-full flex-row items-center">
          <MenuIcon
            onPress={async () => {
              console.log(1111);
              present();
              await getAllData();
            }}
            className=""
            color={iconColor}
          />
          <Text className="ml-2 h-2 w-2 rounded-[4px] bg-[#5f8c5a]" />
        </View>
        <View className="flex h-full flex-row items-center justify-end">
          <WalletIcon className="ml-3" color={iconColor} />
          <ScanIcon className="ml-3" color={iconColor} />
        </View>
      </View>
      <ScrollView className="px-4">
        <SafeAreaView className="flex-1">
          <View>
            <Modal
              snapPoints={['70%']} // optional
              title="钱包列表"
              ref={ref}
            >
              {/* <View className="z-0 -mt-2 flex h-14  flex-row justify-around rounded-md dark:bg-[#232428]"> */}

              <View
                className="dark:bg-[#0e0e0e]"
                style={{ flexDirection: 'row', flex: 1 }}
              >
                <View
                  style={{ width: 65 }}
                  className=" bg-white dark:bg-[#18191b]"
                >
                  <BottomSheetScrollView>
                    {/* 左侧滚动区域 */}
                    <View style={{ width: 65 }}>
                      {chainList.map((item, index) => {
                        return renderItem(item, index);
                      })}
                    </View>
                  </BottomSheetScrollView>
                </View>
                <View
                  style={{ flex: 1 }}
                  // bg-white
                  className="dark:bg-[#0e0e0e]"
                >
                  <BottomSheetScrollView className="flex: 1 w-full">
                    {/* 右侧滚动区域 */}
                    <View className="px-4">
                      <View className="flex flex-row items-center justify-between py-2 ">
                        <Text>{chain.ethName}</Text>
                        <PlusPlusIcon
                          className="mr-1 text-xs"
                          color={iconColor}
                        />
                      </View>
                      {chain.walletItemVOList.map((item, index) => {
                        return walletItem(item, index);
                      })}
                      {/* <View className="mb-2 rounded-[8px] bg-slate-500 p-4 dark:bg-[#18191b]">
                        <Text>BSC-1</Text>
                        <View className="flex flex-row items-center ">
                          <Text className="dark:text-[#38393a]">asd</Text>
                          <CopyIcon
                            className="ml-1 text-xs"
                            color={iconColor2}
                          />
                        </View>
                        <Text className="text-right">0.001Bnb</Text>
                      </View> */}
                    </View>
                  </BottomSheetScrollView>
                </View>
              </View>
            </Modal>
          </View>
          <View className="flex-1  font-inter">
            <View>
              <View className=" z-10 h-32 w-full rounded-lg bg-[#3B6ACF] p-3 pt-0">
                <View className="p-4">
                  <View className="flex w-full flex-row items-center justify-between">
                    <View className="flex flex-row items-center text-xs text-white">
                      <Text className="text-white">{selectWallet.name}</Text>
                      <Image
                        className="ml-1 h-3 w-3"
                        source={require('../../assets/home/headerIcon1.png')}
                      />
                    </View>

                    <View className="flex flex-row items-center text-xs text-white">
                      <Text className="text-white">详情&nbsp; &gt;</Text>
                    </View>
                  </View>
                  <View className="mt-3 flex flex-row items-baseline">
                    <Text className="text-[10px] text-white">￥</Text>
                    <Text className="text-[30px] text-white">
                      {totalValuation}
                    </Text>
                  </View>
                </View>
                <Image
                  className=" absolute right-10 top-5 h-20 w-20"
                  source={require('../../assets/home/binance.png')}
                />
              </View>
              {/* 四个图标 */}
              <View
                // View
                className="z-0 -mt-2 flex h-14  flex-row justify-around rounded-md bg-[#f1f4f6] dark:bg-[#232428]"
              >
                <View className="flex items-center justify-center">
                  <View className="flex flex-row items-center justify-center ">
                    <TranferIcon className="mr-1 text-xs" color={iconColor} />
                    <Text
                      onPress={() => {
                        router.push('/recordList');
                      }}
                      className="text-xs"
                    >
                      转账
                    </Text>
                  </View>
                </View>
                <View className="flex items-center justify-center">
                  <View className="flex flex-row items-center justify-center ">
                    <ReciveMoneyIcon
                      className="mr-1 text-xs"
                      color={iconColor}
                    />
                    <Text
                      // onPress={() => {
                      //   router.push('/onboarding');
                      // }}
                      className="text-xs"
                    >
                      收款
                    </Text>
                  </View>
                </View>
                <View className="flex items-center justify-center">
                  <View className="flex flex-row items-center justify-center ">
                    <BuyIconP className="mr-1 text-xs" color={iconColor} />
                    <Text className="text-xs">购买</Text>
                  </View>
                </View>
                <View className="flex items-center justify-center">
                  <View className="flex flex-row items-center justify-center ">
                    <SwapIcon className="mr-1 text-xs" color={iconColor} />
                    <Text className="text-xs">兑换</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Dapp */}
            {/* dark:bg-[#232428] */}
            <View className=" mt-4 flex  w-full flex-row justify-around rounded-md bg-[#f1f4f6] px-2 py-4  dark:bg-[#232428]">
              <View className="flex items-center justify-center">
                <View className="flex items-center justify-center ">
                  <Image
                    className="h-8 w-8"
                    source={require('../../assets/home/Dapp.png')}
                  />
                  <Text className="text-md mt-2">DApp</Text>
                </View>
              </View>
              <View className="flex items-center justify-center">
                <View className="flex items-center justify-center ">
                  <Image
                    className="h-8 w-8"
                    source={require('../../assets/home/TokenCheckIcon.png')}
                  />
                  <Text className="text-md mt-2 ">代币检测</Text>
                </View>
              </View>
              <View className="flex items-center justify-center">
                <View className="flex items-center justify-center">
                  <Image
                    className="h-8 w-8"
                    source={require('../../assets/home/PermissionIcon.png')}
                  />
                  <Text className="text-md mt-2">授权检测</Text>
                </View>
              </View>
              <View className="flex items-center justify-center">
                <View className="flex  items-center justify-center ">
                  <Image
                    className="h-8 w-8"
                    source={require('../../assets/home/BatchTranferIcon.png')}
                  />
                  <Text className="text-md mt-2">批量转账</Text>
                </View>
              </View>
            </View>

            {/* 资产 */}

            <View className="my-4 flex w-full flex-row  items-center justify-between text-[#3b3b3b] dark:text-[#fff]">
              <View className="flex  flex-row items-center">
                <View className="mr-3 flex items-center py-2 text-lg">
                  <View>
                    <Text>资产</Text>
                  </View>
                  <View className="mt-[2px] h-[3px] w-[25px] rounded-sm  bg-[#717172] dark:bg-[#ffffff]" />
                </View>

                <View className="mr-3 ">
                  <Text className="text-[#a7a7a7] dark:text-[#717172]">
                    DeFi
                  </Text>
                </View>
                <View>
                  <Text className="text-[#a7a7a7] dark:text-[#717172]">
                    NFT
                  </Text>
                </View>
              </View>
              <View className="flex flex-row items-center justify-end">
                <View className="flex h-[32px]  flex-row items-center justify-center rounded-[16px] bg-[#f1f4f6] p-2 dark:bg-[#232428]">
                  <SearchIcon className="" color={iconColor} />
                  <Text className=" mr-5 text-xs">&nbsp;&nbsp;搜索</Text>
                </View>
                <View className="ml-4 flex h-[32px] w-[32px]  items-center justify-center rounded-[15px] bg-[#f1f4f6] p-2 dark:bg-[#232428]">
                  <PlusIcon className="" color={iconColor} />
                </View>
              </View>
            </View>

            {/* token list */}
            {homeList.map((item: any, index) => (
              <View className="w-full" key={index}>
                {/* <Text>{item.imgUrl}</Text> */}
                <View className="flex  w-full flex-row items-center justify-center">
                  <Image
                    className="flex-0  my-2 mr-3 h-[40x] w-[40px] rounded-[20px]"
                    source={{
                      uri: item.imgUrl,
                    }}
                    style={{
                      height: 40,
                      width: 40,
                    }}
                    contentFit="contain"
                  />

                  <View className=" w-full flex-1  py-2	dark:border-[#232428]">
                    <TouchableOpacity
                      onPress={() => {
                        console.log('myw', item);
                        setItem('sssswalet', item);
                        router.push('/tokenDetail');
                      }}
                      className="flex  flex-row items-center justify-between"
                    >
                      <Text className="text-[#3b3b3b] dark:text-[#fff]">
                        {item.assetName}
                      </Text>
                      <View>
                        <View className="text-right text-[#3b3b3b] dark:text-[#fff]">
                          <Text className="text-right">{item.quantity}</Text>
                        </View>
                        <Text className="text-right text-xs text-[#a7a7a7] dark:text-[#717172]">
                          ≈¥{item.valuation}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <ThinLine />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
    // font-semibold font-inter
  );
}
