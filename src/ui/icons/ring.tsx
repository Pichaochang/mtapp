import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const Ring = ({ color = '#FFf', style, ...props }: SvgProps) => (
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
      id="\u5F62\u72B6_31"
      data-name="\u5F62\u72B6 31"
      d="M631.406 105.842a1.3 1.3 0 01-1.3-1.3v-3.253a1.3 1.3 0 112.6 0v3.253a1.3 1.3 0 01-1.3 1.3zm9.143 3.787a1.3 1.3 0 010-1.839l2.3-2.3a1.3 1.3 0 111.84 1.84l-2.3 2.3a1.3 1.3 0 01-1.841 0zm3.788 9.144a1.3 1.3 0 011.3-1.3h3.253a1.3 1.3 0 010 2.6h-3.253a1.3 1.3 0 01-1.3-1.3zm-3.788 9.143a1.3 1.3 0 011.84 0l2.3 2.3a1.3 1.3 0 11-1.84 1.84l-2.3-2.3a1.3 1.3 0 010-1.84zm-9.143 3.788a1.3 1.3 0 011.3 1.3v3.253a1.3 1.3 0 01-2.6 0v-3.253a1.3 1.3 0 011.3-1.3zm-9.143-3.788a1.3 1.3 0 010 1.84l-2.3 2.3a1.3 1.3 0 01-1.84-1.84l2.3-2.3a1.3 1.3 0 011.839 0zm-3.787-9.143a1.3 1.3 0 01-1.3 1.3h-3.252a1.3 1.3 0 110-2.6h3.252a1.3 1.3 0 011.3 1.3zm3.787-9.144a1.3 1.3 0 01-1.84 0l-2.3-2.3a1.3 1.3 0 011.841-1.84l2.3 2.3a1.3 1.3 0 010 1.839zm9.143-.534a9.759 9.759 0 11-9.758 9.759 9.759 9.759 0 019.758-9.759zm0 2.6a7.157 7.157 0 107.157 7.158 7.157 7.157 0 00-7.157-7.158zm0 0"
      transform="translate(-609.407 -96.781)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
