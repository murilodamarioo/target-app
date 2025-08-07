import { View, TextInput, TextInputProps, Text } from 'react-native'

import { styles } from './style'
import { colors } from '@/theme'

type Props = TextInputProps & {
  label: string
}

export function Input({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />
    </View>
  )
}
