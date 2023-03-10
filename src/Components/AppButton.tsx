import { ResponsiveWidth, XStyleSheet } from '../Theme'
// @ts-ignore
import React, { memo } from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppText, { AppTextProps } from './AppText'
import Padding from './Padding'
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
  // disabledBackgroundColor?: string
  // disabledTextColor?: string
  // textColor?: string
  textStyle?: StyleProp<TextStyle>
  iconStyle?: StyleProp<ImageStyle>
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
}

const AppButton = ({
  radius = 8,
  // colors,
  disabled,
  // disabledBackgroundColor = Colors.gray,
  // disabledTextColor = Colors.white,
  isGradient,
  // icon,
  // svgIcon,
  // iconStyle,
  onPress,
  opacity = 0.8,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  text,
  height = 44,
  textStyle,
  iconDirection = 'right',
  // textColor = Colors.white,
  // spaceBetween = 10,
  center = true,
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
      backgroundColor: disabled ? Colors.gray : Colors.primary,
      overflow: 'hidden',
    },
    baseTxt: {
      color: Colors.white,
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
              : [Colors.blue_05, Colors.blue_03, Colors.blue_01]
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
      {/*{(!!icon || !!svgIcon) && (*/}
      {/*  <>*/}
      {/*    <Padding left={ResponsiveWidth(spaceBetween)} />*/}
      {/*    {svgIcon ? (*/}
      {/*      svgIcon*/}
      {/*    ) : (*/}
      {/*      <Image source={icon} style={[styles.baseIc, iconStyle]} />*/}
      {/*    )}*/}
      {/*  </>*/}
      {/*)}*/}
    </TouchableOpacity>
  )
}

export default memo(AppButton)
