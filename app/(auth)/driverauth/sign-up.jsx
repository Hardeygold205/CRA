import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Signup = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Driver Signup Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => router.push("/driverauth/log-in")}
      />
      <Button
        title="Go Home"
        onPress={() => router.push("/driver/(tabs)/home")}
      />
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
