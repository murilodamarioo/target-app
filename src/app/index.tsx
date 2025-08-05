import { View } from 'react-native'

import { HomeHeader } from '@/components/HomeHeader'
import { Target } from '@/components/Target'

const summary = {
  total: 'R$ 2.6880,00',
  input: { label: 'Entradas', value: 'R$ 6.184,00' },
  output: { label: 'Saídas', value: '-R$ 883,65' }
}

const targets = [
  {
    name: 'Monitor LG',
    percentage: '50%',
    current: 'R$ 1.000,00',
    target: 'R$ 2.000,00'
  }
]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <Target data={targets[0]} />
    </View>
  )
}