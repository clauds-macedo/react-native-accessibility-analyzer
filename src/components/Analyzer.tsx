import React, { type ReactNode } from 'react';
import { useAnalyzeStyles } from 'src/hooks/useAnalyzeStyles';

interface StyleAnalyzerProps {
  children: ReactNode;
}

export const Analyzer: React.FC<StyleAnalyzerProps> = ({ children }) => {
  useAnalyzeStyles(children);
  return <></>;
};
