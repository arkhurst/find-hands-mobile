import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
import Colors from '../../constants/Colors';

const Google = () => (
  <Svg
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    enableBackground="new 0 0 512 512"
    width={22}
    height={22}>
    <Path
      d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
      fill="#fbbb00"
    />
    <Path
      d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
      fill="#518ef8"
    />
    <Path
      d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
      fill="#28b446"
    />
    <Path
      d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
      fill="#f14336"
    />
  </Svg>
);

const FaceBook = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <Path
      fill="#3c5a99"
      d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"
    />
  </Svg>
);

const Apple = () => (
  <Svg
    width={25}
    height={25}
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 640 640">
    <Path
      fill="#000"
      d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z"
    />
  </Svg>
);
const SocialIconsProps = ({ children }) => {
  return (
    <React.Fragment>
      <View
        style={{
          backgroundColor: Colors.white,
          width: 44,
          height: 44,
          borderRadius: 22,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 5,
        }}>
        {children}
      </View>
    </React.Fragment>
  );
};

export default function SocialIcons() {
  return (
    <React.Fragment>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <SocialIconsProps>
          <Google />
        </SocialIconsProps>
        <SocialIconsProps>
          <FaceBook />
        </SocialIconsProps>
        <SocialIconsProps>
          <Apple />
        </SocialIconsProps>
      </View>
    </React.Fragment>
  );
}