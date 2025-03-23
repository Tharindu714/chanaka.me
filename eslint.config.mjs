import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend Next.js and TypeScript rules
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Custom rules
  {
    rules: {
      "react/no-unescaped-entities": "off", // Disable the rule
    },
  },
];

export default eslintConfig;

