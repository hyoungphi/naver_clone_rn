import { Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shopping from '@screens/Shopping';
import Home from '@screens/Home';
import Content from '@screens/Content';
import Clip from '@screens/Clip';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export default function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            if (focused) {
              return <MaterialIcons name="home" size={size} color={color} />;
            }
            return <MaterialCommunityIcons name="home-outline" size={size} color={color} />;
          }
          if (route.name === 'Shopping') {
            if (focused) {
              return <MaterialCommunityIcons name="cart" size={size} color={color} />;
            }
            return <MaterialCommunityIcons name="cart-outline" size={size} color={color} />;
          }
          if (route.name === 'Content') {
            if (focused) {
              return <MaterialCommunityIcons name="file-document" size={size} color={color} />;
            }
            return <MaterialCommunityIcons name="file-document-outline" size={size} color={color} />;
          }
          if (route.name === 'Clip') {
            if (focused) {
              return <Ionicons name="play" size={size} color={color} />;
            }
            return <Ionicons name="play-outline" size={size} color={color} />;
          }
          return <Ionicons name={'warning'} size={size} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          return <Text style={{ color: color, textAlign: 'center' }}>{route.name}</Text>;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Shopping" component={Shopping} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Content" component={Content} />
      <Tab.Screen name="Clip" component={Clip} />
    </Tab.Navigator>
  );
}
