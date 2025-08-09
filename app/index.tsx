import ButtonStyle from "@/components/Buttons";
import { View } from "react-native";
import { COLORS } from "../app/global-css";
import TextStyle from "../components/Text";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F6FF", alignItems: "center" }}>
      <ButtonStyle 
      bg={COLORS.primary} 
      px={20} 
      py={12} 
      borderWidth={1} 
      borderColor={COLORS.accent}
      radius="md"
      textColor="#FFF"
      font="bold"
      m={20}
    >
      Custom Button
    </ButtonStyle>
      <TextStyle variants="mono" font="bold" tracking="tighter" color="#aa0000" my={20}>Edit app/index.tsx</TextStyle>
    </View>
  );
}
