/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable max-lines-per-function */
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
  View,
} from '@/ui';
import { ArrowLeft, ArrowRight, CopyIcon, SearchIcon } from '@/ui/icons';

export default function RecordList() {
  const [sssswalet, setsssswalet] = useState({});
  const [list, setList] = useState([]);
  const ethName = (getItem('selectChain') || {}).ethName;
  const initData = async () => {
    const chainId = (getItem('selectChain') || {}).chainId;
    const address = (getItem('selectWallet') || {}).address;
    console.log('selectChain-selectWallet', chainId, address);

    const { data } = await getTxList(chainId, address);
    setList(data || []);
    console.log('getTxList', data);
  };
  useEffect(() => {
    const s: any = getItem('sssswalet') || {};
    setsssswalet(s);
    console.log('sadsad', s);
    initData();
  }, []);
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
  const formatAddress = (address: string) => {
    if (!address) return;
    return `${address.slice(0, 8)}...${address.slice(
      address.length - 8,
      address.length
    )}`;
  };
  function calculateTokenValue(tokenAmount, totalPrice) {
    if (!tokenAmount) return 0;
    // 计算每个 token 的价格
    var pricePerToken = Number(
      (Number(totalPrice || 0) / Number(tokenAmount)).toFixed(3)
    );
    return pricePerToken;
  }
  const styles2 = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 8,
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
      <View
        className="flex w-full  flex-row bg-[#FFFFFFCC] dark:bg-[#222428]"
        style={styles2.container}
      >
        <TouchableOpacity
          className="flex-1 bg-[#66B08F] dark:bg-[#66B08F]"
          onPress={onPress}
          style={styles2.button}
        >
          <Text className="font-semibold text-white" style={styles2.buttonText}>
            转账
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="ml-2 flex-1 bg-[#3B6ADA] dark:bg-[#3B6ADA]"
          onPress={onPress}
          style={styles2.button}
        >
          <Text className="font-semibold text-white" style={styles2.buttonText}>
            收款
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="ml-2 flex-1 bg-[#18191B] dark:bg-[#18191B]"
          onPress={onPress}
          style={styles2.button}
        >
          <Text className="font-semibold text-white" style={styles2.buttonText}>
            闪兑
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  function getTodayDateString() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1; // 月份从0开始，所以加1
    let day = now.getDate();
    return `${year}-${month}-${day}`;
  }

  // 基于日期字符串生成固定的伪随机数（范围在0到3%之间）
  // 基于日期字符串生成固定的伪随机数（范围在0到3%之间）
  function getDailyIncreasePercent(dateString) {
    // 将日期字符串转换为一个简单的哈希值
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
      hash = dateString.charCodeAt(i) + ((hash << 5) - hash);
    }
    // 生成0到1之间的浮点数
    let randomPercent = (hash % 1000) / 1000;
    // 转换到0到3%的范围内
    let percent = randomPercent * 3;
    // 检查最后一个数字是否为偶数
    if (parseInt(dateString.slice(-1)) % 2 === 0) {
      // 最后一个数字为偶数，保持正值
      return percent;
    } else {
      // 最后一个数字为奇数，转换为负值
      return -percent;
    }
  }
  let todayDateString = getTodayDateString();
  // let dailyIncreasePercent =
  //   getDailyIncreasePercent(todayDateString).toFixed(2); // 保留两位小数

  const [fixNum, setFixNum] = useState(
    getDailyIncreasePercent(todayDateString).toFixed(2)
  );
  // console.log(todayDateString, dailyIncreasePercent);
  return (
    <>
      <FocusAwareStatusBar />
      {/* 头部 */}
      <View className="flex h-24 flex-row  items-center px-4 pt-12 ">
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
        <Text className="w-1/3 flex-1 text-center text-lg ">转账</Text>
        <Text className="w-1/3 " />

        {/* <View /> */}
      </View>
      <ScrollView className="flex-1 bg-[#f1f4f6] dark:bg-[#0e0e0e]">
        <SafeAreaView className="flex-1">
          <View className=" pb-5">
            <View className="bg-[#fff] px-4 py-2 dark:bg-[#18191B] ">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center ">
                  <Image
                    className="flex-0  my-2 mr-3 h-10 w-10 rounded-[20px]"
                    source={{
                      uri: sssswalet.imgUrl,
                    }}
                  />
                  <Text>{sssswalet.assetName}</Text>
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
                <Text className="">资产余额</Text>
                <View className="flex items-center text-right">
                  <Text className="text-right text-xs">
                    {sssswalet.quantity}

                    {sssswalet.assetName}
                  </Text>
                  <Text className="text-right text-xs text-[#a3a3a3] dark:text-[#474849]">
                    ≈¥{sssswalet.valuation}
                  </Text>
                </View>
              </View>
            </View>

            <View className="mt-2  bg-[#fff]  p-4 dark:bg-[#18191B]">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center ">
                  {/* <Image
                    className="flex-0  my-2 mr-3 h-10 w-10 rounded-[20px]"
                    source={require('../assets/home/dex.png')}
                  /> */}
                  <Text>市场价格:</Text>
                </View>
                <View className="flex flex-row items-center justify-end">
                  {/* <Text className="mr-2 text-xs dark:text-[#a7a7a7]">
                    去交易
                  </Text> */}
                  <View className="flex flex-col">
                    <Text className=" font-inter">
                      {calculateTokenValue(
                        sssswalet.quantity,
                        sssswalet.valuation
                      )}
                    </Text>
                    <Text className=" mr-2 text-xs text-[#a7a7a7] dark:text-[#717172]">
                      $
                      {calculateTokenValue(
                        sssswalet.quantity,
                        sssswalet.valuation
                      )}
                    </Text>
                  </View>

                  {Number(fixNum) > 0 ? (
                    <Text className="mx-3 rounded-[8px] bg-[#6fb090] px-4 py-2 text-white">
                      {fixNum}%
                    </Text>
                  ) : (
                    <Text className="mx-3 rounded-[8px] bg-[#e5615b] px-4 py-2 text-white">
                      {fixNum}%
                    </Text>
                  )}
                  <ArrowRight color="#a7a7a7" width={14} height={14} />
                </View>
              </View>
            </View>
            {/* dark:bg-[#18191B] */}
            <ThinLine />
            <View className=" flex w-full flex-row items-center justify-between  bg-[#fff] px-4 text-[#3b3b3b] dark:bg-[#18191B] dark:text-[#fff]">
              <View className="flex flex-row  items-center px-2">
                {/* border-b-2 border-[#717172]  dark:border-[#ffffff]"*/}
                <View className="mr-3 flex items-center py-2 ">
                  <View>
                    <Text className="text-lg	font-semibold	">全部</Text>
                  </View>
                  <View className="mt-[2px] h-[3px] w-[25px] rounded-sm  bg-[#717172] dark:bg-[#ffffff]" />
                </View>

                <View className="mr-3 ">
                  <Text className="text-[#a7a7a7] dark:text-[#717172]">
                    转入
                  </Text>
                </View>
                <View>
                  <Text className="text-[#a7a7a7] dark:text-[#717172]">
                    转出
                  </Text>
                </View>
              </View>
              <View className="flex flex-row items-center justify-end">
                <View className="flex h-[32px]  flex-row items-center justify-center rounded-[16px] bg-[#f1f4f6] p-2 dark:bg-[#232428]">
                  <SearchIcon className="" color={iconColor} />
                  <Text className=" mr-10 text-xs">&nbsp;&nbsp;搜索</Text>
                </View>
              </View>
            </View>

            {/* token list */}
            {list.map((item, index) => (
              <View
                key={index}
                className="w-full bg-[#fff] px-4 dark:bg-[#18191B]"
              >
                <View className="flex  w-full flex-row items-center justify-center">
                  <Image
                    className="flex-0  my-2 mr-3 h-10 w-10 rounded-[20px]"
                    style={[
                      {
                        transform: [{ rotate: '45deg' }],
                      },
                    ]}
                    source={require('../assets/transfer.png')}
                  />
                  <View className=" w-full flex-1 border-b-2 border-[#fbfbfb] py-2	dark:border-[#232428]">
                    <TouchableOpacity className="flex  flex-row items-center justify-between">
                      <View>
                        <View className="flex flex-row items-center justify-center text-right text-[#3b3b3b] dark:text-[#fff]">
                          <Text className="w-[170px] text-[#3b3b3b] dark:text-[#fff]">
                            {formatAddress(item.transtionHash)}
                          </Text>
                          <CopyIcon className="text-xs" color={iconColor} />
                        </View>
                        <Text className="text-left text-xs text-[#a7a7a7] dark:text-[#717172]">
                          {item.createdAt}
                        </Text>
                      </View>
                      <View>
                        <View className="text-right ">
                          <Text className="text-[#61c69f] dark:text-[#fff]">
                            -0 {sssswalet.assetName}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
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
