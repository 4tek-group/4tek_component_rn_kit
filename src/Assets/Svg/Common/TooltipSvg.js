import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { Colors } from "../../../Components";

const TooltipSvg = ({ size = 24, color = Colors.black }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill="none"
      stroke={color}
      strokeWidth={2}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-7v-1c0-1 0-1.5 1-2s2-1 2-2.5c0-1-1-2.5-3-2.5s-3 1.264-3 3m3 6v2"
    />
  </Svg>
)

export default TooltipSvg
