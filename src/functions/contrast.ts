import { getLuminance } from "./getLuminance";
import { hexToRgb } from "./hexToRGB";

export const contrast = (color1: string, color2: string): number => {
    const [r1, g1, b1] = hexToRgb(color1);
    const [r2, g2, b2] = hexToRgb(color2);
  
    const lum1 = getLuminance(r1, g1, b1);
    const lum2 = getLuminance(r2, g2, b2);
  
    return lum1 > lum2
      ? (lum1 + 0.05) / (lum2 + 0.05)
      : (lum2 + 0.05) / (lum1 + 0.05);
  }