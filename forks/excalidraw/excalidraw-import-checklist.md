# Forks

This file will help during the import process when using VS Code with the `Markdown all in one` extension.

- Do `Ctrl-k v` to see the interactive checkboxes.
- In the new panel, boxes show which steps are already done.

### As an exploration strategy:

- [x] Shallow-clone a github repository XXX (flag `--depth 1`) in `forks` directory. The repository **must** be MIT Licensed, as we don't want to deal with all the intricasies of License entangling.
- [x] Update the README and the LICENSE files of the repository with:
  - [x] At the top of the README file:
    ### Forking notice
    This package/app/monorepository is a fork of [XXX](https://github.com/vendor/x.git), revision `RRR`. [MIT](https://opensource.org/license/mit/) License, Copyright (c) YYYY, [Vendor](https://vendor.com). [MIT](https://opensource.org/license/mit/) License, Copyright (c) 2023-last commit year, Jason Lenoble, <jason.lenoble@gmail.com>
  - [x] At the top of the LICENSE file (which must be explicitly MIT), but after the original copyrights: Copyright (c), Jason Lenoble, <jason.lenoble@gmail.com>
- [x] Create a new branch XXX and check it out: `git checkout -b XXX`.
- [x] cd into the root directory of the imported files and:
  - [x] Depending on the lock file (if any), use `npm`, `yarn` or `pnpm` to install as first choice. If the package manager fails, try another. If all fail, uncheck everything and start over with an earlier revision.
  - [x] Find out how to run the test suite, and if any, run it all.
  - [x] Try to run the actual app or to import the package into the sandbox.
  - [x] In VS Code move this file `XXX-import-checklist.md` to `XXX` directory
  - [x] Delete `.git` directory as last step before initial commit.
- [x] Commit all the files as they are with the message: 🔧 chore(XXX): initial fork From: XXX. Revision: RRR. All original files, with amended headers in README.md and LICENSE, and with added file XXX-import-checklist.md, to tag along all integration steps.
- [x] Prettify
  - [x] Replace or inject global prettier (see `@organon/prettier-config`/README.md), then apply it to all files (`prettier . --write`).
  - [x] Commit all with the message: 🎨 style(excalidraw): apply repo prettier rules to all
- [ ] Integrate XXX into Rush stack:
  - [x] Remove all temp files (check if there are `npm` scripts for that or do it manually).
  - [x] Handle installation:
    - [x] Deal with Husky first (if applicable):
      - [x] Explore the git hooks in .husky (or elsewhere, depending on the prepare `npm` script) and if some seem relevant, add equivalent tasks to the repo common git-hooks.
      - [x] Remove the .husky or equivalent dir.
      - [x] Remove or comment out any relative line from package.json (e.g. check the prepare/install scripts and remove the husky dev dep).
      - [x] Commit with at least the message: 🔧 chore(excalidraw): remove husky
    - [x] If something more than husky is done when preparing/installing, then think and don't break anything!
    - [x] Upgrading/fixing dependencies (most likely pnpm will scream about missing stuff):
      - [x] Correct `@organon/prettier-config` dep in package.son (it pertains to workspace). Use `../../configs/prettier` instead.
      - [x] Local npm install for sanity check:
        - [x] Delete node_modules.
        - [x] Delete package-lock.json if any.
        - [x] Reinstall with npm.
        - [x] Keep warnings in npm-warnings.txt (but don't commit, we'll rely later on on pnpm).
        - [x] Run the test suite:
          - [x] Eslint may not pass and may require to edit eslint config, especially if it uses prettier plugin. If you remove a plugin, start over npm local install.
          - [x] commit if any change with the message "🐛 fix(excalidraw): tweak eslint config"
          - [x] Prettier may not pass any more if more files are added to the processing or local prettier differ from global prettier (which was used to prelint the whole package earlier before its first commit).
          - [x] If files were added or prettier was upgraded, run 'prettier . --write'. to bring all files to standard.
          - [x] Run 'prettier . --check' to verify the prettifying is stable. Otherwise try again to write all and recheck.
          - [x] commit if prettifying was changed and is stablilized with the message "🐛 fix(excalidraw): tweak prettier config"
          - [x] Type checking, when applicable, should still pass.
          - [x] Actual testing should still pass.
      - [x] Local pnpm install:
        - [x] Move node_modules to temp for reference.
        - [x] Delete pnpm-lock.yaml if any.
        - [x] Run a fresh install with pnpm, not rush update.
        - [x] mv temp to node_modules/.temp to avoid chocking prettier or eslint. Move npm-warnings.txt too (we don't intend to commit it).
        - [x] Run the test suite to make sure nothing is broken yet:
          - [x] Prettier should still pass.
          - [x] Actual testing may not pass but do it before linting and type checking, as the depedenncy tree is handled straightforwardly by the tooling. Most likely some deps are missing because pnpm doesn't flatten by default.
            - [x] test and maybe add missing deps.
            - [x] pass tests.
            - [x] Commit if any dep was added with the message "🐛 fix(excalidraw): add missing deps".
          - [x] Linting may yell because of missing refs:
            - [x] test and maybe add missing deps.
            - [x] pass tests
            - [x] Commit if any dep was added with the message "🐛 fix(excalidraw): add missing eslint deps".
          - [x] Type checking may yell because of missing refs:
            - [x] test and maybe add missing deps.
            - [x] pass tests
            - [x] Commit if any dep was added with the message "🐛 fix(excalidraw): add missing typescript deps".
  - [x] Add XXX to rush.json as a private package.
  - [x] Run rush update to get a sense of all that will break. The first errors will be about mismatched deps and maybe a missing version:
    - [x] Fix the version if missing ("version": "0.0.0" will do).
    - [x] Don't upgrade all the deps in one go but do the following:
      - [x] For semvers differing only in patch numbers, replace all with the highest without '^' or '~'.
      - [x] In XXX, pnpm install and run the test suite.
      - [x] For semvers differing only in minor numbers, replace all versions with the highest semver without '^' or '~'.
      - [x] In XXX, pnpm install and run the test suite.
      - [x] For semvers differing in major numbers, replace all versions with the highest semver without '^' or '~'.
      - [x] In XXX, pnpm install and run the test suite.
      - [x] Commit with the message "🐛 fix(excalidraw): made deps consistent with repo"
  - [x] Change back `@organon/prettier-config` in package.json to `workspace:*`
  - [x] Remove node_modules and pnpm-lock.yaml.
  - [x] rush update to complete install within the monorepo. This may yield a few more missing peer dependencies which will be dealt with later.
  - [x] Commit with the message "👷 build(excalidraw): place under rushstack"
  - [ ] test:
    - [x] Integrate with repo prettier
    - [x] Integrate with repo typescript
    - [x] Integrate with repo eslint
    - [ ] Integrate with repo testing
