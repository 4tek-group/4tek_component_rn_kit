import { goBack } from '../Utils/NavigationUtils'
// @ts-ignore
import React, { memo } from 'react'
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import AppText from './AppText'
interface AppBarProps {
  title: string
  showBack?: boolean
  onBackPress?: () => void
  onRightPress?: () => void
  leftComponent?: React.ReactNode
  rightComponent?: React.ReactNode
}
const AppBar = ({
  title,
  showBack = true,
  onBackPress = () => goBack(),
  leftComponent,
  onRightPress,
  rightComponent,
}: AppBarProps) => {
  return (
    <View style={styles.header}>
      {showBack && !!leftComponent ? (
        leftComponent
      ) : (
        <TouchableOpacity onPress={onBackPress} style={styles.backBtn}>
          <Image
            source={require('../Assets/arrow_right.png')}
            style={{ height: 20, width: 20 }}
          />
        </TouchableOpacity>
      )}
      <AppText fontSize={20}>{title}</AppText>
      {!!rightComponent && (
        <TouchableOpacity onPress={onRightPress} style={styles.rightComponent}>
          {rightComponent}
        </TouchableOpacity>
      )}
    </View>
  )
}

export default memo(AppBar)

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
  },
  backBtn: {
    position: 'absolute',
    height: 44,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    zIndex: 1,
    transform: [{ rotate: '180deg' }],
  },
  rightComponent: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
  },
})
