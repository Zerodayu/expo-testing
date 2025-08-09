import { sButton, sText } from "@/ui/styleSheet";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F6FF", alignItems: "center" }}>
      <Link style={sButton.secondary} href="/(tabs)" asChild>
        <Text>Go to Tabs</Text>
      </Link>
      <Text style={sText.code}>Hello World</Text>
    </View>
  );
}
