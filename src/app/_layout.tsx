/* eslint-disable react/react-in-jsx-scope */
// Import  global CSS file
import '../../global.css';

import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import {
  ThemeProvider,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
// import { Stack, useNavigationContainerRef } from 'expo-router';
import { SplashScreen } from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { APIProvider } from '@/api';
import { hydrateAuth } from '@/core';
import { loadSelectedTheme } from '@/core';
import { useThemeConfig } from '@/core/use-theme-config';

export const unstable_settings = {
  initialRouteName: '(app)',
};

hydrateAuth();
loadSelectedTheme();
// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="recordList" options={{ headerShown: false }} />
        <Stack.Screen name="recordOp" options={{ headerShown: false }} />
        <Stack.Screen name="tokenDetail" options={{ headerShown: false }} />
        {/* <Stack.Screen name="login" options={{ headerShown: false }} /> */}
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();
  return (
    <GestureHandlerRootView
      style={styles.container}
      className={theme.dark ? `dark` : 'light'}
    >
      <ThemeProvider value={theme}>
        <APIProvider>
          <BottomSheetModalProvider>
            {children}
            {/* <FlashMessage position="top" /> */}
          </BottomSheetModalProvider>
        </APIProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
