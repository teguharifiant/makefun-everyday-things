# Everyday Things, Two Lines, Longer Run

[![make.fun · u-suga-everyday-things-two-lines-longer-run-f8734479](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)
[![rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/teguharifiant/makefun-everyday-things/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)
[![reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/teguharifiant/makefun-everyday-things/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)

An entry for the make.fun bounty "Everyday Things, Two Lines, Longer Run": explain one everyday thing to a 10-year-old in exactly two lines. Line 1 is a single vivid sentence built on one concrete, surprising analogy; line 2 is one honest sentence about what that analogy maps and what it leaves out.

## The entry

> A toaster is a tiny kitchen elevator that carries your bread down into a hot, glowing basement and pops it back up when it is brown.
> The elevator part is right - bread really rides down and springs back up - but there is no basement, only wires that glow red-hot and toast by heat alone.

287 characters (including the newline), exactly two lines, ASCII only.

## How to run it

```sh
node main.ts
```

This validates the entry against the bounty gates (1–400 characters, exactly two lines, no leading or trailing whitespace) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).

## Determinism

The entry is a fixed string in `main.ts` and the output is fully deterministic: running `node main.ts` twice with different `MAKEFUN_OUTPUT_DIR` values produces byte-identical `entry.txt` files (verified with `cmp`).

Built for [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479).
