import * as React from 'react';

import { Buttons } from '@/components/buttons';
import { Colors } from '@/components/colors';
import { Inputs } from '@/components/inputs';
import { Typography } from '@/components/typography';
import { FocusAwareStatusBar, SafeAreaView, ScrollView, Text } from '@/ui';

export default function Style() {
  return (
    <>
      <FocusAwareStatusBar />
      <Text className="mb-2 text-center text-lg text-gray-600">
        The right way to build your mobile app
      </Text>
      <ScrollView className="px-4">
        <SafeAreaView className="flex-1">
          <Typography />
          <Colors />
          <Buttons />
          <Inputs />
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
