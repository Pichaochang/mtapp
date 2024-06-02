import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const WalletIcon = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width={26}
    height={26}
    viewBox="0 0 52 52"
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
      id="\u5F62\u72B6_1"
      data-name="\u5F62\u72B6 1"
      d="M619.786 150.3a1.129 1.129 0 010-2.258h5.633a1.129 1.129 0 010 2.258h-5.633zm-2.286-11.288h31.547a4.51 4.51 0 014.506 4.517v6.771H651.3v-5.646a3.384 3.384 0 00-3.38-3.388h-29.296a3.383 3.383 0 00-3.38 3.388v13.551h21.442a1.129 1.129 0 010 2.258h-21.442v4.517a3.383 3.383 0 003.38 3.388h19.188v2.259H617.5a4.512 4.512 0 01-4.506-4.517v-22.581a4.512 4.512 0 014.506-4.517zm32.709 14.68a10.167 10.167 0 11-10.14 10.163 10.14 10.14 0 0110.14-10.163zm0 18.068a7.9 7.9 0 10-5.577-2.315 7.9 7.9 0 005.577 2.315zm-3.38-9.034h2.253v-2.259a1.127 1.127 0 112.253 0v2.259h2.253a1.129 1.129 0 010 2.258h-2.253v2.259a1.127 1.127 0 11-2.253 0v-2.259h-2.253a1.129 1.129 0 010-2.258zm0 0"
      transform="translate(-610.672 -130.5)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
