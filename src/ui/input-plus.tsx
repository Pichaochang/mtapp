import { useColorScheme } from 'nativewind';
import * as React from 'react';
import type { TextInput, TextInputProps } from 'react-native';
import { View } from 'react-native';
import { TextInput as NTextInput } from 'react-native';
import { StyleSheet } from 'react-native';

import { SearchIcon } from '@/ui/icons';

import colors from './colors';

interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
}

export const InputPlus = React.forwardRef<TextInput, NInputProps>(
  (props, ref) => {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 5,
      },
      input: {
        flex: 1,
        height: 20,
        marginLeft: 5,
      },
    });
    const { ...inputProps } = props;
    const { colorScheme } = useColorScheme();
    const iconColor = colorScheme === 'dark' ? '#fff' : colors.neutral[500];
    return (
      <View
        style={styles.container}
        className="mt-0 h-full rounded-xl border-[0.5px] border-neutral-300 bg-neutral-100 px-4 py-0 font-inter text-base  leading-5 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
      >
        <View className="w-full" style={styles.inputContainer}>
          <SearchIcon className="mr-1" color={iconColor} />
          <NTextInput
            ref={ref}
            selectionColor="transparent"
            className="focus:outline-none active:outline-none "
            placeholderTextColor={colors.neutral[400]}
            {...inputProps}
            style={styles.input}
          />
        </View>
      </View>
    );
  }
);
