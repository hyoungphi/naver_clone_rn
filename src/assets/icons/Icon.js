import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";


export default function Icon(props) {
  let size = props.size ?? '1.5rem'
  let color = props.color ?? 'black'
  let name = props.name

  switch (name) {
    case 'home':
      return <MaterialIcons name='home' size={size} color={color} />
    case 'homeOutline':
      return <MaterialCommunityIcons name='home-outline' size={size} color={color} />
    case 'shopping':
      return <MaterialCommunityIcons name='cart' size={size} color={color} />
    case 'shoppingOutline':
      return <MaterialCommunityIcons name='cart-outline' size={size} color={color} />
    case 'content':
      return <MaterialCommunityIcons name='file-document' size={size} color={color} />
    case 'contentOutline':
      return <MaterialCommunityIcons name='file-document-outline' size={size} color={color} />
    case 'clip':
      return <Ionicons name='play' size={size} color={color} />
    case 'clipOutline':
      return <Ionicons name='play-outline' size={size} color={color} />
    case 'warning':
      return <Ionicons name='warning' size={size} color={color} />
    case 'menu':
      return <Ionicons name='menu' size={size} color={color} />
    case 'payment':
      return <MaterialIcons name='payment' size={size} color={color} />
    case 'chat':
      return <Ionicons name='chatbubble-ellipses-outline' size={size} color={color} />
    case 'bell':
      return <MaterialIcons name='notifications-none' size={size} color={color} />
    case 'smile':
      return <FontAwesome6 name='smile-beam' size={size} color={color} />
    case 'arrow-up':
      return <Ionicons name='arrow-up' size={size} color={color} />
    case 'dust':
      return <MaterialCommunityIcons name='dots-circle' size={size} color={color} />
    case 'snow-rain':
      return <MaterialCommunityIcons name='weather-snowy-rainy' size={size} color={color} />
    default:
      return <Ionicons name='warning' size={size} color={color} />
  }

}
