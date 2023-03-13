import React, { memo } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors, ResponsiveHeight, XStyleSheet } from '../Theme'
import AppText from './AppText'
import { ArrowLeftSvg } from '../Assets/Svg'
// import { goBack } from '@/Navigators'

interface AppBarProps {
  title: string
  showBack?: boolean
  onBackPress?: () => void
  onRightPress?: () => void
  leftComponent?: React.ReactNode
  rightButtons?: {
    icon: React.ReactNode
    onPress: () => void
    disabled?: boolean
  }[]
  topSpacing?: boolean
  hasLine?: boolean
  hasBackgroundColor?: boolean
  containerHeight?: number
}
const AppBar = ({
  title,
  showBack = true,
  onBackPress = () => { },
  leftComponent,
  rightButtons = [],
  hasLine = true,
  hasBackgroundColor = true,
  containerHeight = 44,
  topSpacing = false,
}: AppBarProps) => {
  const { top } = useSafeAreaInsets()
  return (
    <View style={hasBackgroundColor && { backgroundColor: Colors.black500 }}>
      <View
        style={[
          styles.header,
          hasLine && styles.headerLine,
          {
            height: ResponsiveHeight(containerHeight),
          },
          topSpacing && { marginTop: top }
        ]}
      >
        <View style={styles.leftComponent}>
          {leftComponent != null ? (
            leftComponent
          ) : showBack ? (
            <TouchableOpacity
              onPress={() =>
                requestAnimationFrame(onBackPress ? onBackPress : null)
              }
              style={styles.btnBack}
            >
              <ArrowLeftSvg />
            </TouchableOpacity>
          ) : null}
        </View>
        <AppText align="center" fontWeight={700} fontSize={16} lineHeight={24}>
          {title}
        </AppText>
        <View style={styles.rightComponent}>
          {rightButtons.length > 0 &&
            rightButtons.map((btn, index) => (
              <TouchableOpacity
                disabled={btn.disabled}
                onPress={() => requestAnimationFrame(() => btn?.onPress?.())}
                style={styles.rightBtn}
                key={index}
              >
                {btn.icon}
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </View>
  )
}

export default memo(AppBar)

const styles = XStyleSheet.create({
  headerLine: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.k353638,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBack: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  leftComponent: {
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 16,
  },
  rightComponent: {
    position: 'absolute',
    right: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 16,
  },
  backIc: {
    width: 24,
    height: 24,
  },
  rightBtn: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
