import { useLocalObservable } from 'mobx-react-lite'
// @ts-ignore
import React, { memo, useEffect } from 'react'
import {
  ImageRequireSource,
  ImageURISource,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { Blurhash } from 'react-native-blurhash'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import { Obx } from './index'
import { XStyleSheet } from '../Theme'
interface AppImageProps {
  source: ImageURISource | ImageRequireSource
  style?: FastImageProps['style']
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center'
  blurHashEnabled?: boolean
  containerStyle?: StyleProp<ViewStyle>
  disabled?: boolean
  onPress?: () => void
}
const AppImage = ({
  source,
  blurHashEnabled = true,
  resizeMode = 'cover',
  style,
  containerStyle,
  disabled,
  onPress,
}: AppImageProps) => {
  const state = useLocalObservable(() => ({
    hash: 'L9AB*A%LPqys8_H=yDR5nMMeVXR5',
    setHash: payload => (state.hash = payload),
  }))

  useEffect(() => {
    if (typeof source === 'object' && source.uri) {
      Blurhash.encode(source.uri, 4, 3).then(hash => {
        state.setHash(hash)
      })
    }
  }, [source, state])
  return (
    <Pressable disabled={disabled} onPress={onPress} style={containerStyle}>
      {blurHashEnabled && (
        <Obx>
          {() => (
            <Blurhash
              style={styles.blurhashView}
              blurhash={state.hash}
              resizeMode="cover"
            />
          )}
        </Obx>
      )}
      <FastImage style={style} resizeMode={resizeMode} source={source as any} />
    </Pressable>
  )
}

export default memo(AppImage)

const styles = XStyleSheet.create({
  blurhashView: {
    ...XStyleSheet.absoluteFillObject,
    zIndex: 10,
  },
})
