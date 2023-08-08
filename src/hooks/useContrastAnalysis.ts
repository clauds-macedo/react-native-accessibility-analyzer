import { type ReactNode } from 'react';
import { contrast } from '../functions/contrast';
import React from 'react';
import type { StyleSheetProperties } from 'react-native';

interface NewProps {
  style: StyleSheetProperties,
  children: ReactNode
}

export const useContrastAnalysis = () => {
  const analyzeRecursive = (
    childNode: ReactNode,
    parentBackgroundColor?: string
  ): ReactNode => {
    return React.Children.map(childNode, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      const { style, children } = child.props;
      let newProps: NewProps = {} as NewProps;

      if (style) {
        const { color: childColor, backgroundColor: bg } = style;
        const backgroundColor = bg || parentBackgroundColor;

        if (parentBackgroundColor && childColor) {
          const colorContrastRatio = contrast(parentBackgroundColor, childColor);
          if (colorContrastRatio < 4.5) {
            newProps.style = {
              ...style,
              backgroundColor: '#777',
            };
          }
        }

        if (children) {
          newProps.children = analyzeRecursive(children, backgroundColor);
        }
      }

      return React.cloneElement(child, newProps);
    });
  };

  return { analyzeRecursive };
};
