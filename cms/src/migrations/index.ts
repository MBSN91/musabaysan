import * as migration_20261103_092855_initial from './20261103_092855_initial';
import * as migration_20261103_111930_s3_object_key from './20261103_111930_s3_object_key';

export const migrations = [
  {
    up: migration_20261103_092855_initial.up,
    down: migration_20261103_092855_initial.down,
    name: '20261103_092855_initial',
  },
  {
    up: migration_20261103_111930_s3_object_key.up,
    down: migration_20261103_111930_s3_object_key.down,
    name: '20261103_111930_s3_object_key'
  },
];
