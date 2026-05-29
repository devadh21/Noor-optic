import { Tabs } from "expo-router";
import { View, Text } from "react-native";




export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#E9C46A",
        tabBarInactiveTintColor: "#F8F9FA60",
        tabBarStyle: {
          backgroundColor: "#1B4332",
          borderTopColor: "#F8F9FA20",
          borderTopWidth: 1,
          paddingTop: 4,
          height: 60,
        },
        tabBarLabelStyle: {
          fontFamily: "Inter_500Medium",
          fontSize: 11,
          marginBottom: 4,
        },
      }}
    >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Home",          
        }}
      /> */}
       <Tabs.Screen
        name="about"
        options={{
          title: "About",          
        }}
      />
    </Tabs>
  );
}
