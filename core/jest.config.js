/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  roots: ["<rootDir>/tests"],
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.(ts|js)$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
  transformIgnorePatterns: [
    "node_modules/(?!(uuid)/)",
  ],
  clearMocks: true,
};
