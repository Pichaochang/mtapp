import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const AboutUsIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 42 42"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    {/* fill={color} */}
    <Path
      id="\u5F62\u72B6_30"
      data-name="\u5F62\u72B6 30"
      d="M51.085 1059.21A21.21 21.21 0 1172.293 1038a21.211 21.211 0 01-21.208 21.21zm0-39.24A18.03 18.03 0 1069.112 1038a18.027 18.027 0 00-18.027-18.03zm0 0v7.43a2.121 2.121 0 011.5 3.62 2.121 2.121 0 01-3.62-1.5 2.121 2.121 0 012.121-2.12zm0 6.36a1.589 1.589 0 011.591 1.59v11.66a1.591 1.591 0 01-3.181 0v-11.66a1.58 1.58 0 011.59-1.59zm0 0"
      transform="translate(-29.078 -1016)"
      fillRule="evenodd"
      fill={color}
    />
  </Svg>
);
