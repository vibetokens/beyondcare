#!/usr/bin/env node
/**
 * Beyond Care — Portal Asset CLI
 *
 * Usage:
 *   npm run portal:add -- --file ./path/to/file.svg --name "Logo Primary" --category Logos --description "Main wordmark"
 *
 * Options:
 *   --file        Path to the source file (required)
 *   --name        Display name (required)
 *   --category    e.g. Logos | Marketing PDFs | Website Copy | Templates (required)
 *   --description Short description (optional)
 *   --note        Version note, e.g. "Updated colors" (optional)
 *
 * ⚠️  SECURITY: Never commit sensitive client files to a public repo.
 *     Add private files to .gitignore before running this script.
 */

const fs   = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const args = process.argv.slice(2);
function getArg(name) {
  const i = args.indexOf(`--${name}`);
  return i !== -1 ? args[i + 1] : null;
}

const filePath    = getArg("file");
const name        = getArg("name");
const category    = getArg("category");
const description = getArg("description") || "";
const note        = getArg("note") || "Initial release";

if (!filePath || !name || !category) {
  console.error("\n❌  Missing required args. Usage:");
  console.error('   npm run portal:add -- --file ./logo.svg --name "Logo Primary" --category Logos\n');
  process.exit(1);
}

if (!fs.existsSync(filePath)) {
  console.error(`\n❌  File not found: ${filePath}\n`);
  process.exit(1);
}

const ASSETS_DIR = path.join(__dirname, "../public/portal/assets");
const MANIFEST   = path.join(__dirname, "../public/portal/manifest.json");

const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));

const id       = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const ext      = path.extname(filePath).slice(1).toLowerCase();
const today    = new Date().toISOString().split("T")[0];
const dateLabel = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const existing = manifest.resources.find(r => r.id === id);
let version, filename, commitMsg;

if (existing) {
  const lastV = existing.versions[existing.versions.length - 1];
  const vNum  = parseInt(lastV.v.replace("v", "").split(".")[0]) + 1;
  version  = `v${vNum}.0`;
  filename = `${id}-${version.toLowerCase()}.${ext}`;

  existing.versions.forEach(v => v.current = false);
  existing.versions.push({ v: version, date: dateLabel, note, current: true });
  existing.version  = version;
  existing.filename = filename;
  existing.isNew    = true;
  existing.added    = today;

  commitMsg = `portal: update "${name}" to ${version}`;
  console.log(`\n🔄  Updating "${name}" → ${version}`);
} else {
  version  = "v1.0";
  filename = `${id}.${ext}`;

  manifest.resources.push({
    id, name, category,
    type: ext,
    filename,
    description,
    version,
    added: today,
    isNew: true,
    versions: [{ v: version, date: dateLabel, note, current: true }],
  });

  commitMsg = `portal: add "${name}" ${version}`;
  console.log(`\n✅  Adding "${name}" (${version})`);
}

// Auto-expire isNew after 7 days
manifest.resources.forEach(r => {
  if (r.isNew && r.added && r.added !== today) {
    const age = (Date.now() - new Date(r.added).getTime()) / (1000 * 60 * 60 * 24);
    if (age > 7) r.isNew = false;
  }
});

fs.copyFileSync(filePath, path.join(ASSETS_DIR, filename));
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
console.log(`📋  manifest.json updated — ${manifest.resources.length} total assets`);

// Git commit and push
try {
  console.log("📦  Committing and pushing...");
  execSync("git add public/portal/", { stdio: "inherit" });
  execSync(`git commit -m "${commitMsg}"`, { stdio: "inherit" });
  execSync("git push", { stdio: "inherit" });
  console.log(`\n🚀  Done! Vercel will deploy in ~30s.`);
  console.log(`🌐  Portal: https://beyondcare-web.vercel.app/portal\n`);
} catch (e) {
  console.log("\n⚠️   Git push failed — commit manually and push.");
  console.log(`🌐  Portal will update on next deploy: /portal\n`);
}
