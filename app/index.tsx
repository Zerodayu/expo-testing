import { Text, View } from "react-native";
import { style } from "./global-css";



export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={style.primaryText}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
