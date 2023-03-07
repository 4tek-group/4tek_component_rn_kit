# react-native-4tek-component-kit

This is base component kit for mini app

## Installation

```sh
npm install react-native-4tek-component-kit
```

## Usage

```js
import { 
  AppText,
  AppButton,
  AppGradientText,
  AppImage,
  AppBar,
  Expanded,
  Row,
  Position,
  AppDialog
} from 'react-native-4tek-component-kit';

//Using Text
<AppText>Welcome to mini app</AppText>

//Using Button
<AppButton text={'Login'}/>

//Using Input
<AppInput
  style={{ height: 50, width: 250 }}
  placeholder={'Password'}
  value={password}
  isPassword={true}
  maxLength={11}
  onChangeText={setPassword}
/>

//Using Gradient Text
<AppGradientText fontSize={50}>
  This is sample text for AppGradientText
</AppGradientText>

//Using Image
<AppImage
  style={{
    width: screenWidth - ResponsiveWidth(30),
    height: 300,
  }}
  source={{
    uri: 'https://wallpaper.dog/large/20533651.jpg',
  }}
/>

//Using Appbar
<AppBar title={"Home"}/>

//Using Expanded in Row
<Row>
  <View style={styles.cell} />
  <Expanded
    style={{ backgroundColor: 'blue', ...Layout.center }}
  >
    <AppText color={Colors.white}>Expanded</AppText>
  </Expanded>
</Row>

//Using Dropdown
<Dropdown
  defaultValue={'item1'}
  style={[Layout.fullWidth, styles.dropdown]}
  open={state.open}
  setOpen={op => state.setOpen(op)}
  value={state.value}
  setValue={callback => {
    state.setValue(callback(state.value))
  }}
  items={[
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' },
  ]}
/>

//Using Loading
<LoadingIndicator type="Wave" />

//Using Position
<View>
  <Position
    style={styles.cube}
    top={10}
    left={0}
  />
</View>

{state.showDialog && 
(<AppDiaLog 
  title={'Title'} 
  message={'Message'} 
  onClose={state.setOpenDialog(false)}/>)}

//Using Pagination
<Pagination
  currentPage={state.currentPage}
  maxPage={10}
  onChange={page => state.setCurrentPage(page)}
/>
```
---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
