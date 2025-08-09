import { sButton, sText } from "@/ui/styleSheet";
import { Link } from "expo-router";
import { Plus } from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: "#F6F6FF", alignItems: "center" }}>
      <Link style={sButton.secondary} href="/(home)">
        <Text>Go to app/index</Text>
      </Link>

      <Pressable style={sButton.primary} onPress={() => setCount(count+1)}>
        <Text style={sText.title}><Plus size={24} />{count}</Text>
      </Pressable>

      <Text style={sText.code}>Tabs -index</Text>
    </View>
  );
}
