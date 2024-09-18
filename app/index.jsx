import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import SplashScreenUi from "./splashscreen"

SplashScreen.preventAutoHideAsync();

const Index = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const router = useRouter(); 

  useEffect(() => {
    const hideSplashScreen = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await SplashScreen.hideAsync();
      setIsSplashVisible(false);
      router.replace("/onboardscreen");
    };

    hideSplashScreen();
  }, [router]);

  if (isSplashVisible) {
    return <SplashScreenUi />;
  }

  return null;
};

export default Index;
