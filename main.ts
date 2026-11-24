import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I meant to text my wife 'pick up milk' but autocorrect sent 'pick up Mike' — now there's a stranger named Mike in my kitchen.";

// Gate: the entry must be 1–199 characters, not only whitespace.
if (line.length < 1 || line.length > 199 || !line.trim()) {
  throw new Error(`entry must be 1–199 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
