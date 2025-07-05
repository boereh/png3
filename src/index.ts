import { decodeHeader } from "./header";
import { HEADER_HEX, SIGNATURE_HEX, DATA_HEX, END_HEX } from "./constants";
import { Png } from "./types";
import { log } from "node:console";

export function decode(source: string | Buffer): Png {
  const is_string = typeof source === "string";
  const buffer: Buffer = is_string ? Buffer.from(source) : source;

  if (buffer.length < 26) throw new Error("Invalid PNG buffer length");

  if (SIGNATURE_HEX.compare(buffer.subarray(0, 8)) !== 0) {
    throw new Error("Invalid PNG signature");
  }

  let index = 8;
  let result: Png = {
    width: 0,
    height: 0,
    compression: 0,
    filter: 0,
    interlace: 0,
    bit: 1,
    color: "greyscale",
    data: [],
  };

  while (index < buffer.length) {
    if (HEADER_HEX.compare(buffer.subarray(12, 16)) === 0) {
      result = { ...result, ...decode(buffer) };
    }

    index++;
  }

  return result;
}
