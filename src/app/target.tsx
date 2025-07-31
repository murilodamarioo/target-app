import { Text, View, Button } from 'react-native'
import { router } from 'expo-router'

export default function Target() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Target</Text>

      <Button
        title='Back'
        onPress={() => router.back()}
      />
    </View>
  )
}