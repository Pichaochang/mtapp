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
      id="\u5F62\u72B6_6"
      data-name="\u5F62\u72B6 6"
      d="M57.1 118.939h3.526a5.537 5.537 0 015.537 5.543v24.159a5.54 5.54 0 01-5.537 5.544H33.43a5.537 5.537 0 01-5.537-5.543v-24.159a5.54 5.54 0 015.537-5.544h3.527v-1.51a1.511 1.511 0 113.021 0v1.51h14.1v-1.51a1.511 1.511 0 113.021 0v1.51zm0 3.021v1.511a1.511 1.511 0 01-3.021 0v-1.511h-14.1v1.511a1.511 1.511 0 01-3.021 0v-1.511H33.43a2.519 2.519 0 00-2.516 2.522v24.159a2.517 2.517 0 002.516 2.523h27.194a2.518 2.518 0 002.516-2.522v-24.159a2.515 2.515 0 00-2.516-2.523H57.1zm-.5 10.574a1.511 1.511 0 110 3.021H37.46a1.511 1.511 0 010-3.021h19.134zm-6.042 7.553a1.511 1.511 0 110 3.021H37.46a1.511 1.511 0 010-3.021h13.092zm0 0"
      transform="translate(-27.031 -115.047)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
