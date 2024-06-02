import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const CopyIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      id="\u5F62\u72B6_14"
      data-name="\u5F62\u72B6 14"
      d="M388.627 625.241a2.589 2.589 0 012.59 2.587v7.113a2.589 2.589 0 01-2.59 2.587H381.5a2.589 2.589 0 01-2.59-2.587v-7.113a2.589 2.589 0 012.59-2.587h7.123zm0 1.293H381.5a1.3 1.3 0 00-1.292 1.2v7.213a1.293 1.293 0 001.2 1.29h7.223a1.3 1.3 0 001.292-1.2v-7.213a1.293 1.293 0 00-1.2-1.29zm-2.266-4.526a.646.646 0 01.075 1.288h-7.603a1.545 1.545 0 00-1.535 1.432V632.346a.647.647 0 01-1.29.075v-7.593a2.838 2.838 0 012.7-2.826H386.373zm0 0"
      transform="translate(-375.61 -622)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
