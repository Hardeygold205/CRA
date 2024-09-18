import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Animated, { FadeInUp } from "react-native-reanimated";
import light from "../assets/images/light.png";
import background from "../assets/images/background2.png";
import { RFValue } from "react-native-responsive-fontsize";

export default function DriverRiderChoice() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ImageBackground style={styles.backgroundImage} source={background} />
      {loaded && (
        <>
          <Animated.View
            entering={FadeInUp.delay(100)
              .damping(3)
              .springify(1)
              .duration(3000)}
            style={styles.animatedContainer}>
            <ImageBackground style={styles.lightImage1} source={light} />
            <ImageBackground style={styles.lightImage2} source={light} />
          </Animated.View>
        </>
      )}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* <View style={styles.title}>
          <Text style={styles.titleText}>
            Welcome to {"\n"} Anywhere {"\n"} You Are!
          </Text>
        </View> */}
        <View style={styles.footer}>
          <Text style={styles.description}>
            Choose between being a rider or a driver.
          </Text>
          <TouchableOpacity
            style={styles.riderButton}
            onPress={() => router.push("/(auth)/riderauth/log-in")}>
            <Text style={styles.riderText}>Ride</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.driverButton}
            onPress={() => router.push("/(auth)/driverauth/log-in")}>
            <Text style={styles.buttonText}>Become a Driver</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  animatedContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
  },
  lightImage1: {
    height: 225,
    width: 90,
  },
  lightImage2: {
    height: 160,
    width: 65,
  },
  title: {
    position: "absolute",
    top: "45%",
    right: "3%",
    fontWeight: "bold",
    color: "#228d5d",
  },
  titleText: {
    fontSize: RFValue(50),
    fontFamily: "Poppins-Bold",
    color: "#228d5d",
  },
  footer: {
    position: "absolute",
    bottom: "2%",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  riderButton: {
    padding: 10,
    borderRadius: 20,
    borderColor: "#fff",
    width: "100%",
    borderWidth: 1,
    borderColor: "#228d5d",
    borderWidth: 1,
  },
  driverButton: {
    padding: 10,
    borderRadius: 20,
    borderColor: "#fff",
    width: "100%",
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#228d5d",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    padding: 7,
    fontWeight: "bold",
  },
  riderText: {
    color: "#228d5d",
    textAlign: "center",
    padding: 7,
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    color: "#000",
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 30,
    marginHorizontal: 20,
    fontSize: RFValue(16),
  },
  scrollView: {
    flexGrow: 1,
    position: "relative",
  },
});
