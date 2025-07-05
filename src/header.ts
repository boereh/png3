import { Png } from "./types";
import { COLORS } from "./constants";

export function decodeHeader(source: Buffer) {
  return {
    width: source.readUInt32BE(16),
    height: source.readUInt32BE(20),
    bit: source.readUInt8(24) as Png["bit"],
    color: COLORS[source.readUInt8(25)],
    compression: source.readUint8(26),
    filter: source.readUint8(27),
    interlace: source.readUint8(28),
  };
}
