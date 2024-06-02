import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const AssetIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 44 44"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      id="\u5F62\u72B6_22"
      data-name="\u5F62\u72B6 22"
      d="M50.241 243.445a18.291 18.291 0 1018.291 18.291 18.327 18.327 0 00-18.291-18.291zm0 33.767a15.477 15.477 0 1115.477-15.476 15.468 15.468 0 01-15.477 15.476zm0 0l2.307-21.386a3.262 3.262 0 00-4.559 0l-3.658 3.658a3.189 3.189 0 00-.957 2.308 3.283 3.283 0 00.957 2.307l3.658 3.659a3.187 3.187 0 002.307.956 3.284 3.284 0 002.308-.956l3.658-3.659a3.187 3.187 0 00.957-2.307 3.286 3.286 0 00-.957-2.308zm1.97 5.91a.64.64 0 01-.169.45l-3.658 3.658a.684.684 0 01-.9 0l-3.658-3.658a.686.686 0 010-.9l3.658-3.658a.684.684 0 01.9 0l3.658 3.658a.64.64 0 01.169.451zm0 0"
      transform="translate(-28.234 -239.734)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
