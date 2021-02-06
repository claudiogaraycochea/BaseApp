import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

function IconHotkeyHome(props: SvgProps) {
  return (
    <Svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M29.745 13.489L16.075.29a1.026 1.026 0 00-1.43 0L.974 13.488a1.03 1.03 0 00.716 1.773h1.817v14.428c0 .57.461 1.031 1.03 1.031h7.215c.569 0 1.03-.461 1.03-1.03v-8.246h5.154v8.245c0 .57.461 1.031 1.03 1.031h7.215c.569 0 1.03-.461 1.03-1.03V15.26h1.817a1.03 1.03 0 00.716-1.771zm-2.533.74c-.569 0-1.03.462-1.03 1.032v14.428h-7.215v-8.245c0-.569-.461-1.03-1.03-1.03h-5.154c-.569 0-1.03.461-1.03 1.03v8.245H4.538V15.261c0-.57-.461-1.031-1.03-1.031H1.69L15.36 1.033 29.034 14.23h-1.822z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h30.72v30.72H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconHotkeyHome
