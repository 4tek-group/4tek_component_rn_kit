import { StyleProp, View, ViewProps } from 'react-native'
// @ts-ignore
import React, { memo } from 'react'
interface PaddingProps {
  bottom?: number
  left?: number
  right?: number
  top?: number
  padding?: number
  horizontal?: number
  vertical?: number
  style?: StyleProp<ViewProps>
  children?: React.ReactNode
}
const Padding = ({
  bottom = 0,
  left = 0,
  right = 0,
  top = 0,
  padding = 0,
  horizontal = 0,
  vertical = 0,
  children,
  style,
  ...restProps
}: PaddingProps) => {
  return (
    <View
      {...restProps}
      style={[
        style,
        {
          ...(bottom && {
            paddingBottom: bottom,
          }),
          ...(left && { paddingLeft: left }),
          ...(right && { paddingRight: right }),
          ...(top && { paddingTop: top }),
          ...(padding && { padding: padding }),
          ...(horizontal && {
            paddingHorizontal: horizontal,
          }),
          ...(vertical && {
            paddingVertical: vertical,
          }),
        },
      ]}
    >
      {children}
    </View>
  )
}

export default memo(Padding)
