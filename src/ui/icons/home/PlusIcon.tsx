import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const PlusIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    {/* <Path
      d="M.872 13.101a.874.874 0 0 0 .621-.253l5.252-5.253a.875.875 0 0 0 0-1.234L1.493 1.11A.875.875 0 0 0 .26 2.343l4.63 4.63-4.63 4.632A.876.876 0 0 0 .872 13.1Z"
      fill={color}
    /> */}
    <Path
      id="\u5F62\u72B6_30"
      data-name="\u5F62\u72B6 30"
      d="M695.061 800.439v7.684a1.082 1.082 0 11-2.163 0v-7.684h-7.765a1.082 1.082 0 110-2.163h7.767v-7.662a1.082 1.082 0 012.163 0v7.662h7.806a1.082 1.082 0 110 2.163h-7.806z"
      transform="translate(-684.062 -789.531)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
