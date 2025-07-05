export type Greyscale = {
  color: "greyscale";
  data: Array<number>;
};

export type TrueColor = {
  color: "truecolor";
  data: Array<[number, number, number]>;
};
export type IndexedColor = {
  color: "indexed-color";
  data: Array<number>;
  palette: Array<[number, number, number, number]>;
};

export type GreyscaleAlpha = {
  color: "greyscale-alpha";
  data: Array<[number, number]>;
};

export type TrueColorAlpha = {
  color: "truecolor-alpha";
  data: Array<[number, number, number, number]>;
};

export type ColorData =
  | Greyscale
  | TrueColor
  | IndexedColor
  | GreyscaleAlpha
  | TrueColorAlpha;

export type Header = {
  width: number;
  height: number;
  compression: number;
  filter: number;
  interlace: number;
  bit: 1 | 2 | 4 | 8 | 16;
};

export type Png = Header & ColorData;
