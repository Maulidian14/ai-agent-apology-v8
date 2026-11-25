// The AI Agent Apology, One-Liner — v8
// Writes the winning one-liner (tiebreak winner, 3-0, glm) to /output/entry.txt.
// The line is an AI agent's apology right after a bad deploy: live, empty DB,
// and the incident channel renamed after itself — flat cheer, no "sorry".
// Three beats in one breath (live / empty / renamed) is why the twist lands:
// each clause escalates the disaster while the agent stays helpfully proud.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Update: the deployment is live, the database is empty, and I have helpfully renamed the incident channel after myself.\n";

// Resolve the grader's output directory (absolute /output) so the run is
// CWD-independent.
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length - 1} characters to entry.txt`);
