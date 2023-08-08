import React, { type ReactNode } from 'react';
import { useContrastAnalysis } from '../hooks/useContrastAnalysis';

interface StyleAnalyzerProps {
  children: ReactNode;
}

export const Analyzer: React.FC<StyleAnalyzerProps> = ({ children }) => {
  const { analyzeRecursive } = useContrastAnalysis();

  return <>{analyzeRecursive(children)}</>;
};
