import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={390}
    height={841}
    fill="none"
    {...props}>
    <Path
      stroke="#FBC218"
      strokeLinecap="round"
      strokeWidth={10}
      d="M5 209.853c38.438 13.255 76.813 13.138 116.224 5.256 49.124-9.825 59.463-50.438 59.463-95.652 0-38.907-6.253-65.777 17.719-100.907 11.899-17.438 31.144-35.506 52.556-40.544 18.556-4.366 50.511 8.351 64.869-6.006M-65.009 817.262c45.184 30.122 102.233 18.422 150.492 3.021 20.083-6.41 35.942-24.935 48.339-41.164 20.431-26.747 43.78-50.337 75.529-63.444 28.568-11.794 63.881-12.64 94.411-15.295 19.59-1.703 40.05 2.51 59.101-3.021 24.122-7.003 37.672-41.934 45.507-62.878 7.29-19.487 8.896-41.376 10.951-61.934M-18.307 500.55c27.477 17.3 63.154 12.168 92.523 3.777 36.489-10.426 77.439-15.794 115.277-17.278 16.995-.666 24.415 5.329 28.229 23.037 10.18 47.266-33.701 84.258-72.225 100.453-40.17 16.887-83.884 21.161-124.906 35.405-18.083 6.278-38.494 13.009-57.591 7.552M568.483-132c-6.636 22.673-19.444 43.311-30.683 63.916-7.985 14.638-15.22 30.303-24.264 44.28C485.863 18.961 447.21 56.73 406.662 87.222c-48.713 36.634-102.625 75.888-126.133 134.253-8.202 20.364-11.39 42.08-13.595 63.822-1.324 13.05-2.425 30.193 5.476 41.635 21.61 31.298 68.648 25.883 101.397 20.299 38.127-6.501 68.009-35.169 93.09-62.501 42.005-45.775 90.75-99.071 159.366-85.347"
    />
  </Svg>
);
export default SvgComponent;
