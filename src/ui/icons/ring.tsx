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
      id="\u5F62\u72B6_4"
      data-name="\u5F62\u72B6 4"
      d="M707.5 107.7a8.536 8.536 0 018.583 8.488v10.074a3.69 3.69 0 00.715 2.188l1.354 1.886h-21.3l1.355-1.886a3.7 3.7 0 00.715-2.188V116.19a8.535 8.535 0 018.578-8.49m0-2.83a11.509 11.509 0 00-8.091 3.315 11.258 11.258 0 00-3.352 8v10.074a.941.941 0 01-.181.547l-2.432 3.376a1.868 1.868 0 00-.141 1.959 1.909 1.909 0 001.7 1.022h25a1.91 1.91 0 001.7-1.022 1.87 1.87 0 00-.141-1.959l-2.432-3.376a.934.934 0 01-.181-.547V116.19a11.382 11.382 0 00-11.449-11.318zm.954-.943h-1.907a1.415 1.415 0 110-2.83h1.907a1.415 1.415 0 110 2.83zm2.384 33.955h-5.722a1.415 1.415 0 110-2.83h5.722a1.415 1.415 0 110 2.83zm0 0"
      transform="translate(-687.5 -99.484)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
