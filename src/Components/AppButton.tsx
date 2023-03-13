import { XStyleSheet } from '../Theme'
// @ts-ignore
import React, { memo } from 'react'
import {
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppText, { AppTextProps } from './AppText'
import { Colors } from './Colors'

export interface AppButtonProps {
  text?: string
  icon?: ImageSourcePropType
  svgIcon?: React.ReactNode
  onPress?: () => void
  disabled?: boolean
  isGradient?: boolean
  start?: { x: number; y: number }
  end?: { x: number; y: number }
  textStyle?: StyleProp<TextStyle>
  opacity?: number
  iconDirection?: 'left' | 'right'
  textProps?: Omit<AppTextProps, 'children'>
  radius?: number
  spaceBetween?: number
  height?: number
  width?: number
  shadowColor?: string
  shadowOpacity?: number
  shadowSize?: number
  center?: boolean
  bgTransparent?: boolean
}

const AppButton = ({
  radius = 8,
  disabled,
  isGradient,
  onPress,
  opacity = 0.8,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  text,
  height = 44,
  textStyle,
  iconDirection = 'right',
  center = true,
  bgTransparent = false,
  textProps: { style: extraTextStyle, ...restTextProps } = {},
  ...restProps
}: AppButtonProps) => {
  const styles = XStyleSheet.create({
    baseBtn: {
      flexDirection: iconDirection === 'right' ? 'row' : 'row-reverse',
      alignItems: 'center',
      justifyContent: center ? 'center' : 'flex-start',
      paddingHorizontal: 16,
      height: height,
      borderRadius: radius,
      backgroundColor: disabled
        ? Colors.black_17
        : bgTransparent
        ? Colors.transparent
        : Colors.primary,
      borderWidth: 1,
      borderColor: Colors.primary,
      overflow: 'hidden',
    },
    baseTxt: {
      color: disabled
        ? Colors.black_10
        : bgTransparent
        ? Colors.primary
        : Colors.black,
    },
    btnBg: {
      ...StyleSheet.absoluteFillObject,
      zIndex: -1,
    },
    baseIc: {
      height: 24,
      width: 24,
    },
  })
  return (
    <TouchableOpacity
      {...restProps}
      disabled={disabled}
      style={[styles.baseBtn]}
      activeOpacity={opacity}
      onPress={onPress}
    >
      {isGradient && (
        <LinearGradient
          style={styles.btnBg}
          colors={
            disabled
              ? [Colors.gray, Colors.gray]
              : [Colors.primaryLight, Colors.primary]
          }
          start={start}
          end={end}
        />
      )}
      <AppText
        fontSize={16}
        {...restTextProps}
        style={[styles.baseTxt, textStyle, extraTextStyle]}
      >
        {text}
      </AppText>
    </TouchableOpacity>
  )
}

export default memo(AppButton)
