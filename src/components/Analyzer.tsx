import React, { useEffect, type ReactNode } from 'react';
import { contrast } from '../functions/contrast';

interface StyleAnalyzerProps {
  children: ReactNode;
}

export const Analyzer: React.FC<StyleAnalyzerProps> = ({ children }) => {
  useEffect(() => {
    const analyzeRecursive = (childNode: ReactNode, parentBackgroundColor?: string) => {
      React.Children.forEach(childNode, (child) => {
        if (React.isValidElement(child) && child.props.style) {
          const childColor = child.props.style.color;
          const backgroundColor = child.props.style.backgroundColor;
          if (parentBackgroundColor && childColor) {
            const colorContrast = contrast(parentBackgroundColor, childColor);
            console.log(colorContrast, parentBackgroundColor, childColor)
            if (colorContrast < 4.5) {
              console.warn('Low contrast detected between parent background color and child text color.');
            }
          }

          if (child.props.children) {
            analyzeRecursive(child.props.children, backgroundColor || parentBackgroundColor);
          }
        }
      });
    };

    analyzeRecursive(children);
  }, [children]);

  return <>{children}</>;
};
