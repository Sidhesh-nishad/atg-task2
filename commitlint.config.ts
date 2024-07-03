require("@commitlint/types").UserConfig;

/**
 * Commitlint configuration
 * @see https://commitlint.js.org/#/reference-configuration
 * @type {import('@commitlint/types').UserConfig}
 * build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
 * chore: Other changes that don't modify src or test files
 * ci: Changes to our CI configuration files and scripts (example scopes: Jenkins, Docker, Sentry)
 * docs: Documentation only changes
 * ui: Changes to UI
 * feat: A new feature
 * update: A feature update
 * fix: A bug fix
 * fixup: A bug fix that should be squashed
 * merge: Merge branch ? of ? into ?
 * release: A new release
 * wip: A work in progress commit
 * hotfix: Critical hotfix
 * temp: Temporary commit
 * perf: A code change that improves performance
 * refactor: A code change that neither fixes a bug nor adds a feature
 * revert: Reverts a previous commit
 * style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
 * test: Adding missing tests or correcting existing tests
 * translation: Changes to translations
 * security: Changes to security
 * changeset: Changes to changeset
*/

module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "body-leading-blank": [1, "always"],
        "body-max-line-length": [2, "always", 125],
        "footer-leading-blank": [1, "always"],
        "footer-max-line-length": [2, "always", 125],
        "header-max-length": [2, "always", 125],
        "scope-case": [2, "always", "lower-case"],
        "subject-case": [
            2,
            "never",
            ["sentence-case", "start-case", "pascal-case", "upper-case"],
        ],
        "subject-empty": [2, "never"],
        "subject-full-stop": [2, "never", "."],
        "type-case": [2, "always", "lower-case"],
        "type-empty": [2, "never"],
        "type-enum": [
            2,
            "always",
            [
                "build",
                "chore",
                "ci",
                "ui",
                "docs",
                "feat",
                "update",
                "fix",
                "fixup",
                "merge",
                "release",
                "wip",
                "hotfix",
                "temp",
                "perf",
                "refactor",
                "revert",
                "style",
                "test",
                "translation",
                "security",
                "changeset",
            ],
        ],
    },
};