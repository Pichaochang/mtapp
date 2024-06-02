import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const SwapIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 28.5 28.5"
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
      id="\u5F62\u72B6_25"
      data-name="\u5F62\u72B6 25"
      d="M620 474.547a5.739 5.739 0 105.739 5.738 5.738 5.738 0 00-5.739-5.738zm0 2.591a3.148 3.148 0 11-3.147 3.147 3.147 3.147 0 013.147-3.147zm13.327 10.736a5.739 5.739 0 105.739 5.738 5.739 5.739 0 00-5.739-5.738zm0 2.591a3.147 3.147 0 11-3.147 3.147 3.149 3.149 0 013.147-3.147zm-20.917-3.516a1.3 1.3 0 011.876-1.159l4.319 2.16a1.3 1.3 0 01-1.161 2.318l-2.237-1.119.01.041a11.667 11.667 0 0010.988 9.413l.459.008a1.3 1.3 0 010 2.591 14.253 14.253 0 01-14.254-14.253zm14.258-14.249a14.253 14.253 0 0114.253 14.254 1.3 1.3 0 01-1.874 1.159l-4.321-2.161a1.3 1.3 0 111.161-2.317l2.233 1.117-.006-.041a11.666 11.666 0 00-10.988-9.411l-.458-.008a1.3 1.3 0 010-2.592zm0 0"
      transform="translate(-612.406 -472.688)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
