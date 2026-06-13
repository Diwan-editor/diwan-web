import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const schemaPath = join(
  __dirname,
  "..",
  "node_modules",
  "nextra-theme-docs",
  "dist",
  "schemas.js",
);

try {
  const content = readFileSync(schemaPath, "utf-8");
  const original = "  children: reactNode,";
  const fixed = "  children: reactNode.optional(),";

  if (content.includes(fixed)) {
    console.log("[postinstall] Schema already patched, skipping.");
    process.exit(0);
  }

  if (!content.includes(original)) {
    console.error(
      `[postinstall] Could not find expected pattern in schema file. File may have changed.`,
    );
    process.exit(1);
  }

  const updated = content.replace(original, fixed);
  writeFileSync(schemaPath, updated, "utf-8");
  console.log("[postinstall] Patched nextra-theme-docs schema (children -> optional).");
} catch (err) {
  console.error(`[postinstall] Failed: ${err.message}`);
  process.exit(1);
}
