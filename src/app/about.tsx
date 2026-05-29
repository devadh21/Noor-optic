import { useNavigation } from 'expo-router'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

const StyledPressable = Pressable

export default function AboutScreen() {

  const navigation = useNavigation<any>()

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="pt-24 pb-20 px-6">
        {/* Hero Section */}
        <View className="max-w-4xl mx-auto items-center mb-20">
          <Text className="text-gold font-bold uppercase tracking-[6px] text-xs mb-6 italic">
            NOTRE HÉRITAGE
          </Text>

          <Text className="text-5xl md:text-7xl font-bold text-primary mb-10 text-center lowercase leading-tight">
            définir <Text className="text-gold">la vision </Text>
            depuis 1982.
          </Text>

          <Text className="text-lg text-primary/60 leading-8 italic border-l-4 border-r-4 border-peach/30 px-6 text-center">
            Noor Optic a commencé comme un petit atelier artisanal au cœur de Paris. Aujourd'hui, nous sommes un collectif mondial dédié au mariage de l'artisanat traditionnel et du design avant-gardiste.          </Text>
        </View>

        {/* Quality Section */}
        <View className="gap-14 mb-28">
          {/* Image Card */}
          <View className="relative aspect-[4/5] bg-card rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              source={require('@/assets/images/hero-cat.png')}
              resizeMode="cover"
              className="w-full h-full opacity-50"
            />

            {/* Overlay */}
            <View className="absolute inset-0 bg-black/40" />

            {/* Text Overlay */}
            <View className="absolute bottom-10 left-10">
              <Text className="text-3xl text-gold lowercase">
                qualité
                sans compromis.
              </Text>
            </View>
          </View>

          {/* Content */}
          <View className="space-y-8">
            <Text className="text-4xl font-bold lowercase leading-tight text-primary">
              le standard noor.
            </Text>

            <View className="gap-6">
              <Text className="text-primary/60 italic leading-7 text-base">
                Chaque paire de montures Noor passe par 128 processus individuels. De l'esquisse initiale à la main au nettoyage ultrasonique final, notre engagement envers le détail est obsessif.

              </Text>

              <Text className="text-primary/60 italic leading-7 text-base">
                Nous approvisionnons notre acétate dans les montagnes du Japon et nos verres dans les meilleurs laboratoires optiques du monde pour garantir que lorsque vous portez Noor, vous voyez le monde dans sa forme la plus pure.               </Text>
            </View>

            {/* Stats */}
            <View className="flex-row justify-around pt-8">
              <View>
                <Text className="text-3xl font-bold text-primary">
                  100%
                </Text>
                <Text className="text-xs uppercase tracking-[3px] text-primary/30 font-bold mt-2">
                  FAIT MAIN
                </Text>
              </View>

              <View>
                <Text className="text-3xl font-bold text-primary">
                  40%
                </Text>
                <Text className="text-xs uppercase tracking-[3px] text-primary/30 font-bold mt-2">
                  BOUTIQUES
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* CTA Section */}
        <View className="bg-dark-green rounded-[40px] px-8 py-16 items-center overflow-hidden relative">
          {/* Blur Circle */}
          <View className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-24 -translate-y-24" />

          <View className="max-w-2xl items-center z-10">
            <Text className="text-4xl text-gold text-center mb-8 lowercase">
              rejoignez la vision.
            </Text>

            <Text className="text-white/60 text-center italic mb-10 leading-7">
              Intéressé à rejoindre notre équipe ou à devenir un revendeur agréé ?
            </Text>

            <StyledPressable className="bg-gold px-8 py-4 rounded-full active:opacity-80" onPress={() => {
              // Handle contact action, e.g., navigate to contact form or open email client
              navigation.navigate('index') // Assuming you have a Contact screen set up
            }}>
              <Text className="text-dark font-semibold text-base">
                Contactez nous
              </Text>
            </StyledPressable>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}