// Monday, Reviewed in One Line — entry program.
// Node 22, stdlib only, deterministic, no network.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";

// One sentence, one line, 145 chars: concrete Monday details (7:42 train,
// 9 a.m. meeting) with the self-own twist landing in the final words.
const LINE =
  "My Monday got one star: the 7:42 train was late, the 9 a.m. meeting was early, and my manager called me 'the new guy' for the third year running.";

// Gate guard: the sealed scorer accepts 1-200 UTF-8 chars, not only whitespace.
if ([...LINE].length < 1 || [...LINE].length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry line violates the 1-200 char single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
