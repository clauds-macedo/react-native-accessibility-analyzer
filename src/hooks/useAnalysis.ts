import React, { type ReactElement, type ReactNode } from 'react';
import { analyzeContrast } from '../functions/analysis/contrastAnalysis';
import type { ChildProps } from '../functions/analysis/types';
import { fontAnalysis } from '../functions/analysis/fontAnalysis';
import { Text } from 'react-native';

interface NewProps extends ChildProps {
  children: ReactNode;
}

export const useAnalysis = () => {

  const analyzer = ({style}: ChildProps, child: ReactElement) => {
    if (child.type === Text) {
      fontAnalysis({style: {...style, allowFontScaling: child.props.allowFontScaling}, });
    }
  }

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
      console.log(child)

      if (!style) {
        return;
      }
      const { newStyle, newBackgroundColor } = analyzeContrast({
        style,
        parentBackgroundColor,
      });

      analyzer({style}, child);

      newProps.style = newStyle;

      if (children) {
        newProps.children = analyzeRecursive(
          children,
          String(newBackgroundColor)
        );
      }

      return React.cloneElement(child, newProps);
    });
  };

  return { analyzeRecursive };
};
