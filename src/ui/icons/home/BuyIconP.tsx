import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const BuyIconP = ({ color = '#CCC', style, ...props }: SvgProps) => (
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
      id="\u5F62\u72B6_24"
      data-name="\u5F62\u72B6 24"
      d="M439.76 474.987h.329l8.65.4a2.661 2.661 0 012.512 2.3l.022.238.4 8.659a4.327 4.327 0 01-1.037 3.017l-.225.242-9.887 9.893a4.32 4.32 0 01-5.886.211l-.227-.211-7.469-7.473a4.325 4.325 0 01-.211-5.888l.211-.228 9.888-9.893a4.317 4.317 0 012.6-1.241zm-9.72 10.886l-1.683 1.683a2.33 2.33 0 00-.161 3.117l.161.176 7.468 7.472a2.327 2.327 0 003.117.161l.177-.161 1.682-1.684-10.76-10.764zm9.958-8.89a2.325 2.325 0 00-1.571.515l-.183.165-6.794 6.8 10.759 10.766 6.8-6.8a2.327 2.327 0 00.677-1.51v-.245l-.4-8.658a.665.665 0 00-.508-.616l-.127-.017-8.648-.4zm4.7 3.163a1.664 1.664 0 11-1.662 1.663 1.664 1.664 0 011.662-1.663zm0 0"
      transform="translate(-424.688 -474)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
