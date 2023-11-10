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
- [ ] Start integration of X into Rush stack:
  - [x] Replace or inject global prettier (see @organon/prettier-config/README.md), then apply it to all files (`prettier . --write`).
  - [ ] Commit all with the message: 🎨 style(excalidraw): apply repo prettier rules to all
