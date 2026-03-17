import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SFSymbol} from 'react-native-sfsymbols';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {ACCENT_COLOR, BACKGROUND_COLOR} from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const ITEMS = Array.from({length: 30}, (_, i) => `Item ${i + 1}`);

export function HomeScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{paddingBottom: insets.bottom + 80}}>
        {ITEMS.map(item => (
          <Text key={item} style={styles.row}>
            {item}
          </Text>
        ))}
      </ScrollView>

      {/* FAB */}
      <View style={[styles.fabContainer, {bottom: insets.bottom + 24}]}>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate('Modal')}
          activeOpacity={0.8}>
          <SFSymbol
            name="square.and.arrow.up"
            weight="semibold"
            scale="medium"
            color="#fff"
            size={20}
            resizeMode="center"
            multicolor={false}
            style={styles.fabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate('PushDetail')}
          activeOpacity={0.8}>
          <SFSymbol
            name="chevron.right"
            weight="semibold"
            scale="medium"
            color="#fff"
            size={20}
            resizeMode="center"
            multicolor={false}
            style={styles.fabIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  scroll: {
    flex: 1,
  },
  row: {
    fontSize: 17,
    paddingVertical: 14,
    paddingHorizontal: 20,
    textAlign: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
  },
  fabContainer: {
    position: 'absolute',
    right: 20,
    flexDirection: 'column',
    gap: 12,
  },
  fab: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: ACCENT_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  fabIcon: {
    width: 20,
    height: 20,
  },
});
