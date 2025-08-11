import { Link } from "expo-router";
import { Text, View } from "react-native";
import { sButton } from "../../ui/styleSheet";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F6FF", alignItems: "center" }}>
      <Link style={sButton.primary} href="../home">Go to Home</Link>
      <Link style={sButton.secondary} href="../home">Go to Home</Link>
      <Link style={sButton.outline} href="../home">Go to Home</Link>
      <Link style={sButton.link} href="../home">Go to Home</Link>
      <Link style={sButton.destructive} href="../home">Go to Home</Link>
      <Link style={sButton.disabled} href="../home">Go to Home</Link>

      <Text className="text-red-400">Hello World</Text>
    </View>
  );
}
