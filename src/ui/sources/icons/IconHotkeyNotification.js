import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

function IconHotkeyNotification(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill="#000">
        <Path d="M29.239 26.99l-2.291-3.815a11.343 11.343 0 01-1.615-5.832V14c0-5.145-4.188-9.333-9.333-9.333-5.145 0-9.333 4.188-9.333 9.333v3.343c0 2.054-.559 4.07-1.615 5.832l-2.29 3.816A.667.667 0 003.332 28h25.334a.667.667 0 00.572-1.01zM4.51 26.668l1.684-2.807A12.665 12.665 0 008 17.343V14c0-4.412 3.588-8 8-8s8 3.588 8 8v3.343c0 2.296.624 4.55 1.804 6.517l1.685 2.807H4.511z" />
        <Path d="M16 0a2.67 2.67 0 00-2.667 2.667v2.666a.667.667 0 001.334 0V2.667a1.334 1.334 0 012.666 0v2.666a.667.667 0 001.334 0V2.667A2.67 2.67 0 0016 0zM18.885 26.996a.667.667 0 10-1.152.675c.174.294.268.648.268.996 0 1.102-.897 2-2 2-1.102 0-2-.898-2-2 0-.348.095-.702.268-.996a.669.669 0 00-.238-.914.67.67 0 00-.914.239 3.311 3.311 0 00-.45 1.67A3.336 3.336 0 0016 32a3.34 3.34 0 003.336-3.333c0-.59-.156-1.167-.45-1.671z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconHotkeyNotification