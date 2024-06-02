import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const SwtichThemeIcon = ({
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
    <Path
      id="\u5F62\u72B6_1"
      data-name="\u5F62\u72B6 1"
      d="M631.271 110.856a8.415 8.415 0 11-8.415 8.415 8.424 8.424 0 018.415-8.415m0-2.8a11.22 11.22 0 1011.219 11.22 11.219 11.219 0 00-11.219-11.22zm-15.427 12.622h-2.805a1.4 1.4 0 010-2.805h2.805a1.4 1.4 0 010 2.805zm33.658 0h-2.8a1.4 1.4 0 010-2.805h2.8a1.4 1.4 0 010 2.805zM631.271 138.9a1.4 1.4 0 01-1.4-1.4v-2.8a1.4 1.4 0 012.8 0v2.8a1.4 1.4 0 01-1.4 1.4zm0-33.658a1.4 1.4 0 01-1.4-1.4v-2.8a1.4 1.4 0 012.8 0v2.8a1.4 1.4 0 01-1.4 1.4zm0 0l-11.319 4.108a1.4 1.4 0 01-.992-.411l-1.572-1.573a1.4 1.4 0 111.983-1.983l1.572 1.573a1.4 1.4 0 01-.991 2.394zm24.21 24.211a1.4 1.4 0 01-.991-.411l-1.572-1.573a1.4 1.4 0 111.983-1.983l1.572 1.573a1.4 1.4 0 01-.992 2.394zm0 0h-25.783a1.4 1.4 0 01-.991-2.394l1.572-1.573a1.4 1.4 0 111.983 1.983l-1.572 1.573a1.4 1.4 0 01-.992.411zm24.211-24.211a1.4 1.4 0 01-.991-2.394l1.572-1.573a1.4 1.4 0 011.983 1.983l-1.572 1.573a1.4 1.4 0 01-.992.411zm0 0"
      transform="translate(-609.265 -97.266)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
