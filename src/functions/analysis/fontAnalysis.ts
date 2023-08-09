import type { ChildProps } from './types';

const MIN_RECOMMENDED_FONT_SIZE = 16;
const MAX_LEGIBLE_FONT_SIZE = 14;

export const fontAnalysis = ({ style }: ChildProps) => {
  if (!style) {
    return;
  }
  const { fontSize, allowFontScaling } = style;

  if (!fontSize || Number(fontSize) <= MAX_LEGIBLE_FONT_SIZE) {
    console.warn(
      `For users with low vision, it is recommended that the font size is at least ${MIN_RECOMMENDED_FONT_SIZE}.`
    );
  }

  if (!allowFontScaling) {
    console.warn(
      'Font scaling is disabled. Consider enabling font scaling for better accessibility.'
    );
  }
};
