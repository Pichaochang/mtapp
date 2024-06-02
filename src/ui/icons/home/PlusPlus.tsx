import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const PlusPlusIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 36 36"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    {/* <Path
      d="M.872 13.101a.874.874 0 0 0 .621-.253l5.252-5.253a.875.875 0 0 0 0-1.234L1.493 1.11A.875.875 0 0 0 .26 2.343l4.63 4.63-4.63 4.632A.876.876 0 0 0 .872 13.1Z"
      fill={color}
    /> */}

    <Path
      id="\u5F62\u72B6_3"
      data-name="\u5F62\u72B6 3"
      d="M705.5 520.84a16.34 16.34 0 1116.34-16.34 16.382 16.382 0 01-16.34 16.34zm0-2.343a14 14 0 10-14-14 14.027 14.027 0 0014 14zm7.084-13.317h-13.412a.987.987 0 01-.982-.982v-.265a.987.987 0 01.982-.982h13.412a.987.987 0 01.982.982v.267a1 1 0 01-.982.982zm-7.84 6.328l.038-13.412a.988.988 0 01.982-.982h.265a.987.987 0 01.982.982l-.038 13.412a.987.987 0 01-.982.982h-.264a.976.976 0 01-.983-.982zm0 0"
      transform="translate(-688.5 -487.5)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
