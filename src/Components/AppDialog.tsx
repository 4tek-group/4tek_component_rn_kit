import { Layout, ResponsiveHeight, screenWidth, XStyleSheet } from '../Theme'
import { isAndroid } from '../Utils'
import { BlurView } from '@react-native-community/blur'
// @ts-ignore
import React, { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native'
import { AppButtonProps } from './AppButton'
import AppText from './AppText'
import Padding from './Padding'
import { Colors } from './Colors'
import { AppButton } from './index'

interface AppDiaLogProps {
  title?: string
  message?: string
  dialogIcon?: ImageSourcePropType
  // titleColor?: string
  // messageColor?: string
  messageStyle?: TextStyle
  customMessage?: React.ReactNode
  buttonText?: string
  buttonProps?: AppButtonProps
  buttonCustom?: React.ReactNode
  showTime?: number
  footer?: React.ReactNode
  hideCloseButton?: boolean
  backdropForClosing?: boolean
  onClose: () => void
  onPress: () => void
}
const AppDiaLog = ({
  onClose,
  onPress,
  title,
  message,
  messageStyle,
  customMessage,
  dialogIcon,
  // titleColor,
  buttonText,
  buttonProps,
  buttonCustom,
  showTime,
  footer,
  hideCloseButton = false,
  // messageColor,
  backdropForClosing,
}: AppDiaLogProps) => {
  const { t } = useTranslation()

  useEffect(() => {
    if (showTime) {
      const action = setTimeout(() => {
        onClose()
      }, showTime)
      return () => clearTimeout(action)
    }
  }, [onClose, showTime])
  return (
    <Modal
      statusBarTranslucent={isAndroid}
      animationType="fade"
      transparent
      visible
    >
      <View style={styles.rootContainer}>
        <Pressable
          disabled={!backdropForClosing}
          onPress={onClose}
          style={styles.blurView}
        >
          <BlurView blurType="dark" style={Layout.fill} />
        </Pressable>
        <View style={styles.container}>
          {!hideCloseButton && (
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Image
                source={require('../Assets/close.png')}
                style={{ height: 20, width: 20, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          )}
          <Padding top={ResponsiveHeight(50)} />
          {!!title && (
            <AppText
              style={[
                styles.titleTxt,
                {
                  color: Colors.black,
                  marginTop: dialogIcon
                    ? ResponsiveHeight(20)
                    : ResponsiveHeight(-30),
                },
              ]}
            >
              {t(title as any).toUpperCase()}
            </AppText>
          )}
          {!!message && (
            <AppText style={[styles.messageTxt, messageStyle]}>
              {t(message as any)}
            </AppText>
          )}
          {!!customMessage && customMessage}
          <Padding vertical={ResponsiveHeight(10)} />
          {footer}
          {!!buttonText && (
            <View style={styles.footerContainer}>
              <AppButton
                {...buttonProps}
                onPress={onPress}
                textStyle={styles.mainBtnTxt}
                text={t(buttonText as any).toUpperCase()}
              />
            </View>
          )}
          {!!buttonCustom && buttonCustom}
          {!!dialogIcon && (
            <Image source={dialogIcon} style={styles.dialogIcon} />
          )}
        </View>
      </View>
    </Modal>
  )
}

const styles = XStyleSheet.create({
  dialogIcon: {
    width: 98,
    height: 120,
    position: 'absolute',
    top: -60,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 0.9 * screenWidth,
    justifyContent: 'flex-end',
    backgroundColor: Colors.white,
    borderRadius: 16,
  },
  footerContainer: {
    justifyContent: 'flex-end',
    backgroundColor: Colors.white,
    padding: 20,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
  },
  mainBtn: {},
  mainBtnTxt: {
    color: Colors.white,
    fontSize: 16,
  },
  titleTxt: {
    fontSize: 19,
    textAlign: 'center',
  },
  messageTxt: {
    fontSize: 13,
    marginTop: 20,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  iconClose: {
    width: 22,
    height: 22,
  },
  closeBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10,
  },
  blurView: {
    ...XStyleSheet.absoluteFillObject,
    zIndex: -1,
  },
})
export default memo(AppDiaLog)
