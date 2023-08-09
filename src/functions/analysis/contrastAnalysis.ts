import { contrast } from '../contrast';
import type { ChildProps } from './types';

export const analyzeContrast = ({style, parentBackgroundColor}: ChildProps) => {
  const { color: childColor, backgroundColor: bg } = style;
  const backgroundColor = bg || parentBackgroundColor;

  let newStyle = { ...style };

  if (parentBackgroundColor && childColor) {
    const colorContrastRatio = contrast(
      parentBackgroundColor,
      String(childColor)
    );
    if (colorContrastRatio < 4.5) {
      newStyle.backgroundColor = '#777';
      console.warn(
        'Low contrast detected between parent background color and child text color.'
      );
    }
  }

  return {
    newStyle,
    newBackgroundColor: backgroundColor,
  };
};
