// @ts-ignore
import React, { memo, useEffect, useRef } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { AppTextProps } from './AppText'
import { Colors } from './Colors'
import { AppFonts, FontSizes } from '../Theme'
import { formatCurrency, isAndroid } from '../Utils'
interface AnimatedNumberProps extends AppTextProps {
  startValue?: number
  value: number
  duration?: number
  formatter?: (value: number) => string
}
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)
const AnimatedNumber = ({
  startValue = 0,
  value = 0,
  duration = 1000,
  formatter = formatCurrency,
  fontWeight = 400,
  fontSize = 'normal',
  color = Colors.black,
  lineHeightRatio,
  lineHeight,
  align = 'left',
  useDefaultFont = true, // update this to false if you want to use custom font
  style,
  ...restProps
}: AnimatedNumberProps) => {
  const numberAnim = useSharedValue(startValue)
  const inputRef = useRef<TextInput>()
  const size = typeof fontSize === 'string' ? FontSizes[fontSize] : fontSize
  const textStyles = {
    fontFamily: useDefaultFont
      ? undefined
      : typeof fontWeight === 'string'
      ? fontWeight
      : AppFonts[fontWeight],
    color,
    fontSize: size,
    ...(lineHeightRatio && {
      lineHeight: size * lineHeightRatio,
    }),
    ...(lineHeight && { lineHeight: lineHeight }),
    textAlign: align,
  }

  useEffect(() => {
    numberAnim.value = withTiming(value, { duration })
  }, [duration, numberAnim, value])

  const textinputProps = useAnimatedProps(() => {
    return {
      text: `${formatter(Math.round(numberAnim.value))}`,
    }
  })

  return (
    <AnimatedTextInput
      {...restProps}
      style={[styles.baseInput, textStyles, style]}
      editable={false}
      scrollEnabled={false}
      ref={inputRef}
      animatedProps={textinputProps as any}
    />
  )
}

export default memo(AnimatedNumber)
const styles = StyleSheet.create({
  baseInput: {
    color: Colors.black,
    ...(isAndroid && {
      marginVertical: -15.5,
    }),
  },
})
