import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const MenuIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={19}
    height={14}
    viewBox="0 0 38 28"
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
      id="\u77E9\u5F62_1_\u62F7\u8D1D"
      data-name="\u77E9\u5F62 1 \u62F7\u8D1D"
      d="M30 143h28a2 2 0 010 4H30a2 2 0 010-4zm0 24h20a2 2 0 010 4H30a2 2 0 010-4zm0-12h34a2 2 0 010 4H30a2 2 0 010-4z"
      transform="translate(-28 -143)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
