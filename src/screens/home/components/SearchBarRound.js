import { StyleSheet, View, Text } from 'react-native';


export default function SearchBarRound(props) {
  return (
    <View style={styles.serchBar}>
      <Text>SearchBarRound.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  serchBar: {
    width: '90%',
    height: '2rem',
    borderRadius: '1rem',
    borderWidth: 1,
    borderBlockColor: 'green',
    backgroundColor: 'white',
    margin: '1rem',
  },
});