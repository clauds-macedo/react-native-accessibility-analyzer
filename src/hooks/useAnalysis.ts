import React, { type ReactNode } from 'react';
import { analyzeContrast } from '../functions/analysis/contrastAnalysis';
import type { ChildProps } from '../functions/analysis/types';
import { fontAnalysis } from '../functions/analysis/fontAnalysis';

interface NewProps extends ChildProps {
  children: ReactNode;
}

export const useAnalysis = () => {

  const analyzer = ({style}: ChildProps) => {
    fontAnalysis({style});
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

      if (!style) {
        return;
      }
      const { newStyle, newBackgroundColor } = analyzeContrast({
        style,
        parentBackgroundColor,
      });

      analyzer({style});

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
