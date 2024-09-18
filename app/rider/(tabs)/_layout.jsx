import { Tabs } from "expo-router";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RiderTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#228d5d",
        tabBarInactiveTintColor: "#333333", 
        tabBarStyle: {
          backgroundColor: "#fff1", 
          height: 80, 
          borderRadius: 25, 
          marginBottom: 15,
          paddingTop: 10,
          position: "absolute",
          left: 10,
          right: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          paddingTop: 5,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="trip"
        options={{
          headerShown: false,
          tabBarLabel: "Trips",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="store" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: "Account",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tabs>
  );
}
