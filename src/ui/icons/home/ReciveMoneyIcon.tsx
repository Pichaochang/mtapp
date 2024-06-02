import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const ReciveMoneyIcon = ({
  color = '#fff',
  style,
  ...props
}: SvgProps) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 28 28"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      id="\u5F62\u72B6_23"
      data-name="\u5F62\u72B6 23"
      d="M260.733 474.734a1.226 1.226 0 011.21 1.212V488h5.691l-10.915 11.264a2.4 2.4 0 01-3.438 0L242.372 488h5.69v-12.06a1.215 1.215 0 011.211-1.212h11.46m0-1.811h-11.466a3.036 3.036 0 00-3.027 3.023v10.24h-4.007a1.755 1.755 0 00-1.265 2.974l11.144 11.6a4 4 0 005.776 0l11.144-11.6a1.755 1.755 0 00-1.265-2.974h-4.007v-10.24a3.036 3.036 0 00-3.027-3.023zm0 0l-2.41 15.819a1.024 1.024 0 110 2.047h-2.04v1.278a1.277 1.277 0 11-2.554 0v-1.278h-2.046a1.024 1.024 0 110-2.047h2.046v-1.023h-2.046a1.024 1.024 0 010-2.048h2.046v-.065l-2.277-2.265a1.028 1.028 0 111.453-1.454l2.071 2.072 2.082-2.084a1.03 1.03 0 011.459 1.454l-2.24 2.241v.1h2.04a1.024 1.024 0 010 2.048h-2.04v1.023h2.046zm0 0"
      transform="translate(-241 -473.453)"
      fill={color}
      fillRule="evenodd"
    />
    {/* <Path
      d="M.872 13.101a.874.874 0 0 0 .621-.253l5.252-5.253a.875.875 0 0 0 0-1.234L1.493 1.11A.875.875 0 0 0 .26 2.343l4.63 4.63-4.63 4.632A.876.876 0 0 0 .872 13.1Z"
      fill={color}
    /> */}
  </Svg>
);
