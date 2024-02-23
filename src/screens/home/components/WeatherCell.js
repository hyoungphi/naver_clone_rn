import { Text, View, StyleSheet } from 'react-native';
import Icon from 'src/assets/icons/Icon';

export default function WeatherCell({ title, titleColor, discription, icon, }) {
  return (
    <View style={styles.weatherCell}>
      <View style={styles.info}>
        <Text style={{ color: titleColor, ...styles.title }}>{title}</Text>
        <Text style={styles.discription}>{discription}</Text>
      </View>
      <View style={styles.icon}>
        {icon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherCell: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1rem',
    height: '100%',
    borderRadius: 25,
    backgroundColor: 'white',
  },
  info: {
    flex: 3,
    flexDirection: 'column',
    title: {
      fontSize: '1rem',
    },
    discription: {
      fontSize: '0.8rem',
    },
  },
  icon: {
    flex: 1,
  },
});