export const getLuminance = (r: number, g: number, b: number): number => {
    let adjustedColorValues = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return adjustedColorValues[0] * 0.2126 + adjustedColorValues[1] * 0.7152 + adjustedColorValues[2] * 0.0722;
  }
  