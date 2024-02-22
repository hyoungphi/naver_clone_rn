import { View } from 'react-native';

export default function DefaultWrapper({ children }) {
  return (
    <View >
      {children}
    </View>
  );
}