# vault

Monorepository managed with _Rush_.

All packages are unpublished and each share the same name as the open source package on
which it is based and of which it is a pretty recent integrated version.

## Installing

### Installing _Rush_

```bash
npm i -g @microsoft/rush
```

### Installing the repository

#### Before anything after cloning the repository

Whether you intend to use the integrated _Verdaccio_ repository or not, edit `/common/config/rush/.npmrc`
to point to the _Npm_ public repository.

#### Working with the _Npm_ public repository

Read first [Before anything after cloning the repository](#before-anything-after-cloning-the-repository).

If you can rely on only the _Npm_ public repository, then commit the above file once and for all,
then run `rush install` and you are set.

#### Working with an integrated _Verdaccio_ repository

Read first [Before anything after cloning the repository](#before-anything-after-cloning-the-repository).

If you want to use _Verdaccio_, run `rush update-autoinstaller --name rush-verdaccio`, then revert
`/common/config/rush/.npmrc` to its committed version and run in one terminal `rush verdaccio` and in
another `rush install` and you are set.
