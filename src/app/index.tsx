import { View, StatusBar } from 'react-native'
import { router } from 'expo-router'

import { HomeHeader } from '@/components/HomeHeader'
import { Target } from '@/components/Target'
import { List } from '@/components/List'
import { Button } from '@/components/Button'

const summary = {
  total: 'R$ 2.6880,00',
  input: { label: 'Entradas', value: 'R$ 6.184,00' },
  output: { label: 'Saídas', value: '-R$ 883,65' }
}

const targets = [
  {
    id: '1',
    name: 'Monitor LG',
    percentage: '50%',
    current: 'R$ 1.000,00',
    target: 'R$ 2.000,00'
  },
  {
    id: '2',
    name: 'Teclado Redragon',
    percentage: '50%',
    current: 'R$ 100,00',
    target: 'R$ 345,00'
  },
  {
    id: '3',
    name: 'Headset JBL',
    percentage: '50%',
    current: 'R$ 250,00',
    target: 'R$ 500,00'
  },
]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <HomeHeader data={summary} />

      <List
        title='Metas'
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Target data={item} onPress={() => router.navigate(`/in-progress/${item.id}`)} />}
        emptyMessage='Nenhuma meta. Toque em uma nova meta para criar.'
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title='Nova meta' onPress={() => router.navigate('/target')} />
      </View>
    </View>
  )
}