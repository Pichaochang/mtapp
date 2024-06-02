/* eslint-disable react/no-unstable-nested-components */
import { Link, Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { useAuth, useIsFirstTime } from '@/core';
import { Pressable, Text } from '@/ui';
import {
  Feed as FeedIcon,
  FindTabIcon,
  MarketTabIcon,
  MyTabIcon,
} from '@/ui/icons';

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (isFirstTime) {
    return <Redirect href="/" />;
  }
  // if (status === 'signOut') {
  //   return <Redirect href="/login" />;
  // }
  const obj = { height: 60, paddingTop: 10, paddingBottom: 5 };
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: '资产',
          headerShown: false,
          tabBarIcon: ({ color, ...qer }) => {
            console.log(color, qer);
            return <FeedIcon color={color} />;
          },
          tabBarTestID: 'feed-tab',
          tabBarStyle: obj,
        }}
      />

      <Tabs.Screen
        name="market"
        options={{
          title: '市场',
          headerShown: false,
          tabBarIcon: ({ color }) => <MarketTabIcon color={color} />,
          tabBarTestID: 'style-tab',
          tabBarStyle: obj,
        }}
      />
      <Tabs.Screen
        name="find"
        options={{
          title: '发现',
          headerShown: false,
          tabBarIcon: ({ color }) => <FindTabIcon color={color} />,
          tabBarTestID: 'settings-tab',
          tabBarStyle: obj,
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: '我的',
          headerShown: false,
          tabBarIcon: ({ color }) => <MyTabIcon color={color} />,
          tabBarTestID: 'my',
          tabBarStyle: obj,
        }}
      />
    </Tabs>
  );
}

const CreateNewPostLink = () => {
  return (
    <Link href="/feed/add-post" asChild>
      <Pressable>
        <Text className="px-3 text-primary-300">Create</Text>
      </Pressable>
    </Link>
  );
};
