import { goBack } from '../Utils/NavigationUtils'
// @ts-ignore
import React, { memo } from 'react'
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import AppText from './AppText'
import { Colors } from './Colors'
interface AppBarProps {
  title: string
  showBack?: boolean
  onBackPress?: () => void
  onRightPress?: () => void
  rightComponent?: React.ReactNode
}
const AppBar = ({
  title,
  showBack = true,
  onBackPress = () => goBack(),
  onRightPress,
  rightComponent,
}: AppBarProps) => {
  return (
    <View style={styles.header}>
      {showBack && (
        <TouchableOpacity onPress={onBackPress} style={styles.backBtn}>
          <Image
            source={require('../Assets/left-arrow-white.png')}
            style={{ height: 15, width: 15 }}
          />
        </TouchableOpacity>
      )}
      <AppText fontSize={20} color={Colors.white}>
        {title}
      </AppText>
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
    backgroundColor: Colors.blue_01,
  },
  backBtn: {
    position: 'absolute',
    height: 44,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    zIndex: 1,
  },
  rightComponent: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
  },
})
