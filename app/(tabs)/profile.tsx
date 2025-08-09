import { sText } from "@/ui/styleSheet";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F6FF", alignItems: "center" }}>
      <Text style={sText.code}>Tabs - Profile</Text>
    </View>
  );
}
