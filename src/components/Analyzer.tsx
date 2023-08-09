import React, { type ReactNode } from 'react';
import { useAnalysis } from '../hooks/useAnalysis';

interface StyleAnalyzerProps {
  children: ReactNode;
}

export const Analyzer: React.FC<StyleAnalyzerProps> = ({ children }) => {
  const { analyzeRecursive } = useAnalysis();

  return <>{analyzeRecursive(children)}</>;
};
