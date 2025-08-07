import { View } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router'

import { PageHeader } from '@/components/PageHeader'
import { Progress } from '@/components/Progress'
import { List } from '@/components/List'
import { Button } from '@/components/Button'
import { Transaction, TransactionProps } from '@/components/Transaction'

import { TransactionTypes } from '@/utils/TransactionTypes'

const details = {
  current: 'R$ 1.000,00',
  target: 'R$ 2.000,00',
  percentage: 50
}

const transactions: TransactionProps[] = [
  {
    id: '1',
    value: 'R$ 2.000,00',
    date: '06/08/2025',
    description: 'CDB de 110% do banco XPTO',
    type: TransactionTypes.Input
  },
  {
    id: '2',
    value: 'R$ 1.000,00',
    date: '07/08/2025',
    type: TransactionTypes.Output
  }
]

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

      <List
        title='Transações'
        data={transactions}
        renderItem={({ item }) => <Transaction data={item} onRemove={() => { }} />}
        emptyMessage='Nenhuma transação. Toque em uma nova transação guardar seu dinheiro.'
      />

      <Button
        title='Nova transação'
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  )
}