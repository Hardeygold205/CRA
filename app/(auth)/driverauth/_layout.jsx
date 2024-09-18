import { Stack } from "expo-router";

export default function DriverAuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="log-in" options={{ title: "Driver Login", headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ title: "Driver Signup", headerShown: false }} />
    </Stack>
  );
}
