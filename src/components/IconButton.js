import { StyleSheet, View, TouchableOpacity } from 'react-native';


export default function IconButton({ icon, onPress, style }) {
  let _style = style;
  if (_style === undefined) {
    _style = styles.iconButton;
  }

  return (
    <TouchableOpacity style={_style} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  iconButton: {
    padding: '1rem',
    color: 'black',
    fontSize: '1.5rem',

  },
});
