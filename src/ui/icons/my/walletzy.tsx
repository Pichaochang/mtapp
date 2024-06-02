import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const WalletzyIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
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
    <Path
      id="\u5F62\u72B6_27"
      data-name="\u5F62\u72B6 27"
      d="M64.407 904.549h-1.4V900.4a1.4 1.4 0 00-1.4-1.4H37.843a4.173 4.173 0 00-4.169 4.173v32.181a2.8 2.8 0 002.794 2.8h27.939a2.8 2.8 0 002.794-2.8v-28.008a2.8 2.8 0 00-2.794-2.8zM37.843 901.8h22.373v2.753H37.843a1.377 1.377 0 010-2.753zm26.563 33.558H36.468v-28.24a4.213 4.213 0 001.375.232h26.564v28.008zm0 0l-5.588-22.372H42.056a1.4 1.4 0 000 2.8h16.763a1.4 1.4 0 000-2.8zm-5.588 5.593H42.056a1.4 1.4 0 000 2.8h11.175a1.4 1.4 0 000-2.8zm0 0"
      transform="translate(-28.438 -896.578)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
