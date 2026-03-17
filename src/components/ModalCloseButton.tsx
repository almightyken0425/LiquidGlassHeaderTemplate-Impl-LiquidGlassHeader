import React from 'react';
import {TouchableOpacity, StyleSheet, PlatformColor} from 'react-native';
import {SFSymbol} from 'react-native-sfsymbols';

interface Props {
  onPress: () => void;
}

/**
 * Modal 關閉按鈕（SF Symbol: xmark）
 * - padding 取代固定 width/height，讓 iOS 決定容器大小
 * - iOS 26 Liquid Glass 圓圈由 padding 決定尺寸
 */
export function ModalCloseButton({onPress}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={styles.button}
      accessibilityLabel="關閉"
      accessibilityRole="button">
      <SFSymbol
        name="xmark"
        weight="semibold"
        scale="medium"
        color={PlatformColor('label') as unknown as string}
        size={17}
        resizeMode="center"
        multicolor={false}
        style={styles.symbol}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbol: {
    width: 17,
    height: 17,
  },
});
