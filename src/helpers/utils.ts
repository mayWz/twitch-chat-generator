export const percentToHex = (p: number) =>
  Math.floor((p * 255) / 100)
    .toString(16)
    .padStart(2, "0");

export const hexToPercent = (h: string) =>
  Math.floor((parseInt(h, 16) * 100) / 255);
