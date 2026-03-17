import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {HomeScreen} from '../screens/HomeScreen';
import {PushDetailScreen} from '../screens/PushDetailScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {ModalCloseButton} from '../components/ModalCloseButton';
import {ACCENT_COLOR, TEXT_COLOR} from '../theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Push / Segue 通用 header 設定
 * - headerBackButtonDisplayMode: 'minimal'
 *   iOS 26 Liquid Glass pill 只顯示箭頭，不顯示上一頁標題（必須）
 */
const pushScreenOptions = {
  headerTransparent: true,
  headerTintColor: ACCENT_COLOR,
  headerBackTitleVisible: false,
  headerBackButtonDisplayMode: 'minimal' as const,
  headerTitleStyle: {
    fontSize: 17,
    fontWeight: '600' as const,
    color: TEXT_COLOR,
  },
  headerShadowVisible: false,
};

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={pushScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: '首頁'}} />
        <Stack.Screen name="PushDetail" component={PushDetailScreen} options={{title: '詳細頁'}} />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={({navigation}) => ({
            presentation: 'fullScreenModal',
            title: 'Modal 標題',
            headerLeft: () => (
              <ModalCloseButton onPress={() => navigation.goBack()} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
