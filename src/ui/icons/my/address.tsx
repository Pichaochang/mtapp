import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const AddressIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
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
      id="\u5F62\u72B6_25"
      data-name="\u5F62\u72B6 25"
      d="M64.13 631.191a5.129 5.129 0 015.129 5.129v27.36a5.129 5.129 0 01-5.129 5.129h-23.6a5.129 5.129 0 01-5.13-5.129v-27.36a5.129 5.129 0 015.129-5.129h23.6zm0 2.821h-23.6a2.307 2.307 0 00-2.295 2.073l-.013.235v27.36a2.307 2.307 0 002.073 2.3l.235.013h23.6a2.307 2.307 0 002.295-2.073l.013-.235V636.32a2.307 2.307 0 00-2.073-2.3zM57.8 640.6h.342a1.511 1.511 0 011.71 1.71v15.39a1.511 1.511 0 01-1.71 1.71H57.8a1.511 1.511 0 01-1.71-1.71v-15.4a1.511 1.511 0 011.71-1.71zm-16.285 15.043a1.411 1.411 0 110 2.821h-8.464a1.411 1.411 0 110-2.821h8.464zm0-16.929a1.411 1.411 0 010 2.822h-8.464a1.411 1.411 0 010-2.822h8.464zm0 0"
      transform="translate(-28.438 -628)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
