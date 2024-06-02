import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const ScanIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={26}
    height={26}
    viewBox="0 0 52 52"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      id="\u5F62\u72B6_2"
      data-name="\u5F62\u72B6 2"
      d="M697.388 170.783a1.3 1.3 0 010 2.6h-4.321a4.8 4.8 0 01-4.752-4.762v-4.331a1.3 1.3 0 112.592 0v4.328a2.142 2.142 0 002.16 2.165h4.321zm22.033-6.493a1.3 1.3 0 112.592 0v4.328a4.8 4.8 0 01-4.753 4.762h-4.32a1.3 1.3 0 010-2.6h4.32a2.142 2.142 0 002.161-2.165v-4.325zm-6.481-22.073a1.3 1.3 0 010-2.6h4.32a4.8 4.8 0 014.753 4.761v5.194a1.3 1.3 0 11-2.592 0v-5.194a2.141 2.141 0 00-2.161-2.164h-4.32zm-22.033 6.492a1.3 1.3 0 11-2.592 0v-4.328a4.8 4.8 0 014.752-4.761h4.321a1.3 1.3 0 010 2.6h-4.321a2.141 2.141 0 00-2.16 2.164v4.328zm5.616 9.089a1.3 1.3 0 010-2.6H713.8a1.3 1.3 0 010 2.6h-17.277zm0 0"
      transform="translate(-679.156 -130.5)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
