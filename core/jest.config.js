const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  preset: 'ts-jest',
  transform: {
    ...tsJestTransformCfg,
  },
  roots: ["<rootDir>/tests"],
  testMatch: ["**/*.spec.ts"],
  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },
  clearMocks: true,
};