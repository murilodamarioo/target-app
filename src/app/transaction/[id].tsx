import { View, Text, Button } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router'

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ID: {params.id}</Text>

      <Button
        title='Voltar'
        onPress={() => router.back()}
      />
    </View>
  )
}