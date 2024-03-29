import { Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shopping from '@screens/Shopping';
import Home from '@screens/home/Home';
import Content from '@screens/Content';
import Clip from '@screens/Clip';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'src/assets/icons/Icon';

const Tab = createBottomTabNavigator();


export default function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            if (focused) {
              return <Icon name="home" size={size} color={color} />;
            }
            return <Icon name="homeOutline" size={size} color={color} />;
          }
          if (route.name === 'Shopping') {
            if (focused) {
              return <Icon name="shopping" size={size} color={color} />;
            }
            return <Icon name="shoppingOutline" size={size} color={color} />;
          }
          if (route.name === 'Content') {
            if (focused) {
              return <Icon name="content" size={size} color={color} />;
            }
            return <Icon name="contentOutline" size={size} color={color} />;
          }
          if (route.name === 'Clip') {
            if (focused) {
              return <Icon name="clip" size={size} color={color} />;
            }
            return <Icon name="clipOutline" size={size} color={color} />;
          }
          return <Icon name="warning" size={size} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          return <Text style={{ color: color, textAlign: 'center' }}>{route.name}</Text>;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Shopping" component={Shopping} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Content" component={Content} />
      <Tab.Screen name="Clip" component={Clip} />
    </Tab.Navigator>
  );
}
