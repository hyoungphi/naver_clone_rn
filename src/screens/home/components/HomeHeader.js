import { Button, View, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import IconButton from "src/components/IconButton";
import Icon from "src/assets/icons/Icon";

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <LeftComponent />
      <RightComponent />
    </View>
  );
}

function LeftComponent() {
  return (
    <View style={styles.left}>
      <IconButton icon={<Icon name="menu" />} onPress={() => { }} />
      <IconButton icon={<Icon name='payment' />} onPress={() => { }} />
    </View>
  );
}

function RightComponent() {
  return (
    <View style={styles.right}>
      <IconButton icon={<Icon name='chat' />} onPress={() => { }} />
      <IconButton icon={<Icon name='bell' />} onPress={() => { }} />
      <IconButton icon={<Icon name='smile' />} onPress={() => { }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
