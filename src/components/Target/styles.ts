import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    gap: 12
  },
  content: {
    flex: 1,
    gap: 7
  },
  name: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fontFamily.medium
  },
  status: {
    fontSize: 10,
    fontFamily: fontFamily.regular,
    color: colors.gray[500]
  }
})