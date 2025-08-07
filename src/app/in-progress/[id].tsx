import { View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import { PageHeader } from '@/components/PageHeader'
import { Progress } from '@/components/Progress'

const details = {
  current: 'R$ 1.000,00',
  target: 'R$ 2.000,00',
  percentage: 50
}

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title='Monitor LG'
        rightButton={{
          icon: 'edit',
          onPress: () => { },
        }}
      />

      <Progress data={details} />
    </View>
  )
}