import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {BACKGROUND_COLOR} from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'PushDetail'>;

const ITEMS = Array.from({length: 30}, (_, i) => `Item ${i + 1}`);

export function PushDetailScreen(_props: Props) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.scroll}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{paddingBottom: insets.bottom + 16}}>
      {ITEMS.map(item => (
        <Text key={item} style={styles.row}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  row: {
    fontSize: 17,
    paddingVertical: 14,
    paddingHorizontal: 20,
    textAlign: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
  },
});
