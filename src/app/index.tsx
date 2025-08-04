import { HomeHeader } from '@/components/HomeHeader'
import { View } from 'react-native'

export default function Index() {


  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={{ total: 'R$ 2.6880,00' }} />
    </View>
  )
}