import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const PlusIconWallet = ({
  color = '#CCC',
  style,
  ...props
}: SvgProps) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 1024 1024"
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
    {/* <Path
      id="\u5F62\u72B6_30"
      data-name="\u5F62\u72B6 30"
      d="M695.061 800.439v7.684a1.082 1.082 0 11-2.163 0v-7.684h-7.765a1.082 1.082 0 110-2.163h7.767v-7.662a1.082 1.082 0 012.163 0v7.662h7.806a1.082 1.082 0 110 2.163h-7.806z"
      transform="translate(-684.062 -789.531)"
      fill={color}
      fillRule="evenodd"
    /> */}
    <Path
      fill={color}
      d="M512 1023.915c-281.316 0-509.27-229.206-509.27-511.943C2.73 229.177 230.685.028 512 .028c281.23 0 509.24 229.149 509.24 511.944 0 282.794-227.924 511.943-509.24 511.943zm0-955.705c-243.769 0-441.372 198.656-441.372 443.705C70.628 756.878 268.23 955.59 512 955.59c243.74 0 441.287-198.627 441.344-443.676C953.344 266.865 755.74 68.21 512 68.21zm234.382 473.6H546.56l-.882 228.722c0 8.476 1.82 44.8-37.433 44.8-37.262 0-33.536-23.98-33.536-42.07l.086-231.395H255.26c-14.336 0-31.374.085-31.374-43.748 0-32.569 39.85-28.871 39.85-28.871h211.059v-220.7c0-14.45 11.121-27.307 35.84-25.856 24.718 1.422 35.84 11.463 35.84 25.856v220.7h199.85s45.54-5.945 45.085 34.588c-.484 40.562-35.869 37.974-45.028 37.974z"
    />
  </Svg>
);