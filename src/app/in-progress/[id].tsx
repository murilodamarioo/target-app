import { useCallback, useState } from 'react'
import { Alert, View } from 'react-native'
import { useLocalSearchParams, router, useFocusEffect } from 'expo-router'

import { PageHeader } from '@/components/PageHeader'
import { Progress } from '@/components/Progress'
import { List } from '@/components/List'
import { Button } from '@/components/Button'
import { Transaction, TransactionProps } from '@/components/Transaction'
import { Loading } from '@/components/Loading'

import { TransactionTypes } from '@/utils/TransactionTypes'

import { useTargetDatabase } from '@/database/useTargetDatabase'
import { numberToCurrency } from '@/utils/number-to-currency'

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
  const [isFetching, setIsFetching] = useState(true)
  const [details, setDetails] = useState({
    name: '',
    current: 'R$ 0,00',
    target: 'R$ 0,00',
    percentage: 0
  })

  const params = useLocalSearchParams<{ id: string }>()

  const targetDatabase = useTargetDatabase()

  async function fetchDetails() {
    try {
      const response = await targetDatabase.show(Number(params.id))

      setDetails({
        name: response.name,
        current: numberToCurrency(response.current),
        target: numberToCurrency(response.amount),
        percentage: response.percentage
      })
    } catch (error) {
      Alert.alert('Erro', 'Nao foi possivel carregar os detalhes da meta.')
      console.log(error)
    }
  }

  async function fetchData() {
    const fetchDetailsPromise = fetchDetails()

    await Promise.all([fetchDetailsPromise])
    setIsFetching(false)
  }

  useFocusEffect(
    useCallback(() => {
      fetchData()
    }, []),
  )

  if (isFetching)
    return <Loading />

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title={details.name}
        rightButton={{
          icon: 'edit',
          onPress: () => router.navigate(`/target?id=${params.id}`),
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