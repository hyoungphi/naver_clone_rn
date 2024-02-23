import { StyleSheet, View, Text } from 'react-native';


export default function SearchBarFlat(props) {
  return (
    <View style={styles.serchBar}>
      <Text>SearchBarFlat.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  serchBar: {
    height: '2rem',
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'green',
    backgroundColor: 'white',
  },
});