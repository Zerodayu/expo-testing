import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerLeft: () => <></>
        }}
      />
      <Stack.Screen
        name="home"
        options={{
          headerShown: true
        }}
      />
    </Stack>
  );
}