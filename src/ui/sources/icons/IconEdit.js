import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

function IconEdit(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill="#000">
        <Path d="M23 14a1 1 0 00-1 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h12a1 1 0 100-2H3a3 3 0 00-3 3v20a3 3 0 003 3h18a3 3 0 003-3V15a1 1 0 00-1-1z" />
        <Path d="M26.88 1.122a3.828 3.828 0 00-5.415 0L8.293 14.293a1.01 1.01 0 00-.241.391l-2 6a1 1 0 001.264 1.265l6-2a1 1 0 00.39-.242L26.88 6.535a3.828 3.828 0 000-5.413z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h28v28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconEdit