import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const TranferIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
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
      id="\u5F62\u72B6_22"
      data-name="\u5F62\u72B6 22"
      d="M79.825 485.027H63.9l3.614-3.4a.5.5 0 000-.824l-.88-.828a.571.571 0 00-.88 0l-5.371 5.048a.469.469 0 00-.195.365.327.327 0 00-.1.276v1.193a.649.649 0 00.686.641h19.249a.651.651 0 00.685-.641v-1.193a.913.913 0 00-.884-.641zm.288 4.2H60.776a.667.667 0 00-.686.5V491c0 .393 0 .791 1.278.791h15.118l-3.241 3.161a.554.554 0 000 .889l.884.888a.549.549 0 00.884 0l5.3-5.039a.619.619 0 00.393-.593v-1.286a.893.893 0 00-.6-.592zm0 0"
      transform="translate(-58.406 -476.375)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
