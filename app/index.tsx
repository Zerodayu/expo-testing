import ButtonStyle from "@/components/Buttons";
import { View } from "react-native";
import TextStyle from "../components/Text";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F6FF", alignItems: "center" }}>
      <ButtonStyle variant="default">Default Button</ButtonStyle>
      <ButtonStyle variant="secondary">Secondary Button</ButtonStyle>
      <ButtonStyle variant="outline">Outline Button</ButtonStyle>
      <ButtonStyle variant="ghost">Ghost Button</ButtonStyle>
      <ButtonStyle variant="destructive">Destructive Button</ButtonStyle>
      <ButtonStyle variant="link">Link Button</ButtonStyle>
      <TextStyle variants="mono highlight link" font="bold" size="14" tracking="tighter" color="#aa0000" p={10} my={20}>Edit app/index.tsx</TextStyle>
    </View>
  );
}
