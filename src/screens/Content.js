import { View, Text, StatusBar } from 'react-native';
export default function Content() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Content.js</Text>
            <StatusBar style="auto" />
        </View>
    );
}