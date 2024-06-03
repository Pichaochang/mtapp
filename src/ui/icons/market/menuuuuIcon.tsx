import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const MenuuuuIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      id="\u77E9\u5F62_1_\u62F7\u8D1D"
      data-name="\u77E9\u5F62 1 \u62F7\u8D1D"
      d="M692 121h28a2 2 0 010 4h-28a2 2 0 010-4zm8 24h20a2 2 0 010 4h-20a2 2 0 010-4zm-14-12h34a2 2 0 010 4h-34a2 2 0 010-4z"
      transform="translate(-683 -115)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
