import React from 'react';
import {Text, View} from 'react-native';
import {NotificationStyle} from './Style';

const Notification = ({message}) => {
  if (!message) {
    return null;
  }
  return (
    <View style={NotificationStyle.notification}>
      <Text style={NotificationStyle.notiText}>{message}</Text>
    </View>
  );
};

export default Notification;
