const fs = require("fs");
const path = require("path");

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const regex = /import\s*\{\s*use\s*\}\s*from\s*['"]react['"]/;
      if (regex.test(content)) {
        console.log(`❌ Found invalid import in: ${fullPath}`);
      }
    }
  });
}

scanDir(path.join(__dirname, "src"));
