import { sButton, sText } from "@/ui/styleSheet";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

  return (
    <View style={{ flex: 1, backgroundColor: "#F6F6FF", alignItems: "center" }}>
      <Link style={sButton.secondary} href="/(home)">
        <Text>Go to app/index</Text>
      </Link>


      <Text style={sText.code}>Tabs -index</Text> 
    </View>
  );
}
