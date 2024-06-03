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
      id="\u5F62\u72B6_30"
      data-name="\u5F62\u72B6 30"
      d="M50.5 243a20.505 20.505 0 11-20.489 20.5A20.5 20.5 0 0150.5 243zm0 3.238a17.267 17.267 0 1017.254 17.267A17.26 17.26 0 0050.5 246.238zm0 0l9.912 16.5a1.08 1.08 0 010 1.526l-9.15 9.157a1.078 1.078 0 01-1.525 0l-9.15-9.157a1.08 1.08 0 010-1.526l9.15-9.157a1.077 1.077 0 011.525 0zm-3.812.763L50.5 257.4l-6.1 6.105 6.1 6.105zm0 0"
      transform="translate(-29.5 -242.5)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
