import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const RecordIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
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
      id="\u5F62\u72B6_24"
      data-name="\u5F62\u72B6 24"
      d="M49.992 518.43A16.332 16.332 0 1033.66 502.1a16.332 16.332 0 0016.332 16.33zm0 2.722A19.054 19.054 0 1169.045 502.1a19.054 19.054 0 01-19.054 19.054zm-2.768-27.117a1.361 1.361 0 00-2-1.845l-4.513 4.894a1.361 1.361 0 001 2.284h16.455a1.361 1.361 0 100-2.722H44.817zm5.545 16.125a1.361 1.361 0 002 1.846l4.513-4.894a1.361 1.361 0 00-1-2.284H41.826a1.361 1.361 0 100 2.722h13.348l-2.406 2.613zm0 0"
      transform="translate(-27.984 -480.093)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
