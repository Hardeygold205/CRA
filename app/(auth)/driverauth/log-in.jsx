import { StyleSheet, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Driver Login Screen</Text>
      <Button
        title="Go to Signup"
        onPress={() => router.push("/driverauth/sign-up")}
      />
      <Button
        title="Go Home"
        onPress={() => router.push("/driver/(tabs)/home")}
      />
    </SafeAreaView>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})