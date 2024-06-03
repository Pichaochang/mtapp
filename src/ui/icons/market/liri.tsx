import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const LiriIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
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
      id="\u5F62\u72B6_35_\u62F7\u8D1D_2"
      data-name="\u5F62\u72B6 35 \u62F7\u8D1D 2"
      d="M693.413 581.783l-6.307 8.372a.88.88 0 01-1.473 0l-6.409-8.372c-.414-.541-.2-.971.473-.971h13.232c.676 0 .888.435.484.971zm0 0"
      transform="translate(-679 -578.39)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
