import { Button } from "@/components/ui/button";
import { Text } from '@/components/ui/text';
import { sText } from "@/ui/styleSheet";
import { View } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F6FF", alignItems: "center" }}>
      <Text style={sText.title}>Tabs - Profile</Text>
      <Text style={sText.body}>Tabs - Profile</Text>
      <Text style={sText.muted}>Tabs - Profile</Text>
      <Text style={sText.link}>Tabs - Profile</Text>
      <Text className="text-primary font-bold font-mono tracking-widest">Custom</Text>

       <Button variant="outline">
        <Text>Default</Text>
      </Button>
    </View>
  );
}
