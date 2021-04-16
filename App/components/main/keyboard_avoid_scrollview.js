import React from 'react';
import {
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  //   SafeAreaView,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import Constants from '../../config';
import {SafeAreaView} from 'react-navigation';
export default function KeyboardAvoidScrollview(props) {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={DeviceInfo.hasNotch() ? 85 : 55}
      enabled={Platform.OS === 'ios' ? true : false}
      style={{
        flex: 1,
        backgroundColor: !!props.backgroundColor
          ? props.backgroundColor
          : Constants.colors.white,
      }}>
      <SafeAreaView>
        {!!props.header ? props.header : null}
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            flexGrow: 1,
            padding: 0,
            justifyContent: 'flex-start',
          }}
          showsVerticalScrollIndicator={false}>
          {props.children}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
