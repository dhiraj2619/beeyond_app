import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/Scaling';
import {verticalScale} from 'react-native-size-matters';

export const NotificationStyle = StyleSheet.create({
  notification: {
    backgroundColor: '#363636',
    padding: horizontalScale(12),
    position: 'absolute',
    top: verticalScale(4),
    left: horizontalScale(6),
    width: 380,
    borderRadius: horizontalScale(7),
  },
  notiText: {
    color: '#fff',
    fontSize: scaleFontSize(13),
  },
});
