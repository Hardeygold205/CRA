import { Stack } from "expo-router";

export default function RiderAuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="log-in" options={{ title: "Rider Login", headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ title: "Rider Signup", headerShown: false }} />
    </Stack>
  );
}
