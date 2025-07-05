import { log } from "node:console";
import { decode } from "../src";
import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("example", () => {
  const example = readFileSync("test/example.png");
  const png = decode(Buffer.from(example));
  log(png);
});
