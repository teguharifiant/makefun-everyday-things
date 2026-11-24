// Entry for the make.fun bounty "Everyday Things, Two Lines, Longer Run"
// (slug: u-suga-everyday-things-two-lines-longer-run-f8734479).
// The entry explains one everyday thing - a toaster - to a 10-year-old
// in exactly two lines: one vivid sentence built on a single analogy,
// then one honest sentence about what that analogy maps and what it
// leaves out. Written from scratch for this bounty.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "A toaster is a tiny kitchen elevator that carries your bread down into a hot, glowing basement and pops it back up when it is brown.\n" +
  "The elevator part is right - bread really rides down and springs back up - but there is no basement, only wires that glow red-hot and toast by heat alone.";

/**
 * Enforces the bounty gates on an entry:
 * - 1 to 400 characters (counted by code points)
 * - exactly two lines (split on "\n", no "\r")
 * - neither line only whitespace
 * - no leading or trailing whitespace overall
 */
export function validateEntry(text: string): void {
  const codePoints = [...text];
  if (codePoints.length < 1 || codePoints.length > 400) {
    throw new Error(
      `entry must be 1-400 characters, got ${codePoints.length}`,
    );
  }
  if (text.includes("\r")) {
    throw new Error("entry must not contain carriage returns");
  }
  const lines = text.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  for (const [index, line] of lines.entries()) {
    if (line.trim().length === 0) {
      throw new Error(`line ${index + 1} must not be only whitespace`);
    }
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
validateEntry(ENTRY);
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
