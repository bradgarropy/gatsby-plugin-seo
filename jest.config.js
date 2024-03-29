const config = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/**"],
    preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/test/setup.tsx"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["<rootDir>/dist", "<rootDir>/node_modules"],
    verbose: true,
}

module.exports = config
