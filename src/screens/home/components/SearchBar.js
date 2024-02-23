import { useEffect, useRef, } from 'react';
import { StyleSheet, Text, Animated, Dimensions, } from 'react-native';

const ANIMATION_DURATION = 100;

export default function SearchBar({ isRound }) {

  const borderRadius = useRef(new Animated.Value(isRound ? 25 : 0)).current;
  const width = useRef(new Animated.Value(isRound ? Dimensions.get('window').width * 0.8 : Dimensions.get('window').width)).current;

  useEffect(() => {
    Animated.timing(borderRadius, {
      toValue: isRound ? 25 : 0,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();
    Animated.timing(width, {
      toValue: isRound ? Dimensions.get('window').width * 0.8 : Dimensions.get('window').width,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();
  }, [isRound]);


  const animatedStyles = {
    borderRadius,
    width: width,
  };

  return (
    <Animated.View style={{ ...animatedStyles, ...styles.searchBar }}>
      <Text>SearchBar.js</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: '2rem',
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'white',
  },
});