import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const WalletMarket = ({ color = '#CCC', style, ...props }: SvgProps) => (
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
      id="\u5F62\u72B6_36"
      data-name="\u5F62\u72B6 36"
      d="M686.249 876.223h-23.736a6.478 6.478 0 01-6.471-6.47v-21.1a6.478 6.478 0 016.471-6.47h23.732a6.479 6.479 0 016.472 6.47v3.939a1.314 1.314 0 01-2.627 0v-3.939a3.847 3.847 0 00-3.845-3.844h-23.732a3.847 3.847 0 00-3.845 3.844v21.1a3.847 3.847 0 003.845 3.844h23.732a3.847 3.847 0 003.845-3.844v-4.033a1.314 1.314 0 012.627 0v4.033a6.475 6.475 0 01-6.468 6.47zm0 0l6.468-10.5h-10.506a6.564 6.564 0 110-13.128h10.506a1.311 1.311 0 011.313 1.312v10.5a1.311 1.311 0 01-1.313 1.313zm-10.506-10.5a3.939 3.939 0 100 7.878H691.4v-7.878h-9.193zm0 0"
      transform="translate(-655.031 -839.204)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
