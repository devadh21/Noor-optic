import { NativeTabs } from 'expo-router/unstable-native-tabs';
import "./global.css"


export default function RootLayout() {
  return (
    <NativeTabs >
      <NativeTabs.Trigger name="index" >
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
            <NativeTabs.Trigger name="about" >
        <NativeTabs.Trigger.Label>About</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
