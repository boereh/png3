export const COLORS = {
  0: "greyscale",
  2: "truecolor",
  3: "indexed-color",
  4: "greyscale-alpha",
  6: "truecolor-alpha",
} as const;

export const SIGNATURE_HEX = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);
export const DATA_HEX = Buffer.from([0x49, 0x44, 0x41, 0x54]);
export const END_HEX = Buffer.from([0x49, 0x45, 0x4e, 0x44]);
export const HEADER_HEX = Buffer.from([0x49, 0x48, 0x44, 0x52]);
