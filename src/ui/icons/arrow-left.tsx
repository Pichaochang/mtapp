import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const ArrowLeft = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      id="\u5F62\u72B6_20"
      data-name="\u5F62\u72B6 20"
      d="M32.358 123l7.635-7.777L37.812 113 28 123l9.816 10 2.181-2.221z"
      transform="translate(-24 -113)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
