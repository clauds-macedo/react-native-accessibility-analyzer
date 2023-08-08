import React, { type ReactNode, useEffect } from 'react';

export const useAnalyzeStyles = (children: ReactNode) => {
    
  useEffect(() => {
    const analyzeRecursive = (childNode: ReactNode) => {
      React.Children.forEach(childNode, (child) => {
        if (React.isValidElement(child)) {
          console.log(child.props.style); 

          if (child.props.children) {
            analyzeRecursive(child.props.children);
          }
        }
      });
    }

    analyzeRecursive(children);
  }, [children]);
};
