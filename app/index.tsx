import ButtonStyle from "@/components/Buttons";
import { View } from "react-native";
import TextStyle from "../components/Text";
import { style } from "./global-css";

export default function Index() {
  return (
    <View style={style.view}>
      <ButtonStyle variant="default">Default Button</ButtonStyle>
      <ButtonStyle variant="secondary">Secondary Button</ButtonStyle>
      <ButtonStyle variant="outline">Outline Button</ButtonStyle>
      <ButtonStyle variant="ghost">Ghost Button</ButtonStyle>
      <ButtonStyle variant="destructive">Destructive Button</ButtonStyle>
      <ButtonStyle variant="link">Link Button</ButtonStyle>
      <TextStyle variants="mono highlight link" font="bold" size="16" tracking="tighter">Edit app/index.tsx to edit this screen.</TextStyle>
    </View>
  );
}
