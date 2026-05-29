import { View, Text, ScrollView } from "react-native";


export default function AboutScreen() {


  return (
    <ScrollView className="flex-1 bg-cream">
      <View className="bg-dark-green px-6 pt-16 pb-10">
        <Text className="font-outfit-bold text-3xl text-gold">About title</Text>
        <Text className="font-inter text-cream/70 mt-2">About description</Text>
      </View>

      <View className="px-6 py-8">
        <Text className="font-outfit-semibold text-xl text-dark-green mb-3">a</Text>
        <Text className="font-inter text-dark-green/70 leading-6 mb-8">z</Text>

        <Text className="font-outfit-semibold text-xl text-dark-green mb-3">e</Text>
        <Text className="font-inter text-dark-green/70 leading-6 mb-8">r</Text>

        <Text className="font-outfit-semibold text-xl text-dark-green mb-3">f</Text>
        <Text className="font-inter text-dark-green/70 leading-6">v</Text>
      </View>
    </ScrollView>
  );
}