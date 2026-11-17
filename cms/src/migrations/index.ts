import * as migration_20261103_092855_initial from './20261103_092855_initial';
import * as migration_20261103_111930_s3_object_key from './20261103_111930_s3_object_key';
import * as migration_20261117_140131_add_member_wire from './20261117_140131_add_member_wire';

export const migrations = [
  {
    up: migration_20261103_092855_initial.up,
    down: migration_20261103_092855_initial.down,
    name: '20261103_092855_initial',
  },
  {
    up: migration_20261103_111930_s3_object_key.up,
    down: migration_20261103_111930_s3_object_key.down,
    name: '20261103_111930_s3_object_key',
  },
  {
    up: migration_20261117_140131_add_member_wire.up,
    down: migration_20261117_140131_add_member_wire.down,
    name: '20261117_140131_add_member_wire'
  },
];
