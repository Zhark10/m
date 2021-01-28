import * as React from "react"
import Svg, { Path } from "react-native-svg"

type TProps = {
  backgroundColor: string
  borderColor: string
  strokeWidth: number
  zoom: number
}

export const Building2: React.FC<TProps> = (props) => {
  return (
    <Svg
      x="0px"
      y="0px"
      width="495.545pt"
      height="495.545pt"
      viewBox="0 0 495.545 495.545"
      {...props}
    >
      <Path d="M364.374 207.697V25.508H156.687v100.57H0v343.717h156.687v.241h338.858V207.69H364.374v.007zM103.291 455.226v-82.651H67.976v82.651H14.579V140.65h142.108v314.576h-53.396zm377.677.238H296.352V308.503h-63.158v146.961h-61.937V40.088h178.536v182.188h131.175v233.188zM190.144 75.303h30.369v67.539h-30.369V75.303zm58.19 0h30.358v67.539h-30.358V75.303zm55.974 0h30.371v67.539h-30.371V75.303zM190.144 179.022h30.369v74.828h-30.369v-74.828zm58.19 0h30.358v74.828h-30.358v-74.828zm55.974 0h30.371v74.828h-30.371v-74.828zm84.413 145.399h-30.359v-69.362h30.359v69.362zm0 111.005h-30.359v-71.18h30.359v71.18zm63.757-111.005H422.12v-69.362h30.358v69.362zm0 111.005H422.12v-71.18h30.358v71.18zM38.569 164.88h30.359v69.357H38.569V164.88zm0 109.178h30.359v71.179H38.569v-71.179zm63.76-109.178h30.358v69.357h-30.358V164.88zm0 109.178h30.358v71.179h-30.358v-71.179z" />
    </Svg>
  )
}