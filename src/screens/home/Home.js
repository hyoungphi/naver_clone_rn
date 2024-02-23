import React, { useRef, useState } from 'react';
import { Text, StyleSheet, View, Animated, Pressable } from 'react-native';
import DefaultWrapper from '@components/DefaultWrapper';
import HomeHeader from './components/HomeHeader';
import Icon from '@assets/icons/Icon';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';

const SHOW_HEADER_SCROLL_OFFSET = 10;
const HEADER_ANIMATION_DURATION = 200;
const SEARCH_BAR_TOP = 100;
const FlatListTop = SEARCH_BAR_TOP + 100;

export default function Home() {


    const scrollY = useRef(new Animated.Value(0)).current;
    const flatListRef = React.useRef();
    const [headerOpacity, setHeaderOpacity] = useState(new Animated.Value(1));
    const [isSearchBarRound, setIsSearchBarRound] = useState(true);
    const [isScrollToTop, setIsScrollToTop] = useState(false);
    const searchBarTop = scrollY.interpolate({
        inputRange: [0, SEARCH_BAR_TOP],
        outputRange: [SEARCH_BAR_TOP, 0],
        extrapolate: 'clamp'
    });

    const handleScroll = (event) => {
        const yOffset = event.nativeEvent.contentOffset.y;
        if (yOffset > SHOW_HEADER_SCROLL_OFFSET && headerOpacity._value === 1) {
            Animated.timing(headerOpacity, {
                toValue: 0,
                duration: HEADER_ANIMATION_DURATION,
                useNativeDriver: false,
            }).start();
        }
        if (yOffset < SHOW_HEADER_SCROLL_OFFSET && headerOpacity._value === 0) {
            Animated.timing(headerOpacity, {
                toValue: 1,
                duration: HEADER_ANIMATION_DURATION,
                useNativeDriver: false,
            }).start();
        }
        if (yOffset > SEARCH_BAR_TOP) {
            setIsSearchBarRound(false);
        }
        else {
            setIsSearchBarRound(true);
        }
        if (yOffset > 0) {
            setIsScrollToTop(true);
        }
        else {
            setIsScrollToTop(false);
        }
    }
    const scrollToTop = () => {
        flatListRef.current.scrollToOffset({ animated: false, offset: 0 });
    }

    return (
        <DefaultWrapper>

            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    {
                        useNativeDriver: false,
                        listener: handleScroll
                    }
                )}
                ref={flatListRef}
                data={[...Array(20)]}
                renderItem={({ item, index }) => {
                    if (index === 0) {
                        return <View style={styles.gap} />
                    }
                    if (index === 1) {
                        return <View style={styles.weather} >
                            <Weather weatherData={
                                [
                                    {
                                        title: '2.4',
                                        titleColor: 'black',
                                        discription: 'Colder than yesterday',
                                        icon: <Icon name='snow-rain' size={24} />
                                    },
                                    {
                                        title: '5 Good',
                                        titleColor: 'blue',
                                        discription: 'fine dust',
                                        icon: <Icon name='dust' />
                                    }
                                ]
                            }
                            />
                        </View>
                    }
                    return <Text style={styles.dummy} key={index}>Dummy Data {index}</Text>
                }
                }
                keyExtractor={(item, index) => index.toString()}
            />
            <Animated.View style={{ top: searchBarTop, ...styles.searchBar }}>
                <SearchBar isRound={isSearchBarRound} />
            </Animated.View>
            <Animated.View style={{ opacity: headerOpacity, ...styles.header }}>
                <HomeHeader />
            </Animated.View>
            <Pressable
                style={styles.scrollToTop}
                onPress={scrollToTop}
            >
                {isScrollToTop ? <Icon name='arrow-up' /> : null}
            </Pressable>
        </DefaultWrapper >
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        width: '100vw',
    },
    gap: {
        height: FlatListTop,
        flexDirection: 'column-reverse',
    },
    searchBar: {
        position: 'absolute', width: '100vw', alignItems: 'center'
    },
    scrollToTop: {
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
        backgroundColor: 'white',
        borderRadius: '50%',
    },
    weather: {
        width: '100%',
        alignItems: 'center',
        height: '7rem',
    },
    dummy: {
        width: '90%',
        height: '2rem',
        borderWidth: 1,
        backgroundColor: 'white',
        margin: '1rem',
        padding: '1rem',

    },
});