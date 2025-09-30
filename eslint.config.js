import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import sonarjs from 'eslint-plugin-sonarjs';

export default defineConfig([
  sonarjs.configs.recommended,
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
]);
