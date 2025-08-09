import { COLORS } from "@/ui/global-css";
import { Tabs } from "expo-router";
import { CircleUser, CircleUserRound, House, HousePlus } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: COLORS.primary
    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Index (tabs)",
          tabBarLabel: "Index",
          tabBarIcon: ({ color, size, focused }) => 
            focused ? <HousePlus color={color} size={size} /> : <House color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile (tabs)",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => 
            focused ? <CircleUser color={color} size={size} /> : <CircleUserRound color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}