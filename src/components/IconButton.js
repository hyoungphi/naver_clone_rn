import { StyleSheet, View, TouchableOpacity, Pressable } from 'react-native';


export default function IconButton({ icon, onPress, style }) {
  let _style = style;
  if (_style === undefined) {
    _style = styles.iconButton;
  }

  return (
    <Pressable style={_style} onPress={onPress}>
      {icon}
    </Pressable>
  );
}


const styles = StyleSheet.create({
  iconButton: {
    padding: '1rem',
    color: 'black',
    fontSize: '1.5rem',

  },
});
