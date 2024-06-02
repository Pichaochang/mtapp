import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const AboutUsIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
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
      id="\u5F62\u72B6_28"
      data-name="\u5F62\u72B6 28"
      d="M29.987 1038.23a20.715 20.715 0 0121.737-20.65 20.72 20.72 0 01-1.811 41.4 20.068 20.068 0 01-14.409-6.63 20.389 20.389 0 01-5.517-14.12zm20.994-17.39a17.291 17.291 0 00-12.114 4.68 17.429 17.429 0 0011.153 30.17 17.432 17.432 0 10.962-34.85zm0 0l1.359 21.23c0 1.71-.03 3.41.006 5.12a1.64 1.64 0 11-3.232.38 2.6 2.6 0 01-.068-.59v-9.77a1.668 1.668 0 011.012-1.72 1.615 1.615 0 012.282 1.42c.006 1.72 0 3.44 0 5.16zm1.181-12.68a2.539 2.539 0 01-2.708 2.55 2.569 2.569 0 11.3-5.13 2.544 2.544 0 012.412 2.58zm0 0"
      transform="translate(-28.703 -1016.265)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
