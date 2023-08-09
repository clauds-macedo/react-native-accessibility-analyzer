import type { ViewStyle, TextStyle, TextProps } from 'react-native';

export interface ChildProps {
  style: ViewStyle & TextStyle & TextProps;
  parentBackgroundColor?: string;
}
