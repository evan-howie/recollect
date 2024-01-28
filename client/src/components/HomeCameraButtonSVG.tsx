import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const HomeCameraButtonSVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={101}
    height={101}
    fill="none"
    {...props}>
    <Path
      fill="#F2EBDB"
      fillRule="evenodd"
      d="M50.5 101c27.89 0 50.5-22.61 50.5-50.5S78.39 0 50.5 0 0 22.61 0 50.5 22.61 101 50.5 101Zm0-11C72.315 90 90 72.54 90 51S72.315 12 50.5 12 11 29.46 11 51s17.685 39 39.5 39Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HomeCameraButtonSVG;
