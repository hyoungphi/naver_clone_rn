import { StyleSheet, Text, View } from 'react-native';
import WeatherCell from './WeatherCell';

export default function Weather({ weatherData }) {
  return (
    <View style={styles.weather}>
      {weatherData.map((data, index) => {
        return <View
          key={index}
          style={styles.weather.cell}
        >
          <WeatherCell
            title={data.title}
            titleColor={data.titleColor}
            discription={data.discription}
            icon={data.icon}
          />
        </View>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  weather: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    cell: {
      flex: 1,
      margin: '1rem',
    },
  },
});
