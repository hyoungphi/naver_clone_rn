import { View, Text, StatusBar } from 'react-native';
import DefaultWrapper from 'src/components/DefaultWrapper';
import HomeHeader from './components/HomeHeader';
export default function Home() {
    return (
        <DefaultWrapper>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <HomeHeader />
                <Text>Home.js</Text>
                <StatusBar style="auto" />
            </View>
        </DefaultWrapper>
    );
}