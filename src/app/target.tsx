import { View, Alert } from 'react-native'
import { useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router'

import { useTargetDatabase } from '@/database/useTargetDatabase'

import { PageHeader } from '@/components/PageHeader'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { CurrencyInput } from '@/components/CurrencyInput'

export default function Target() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)

  const params = useLocalSearchParams<{ id?: string }>()

  const targetDatabase = useTargetDatabase()

  function handleSave() {
    if (!name.trim() || amount <= 0) {
      return Alert.alert('Atenção', 'Preencha nome e valor precisa ser maior que zero.')
    }
    setIsProcessing(true)

    if (params.id) {
      // update
    } else {
      create()
    }
  }

  async function create() {
    try {
      await targetDatabase.create({ name, amount })
      
      Alert.alert('Nova Meta', 'Meta criada com sucesso!', [
        {
          text: 'Ok',
          onPress: () => router.back()
        }
      ])
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível criar a meta.')
      console.log(error)
      setIsProcessing(false)
    }
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title='Meta'
        subtitle='Economize para alcançar sua meta financeira'
        rightButton={{ icon: 'edit', onPress: () => { } }}
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label='Nome da meta'
          placeholder='Ex: Viagem para Europa'
          onChangeText={setName}
          value={name}
        />

        <CurrencyInput
          label='Valor alvo (R$)'
          value={amount}
          onChangeValue={setAmount}
        />

        <Button title='Salvar' onPress={handleSave} isProcessing={isProcessing} />
      </View>
    </View>
  )
}