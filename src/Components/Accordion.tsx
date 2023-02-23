import { autorun } from 'mobx'
import { useLocalObservable } from 'mobx-react-lite'
// @ts-ignore
import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native'
import Collapsible, { CollapsibleProps } from 'react-native-collapsible'
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Obx } from './index'
import AppText from './AppText'
import { Colors } from './Colors'

interface AccordionProps extends CollapsibleProps {
  title: string
  headerStyle?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>
  titleIcon?: ImageSourcePropType
  titleIconStyle?: StyleProp<ImageStyle>
  containerStyle?: StyleProp<ViewStyle>
  maxHeight?: number
  customArrow?: (collapse: boolean) => JSX.Element
  scrollProps?: ScrollViewProps
  children: JSX.Element
}

const Accordion = forwardRef(
  (
    {
      title,
      titleStyle,
      titleIcon,
      titleIconStyle,
      headerStyle,
      maxHeight,
      children,
      customArrow,
      scrollProps = {},
      ...restProps
    }: AccordionProps,
    ref,
  ) => {
    const listRef = useRef<ScrollView>(null)
    const arrowAnim = useSharedValue(0)
    const state = useLocalObservable(() => ({
      collapsed: false,
      setCollapsed: (payload: boolean) => (state.collapsed = payload),
    }))

    useEffect(() => {
      const dispose = autorun(() => {
        arrowAnim.value = withTiming(state.collapsed ? 0 : 1)
      })
      return () => dispose()
    }, [arrowAnim, state.collapsed])

    useImperativeHandle(ref, () => ({
      collapse: () => state.setCollapsed(true),
      expand: () => state.setCollapsed(false),
      ...listRef.current,
    }))

    const arrowStyle = useAnimatedStyle(() => ({
      transform: [
        {
          rotate: `${interpolate(
            arrowAnim.value,
            [0, 1],
            [0, 180],
            Extrapolation.CLAMP,
          )}deg`,
        },
      ],
    }))

    return (
      <View>
        <Pressable
          style={[styles.baseHeader, headerStyle]}
          onPress={() => state.setCollapsed(!state.collapsed)}
        >
          {!!titleIcon && (
            <Image
              style={[styles.baseIcon, titleIconStyle]}
              source={titleIcon}
            />
          )}
          <AppText style={[styles.baseTitle, titleStyle]}>{title}</AppText>
          <Obx>
            {() =>
              customArrow ? (
                customArrow(state.collapsed)
              ) : (
                <Animated.View style={arrowStyle}>
                  <Image
                    source={require('../Assets/arrow_down.png')}
                    style={{ height: 14, width: 14 }}
                    resizeMode={'contain'}
                  />
                </Animated.View>
              )
            }
          </Obx>
        </Pressable>
        <Obx>
          {() => (
            <Collapsible {...restProps} collapsed={state.collapsed}>
              <ScrollView
                {...scrollProps}
                style={[scrollProps.style, maxHeight && { maxHeight }]}
                ref={listRef}
              >
                {children}
              </ScrollView>
            </Collapsible>
          )}
        </Obx>
      </View>
    )
  },
)

export default memo(Accordion)

const styles = StyleSheet.create({
  baseItem: {
    paddingHorizontal: 16,
    height: 44,
    backgroundColor: Colors.gray,
    alignItems: 'center',
  },
  baseLabel: {},
  baseIcon: {
    height: 20,
    width: 20,
  },
  baseTitle: {
    color: Colors.white,
  },
  baseHeader: {
    paddingHorizontal: 16,
    height: 44,
    backgroundColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
