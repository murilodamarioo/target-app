import { Text, View, Button } from 'react-native'
import { router } from 'expo-router'
import { fontFamily } from '@/theme/fontFamily'

export default function Index() {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: fontFamily.bold, fontSize: 34 }}>Expo Router</Text>

      <Button
        title='Nova Meta'
        onPress={() => router.navigate("/target")}
      />
      <Button
        title='Transação'
        onPress={() => router.navigate("/transaction/123")}
      />
      <Button
        title='Progresso'
        onPress={() => router.navigate("/in-progress/123")}
      />
    </View>
  )
}