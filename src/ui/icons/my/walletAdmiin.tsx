import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const WalletAdmiinIcon = ({
  color = '#CCC',
  style,
  ...props
}: SvgProps) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 44 44"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    {/* fill={color} */}
    <Path
      id="\u5F62\u72B6_23"
      data-name="\u5F62\u72B6 23"
      d="M61.726 365.577H38.451a6.864 6.864 0 00-6.846 6.843v19.16a6.864 6.864 0 006.846 6.843h23.275a6.864 6.864 0 006.846-6.843v-19.16a6.864 6.864 0 00-6.846-6.843zm4.107 20.529H53.512a4.106 4.106 0 110-8.212h12.321v8.212zm-12.321-10.949a6.843 6.843 0 100 13.686h12.321v2.737a4.118 4.118 0 01-4.107 4.106H38.451a4.118 4.118 0 01-4.107-4.106v-19.16a4.119 4.119 0 014.107-4.106h23.275a4.119 4.119 0 014.107 4.106v2.737H53.512zM52.142 382a1.369 1.369 0 101.369-1.369A1.369 1.369 0 0052.142 382zm0 0"
      transform="translate(-28.078 -360)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
