import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

function IconHeart(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M15.595 5.901l.405.56.405-.56a9.79 9.79 0 011.934-2.02c1.403-1.085 2.988-1.631 4.722-1.631 2.333 0 4.472.932 6.033 2.625C30.638 6.55 31.5 8.851 31.5 11.367c0 2.563-.948 4.93-3.059 7.477h0c-1.903 2.297-4.648 4.639-7.883 7.395h0l-.028.023c-1.094.933-2.335 1.991-3.623 3.117h0a1.377 1.377 0 01-1.815 0h0c-1.297-1.135-2.546-2.199-3.646-3.136l-.003-.003h0c-3.235-2.757-5.98-5.1-7.884-7.396C1.449 16.298.5 13.93.5 11.367c0-2.516.862-4.817 2.406-6.492 1.56-1.693 3.7-2.625 6.033-2.625 1.734 0 3.319.546 4.722 1.631h0a9.781 9.781 0 011.934 2.02z"
          fill="#fff"
          stroke="#000"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconHeart
