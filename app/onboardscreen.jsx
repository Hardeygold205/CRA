import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RFValue } from "react-native-responsive-fontsize";
import OnBoard from "../assets/icons/Anywhere you are3.png";
import OnBoard3 from "../assets/icons/At anytime2.png";
import OnBoard2 from "../assets/icons/bookyoucar.png";
import OnBoard1 from "../assets/icons/Welcome Screen (1).png";

const OnBoardScreen = () => {
  const router = useRouter();
  const swiperRef = useRef(null);
  const { width } = Dimensions.get("window");

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(-1);
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      showsPagination={true}
      paginationStyle={styles.container}
      dotColor="#E5E5E5"
      activeDotColor="#228d5d"
      backgroundColor="#fff">
      <>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => router.replace("driver-rider-choice")}>
            <Text style={styles.skipText}>Skip</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#228d5d"
            />
          </TouchableOpacity>
          <Image source={OnBoard} style={styles.image} />
          <View style={styles.info}>
            <Text numberOfLines={2} style={styles.title}>
              Anywhere you are.
            </Text>
            <Text style={styles.description}>
              Your trusted ride companion within campus. Whether you're a rider
              or a driver, we make getting around campus easier and faster.
            </Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.nextButton} onPress={goNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>

      <>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => router.replace("driver-rider-choice")}>
            <Text style={styles.skipText}>Skip</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#228d5d"
            />
          </TouchableOpacity>
          <Image source={OnBoard2} style={styles.image} />
          <View style={styles.info}>
            <Text numberOfLines={2} style={styles.title}>
              Flexible Rides for Everyone.
            </Text>
            <Text style={styles.description}>
              Need a ride or offering one?{" "}
              <Text style={styles.span}>CampusRide</Text> connects drivers and
              riders in real-time, helping you save time and money.
            </Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.nextButton} onPress={goNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>

      <>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => router.replace("driver-rider-choice")}>
            <Text style={styles.skipText}>Skip</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#228d5d"
            />
          </TouchableOpacity>
          <Image source={OnBoard3} style={styles.image} />
          <View style={styles.info}>
            <Text numberOfLines={2} style={styles.title}>
              Safe & reliable.
            </Text>
            <Text style={styles.description}>
              Safety is our priority. With verified drivers and riders, you can
              trust every ride to be safe and secure.
            </Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.nextButton} onPress={goNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>

      <>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Image source={OnBoard1} style={styles.image} />
          <View style={styles.info}>
            <Text numberOfLines={2} style={styles.title}>
              Get Started Today!
            </Text>
            <Text style={styles.description}>
              Join our campus community of drivers and riders. Start your
              journey with <Text style={styles.span}>CampusRide</Text> now!
            </Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={() => router.replace("driver-rider-choice")}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    </Swiper>
  );
};

export default OnBoardScreen;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    right: "80%",
    bottom: "91.5%",
  },
  skipButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 60 : 50,
    left: "80%",
    bottom: "91.5%",
    flexDirection: "row",
    alignItems: "center",
  },
  skipText: {
    fontSize: 18,
    color: "#228d5d",
    fontWeight: "bold",
  },
  info: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 200 : 180,
  },
  span: {
    color: "#228d5d",
    fontSize: RFValue(18),
    fontFamily: "Poppins-Bold"
  },
  title: {
    fontSize: RFValue(32),
    fontFamily: "Poppins-SemiBold",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginHorizontal: 20,
    marginVertical: 20,
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
  footer: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 60 : 50,
    width: "90%",
    alignItems: "center",
  },
  nextButton: {
    padding: 10,
    borderRadius: 25,
    borderColor: "#fff",
    width: "100%",
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#228d5d",
  },
  getStartedButton: {
    padding: 10,
    borderRadius: 25,
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
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    position: "absolute",
    top: "20%",
  },
});
