// @ts-ignore
import React, { memo } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { toHeight, XStyleSheet, Colors } from '../Theme'
import DropDownListItem from './DropdownListItem'

const Dropdown = ({
  open,
  value,
  setOpen,
  setValue,
  items,
  setItems,
  placeholder,
  onChangeValue,
  onSelectItem,
  defaultValue,
  disabled = false,
  widthValue,
  borderWidth = 0,
  style,
  placeholderStyle,
  dropDownContainerStyle,
  listItemContainerStyle,
  listItemLabelStyle,
  selectedItemContainerStyle,
  itemSeparatorStyle,
  onPress,
  disabledStyle,
  maxHeight,
  labelStyle,
  dropDownDirection,
  textStyle,
}) => {
  return (
    <DropDownPicker
      open={open}
      value={value || defaultValue}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={onChangeValue}
      onSelectItem={onSelectItem}
      onPress={onPress}
      placeholder={placeholder}
      placeholderStyle={placeholderStyle ?? styles.placeholderStyle}
      disabledStyle={[styles.disableBackground, disabledStyle]}
      style={[
        styles.dropdown,
        styles.background,
        { width: widthValue, borderWidth: borderWidth },
        style,
      ]}
      listMode="SCROLLVIEW"
      itemSeparator
      scrollViewProps={{
        nestedScrollEnabled: true,
      }}
      zIndexInverse={7000}
      zIndex={1000}
      autoScroll
      arrowIconStyle={styles.arrowIconStyle}
      showTickIcon={false}
      textStyle={[styles.textStyle, textStyle]}
      labelStyle={labelStyle}
      dropDownContainerStyle={[
        dropDownContainerStyle ?? styles.dropDownContainerStyle,
      ]}
      iconContainerStyle={styles.iconContainerStyle}
      itemSeparatorStyle={[styles.itemSeparatorStyle, itemSeparatorStyle]}
      selectedItemContainerStyle={[
        styles.selectedItemContainerStyle,
        selectedItemContainerStyle,
      ]}
      listItemContainerStyle={[
        styles.listItemContainerStyle,
        listItemContainerStyle,
      ]}
      listItemLabelStyle={[styles.listItemLabelStyle, listItemLabelStyle]}
      maxHeight={maxHeight ?? toHeight(50)}
      disabled={disabled}
      dropDownDirection={dropDownDirection ?? 'AUTO'}
      renderListItem={DropDownListItem as any}
    />
  )
}

const styles = XStyleSheet.create({
  flex: {
    flex: 1,
  },
  containerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: Colors.black,
    borderColor: Colors.primary,
  },
  dropdown: {
    borderWidth: 8,
    height: 48,
    width: 140,
    borderRadius: 8,
  },
  disableBackground: {
    backgroundColor: Colors.gray,
  },
  placeholderStyle: {
    color: Colors.white,
    padding: 0,
    fontSize: 14,
    marginLeft: -2,
  },
  arrowIconStyle: {
    width: 20,
    height: 20,
  },
  dropDownContainerStyle: {
    marginTop: 5,
    borderRadius: 8,
    borderColor: Colors.transparent,
    borderWidth: 0,
    zIndex: 10,
  },
  iconContainerStyle: {
    justifyContent: 'center',
  },
  itemSeparatorStyle: {
    backgroundColor: Colors.white,
  },
  selectedItemContainerStyle: {
    backgroundColor: Colors.primary,
  },
  listItemContainerStyle: {
    height: 52,
  },
  listItemLabelStyle: { color: Colors.white },
  textStyle: {
    opacity: 0.9,
    fontSize: 13,
  },
  textDisableStyle: {
    fontSize: 14,
  },
  iconStyle: {
    height: 30,
    width: 30,
    marginRight: 5,
    color: 'red'
  },
  defaultIconStyle: {
    height: 30,
    width: 30,
    marginRight: 15,
    marginLeft: 10,
  },
  downIconStyle: {
    width: 13,
    marginRight: 14,
  },
  stackFullSize: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  defaultItemView: {
    height: 60,
    position: 'absolute',
    elevation: 100,
    borderWidth: 1,
  },
  centerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 7,
  },
  paddingTop16: { paddingTop: 16 },
})

export default memo(Dropdown)
