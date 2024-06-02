import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const RefreshIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      id="\u5F62\u72B6_23"
      data-name="\u5F62\u72B6 23"
      d="M584.512 678.737a10.454 10.454 0 118.756-16.174.847.847 0 01-1.423.915 8.767 8.767 0 101.423 4.8.848.848 0 111.695 0 10.465 10.465 0 01-10.451 10.455zm0 0l9.536-18.542v3.391a.848.848 0 11-1.7 0V660.2a.848.848 0 111.7 0zm0 0l-4.237 2.543h3.39a.848.848 0 010 1.7h-3.39a.848.848 0 010-1.7zm0 0"
      transform="translate(-572.515 -656.281)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
