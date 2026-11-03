import * as migration_20261103_092855_initial from './20261103_092855_initial';

export const migrations = [
  {
    up: migration_20261103_092855_initial.up,
    down: migration_20261103_092855_initial.down,
    name: '20261103_092855_initial'
  },
];
