import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_cases_sections_shot_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum_cases_star_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum_cases_chapter_visual_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum_cases_closing_shot_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum__cases_v_version_sections_shot_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum__cases_v_version_star_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum__cases_v_version_chapter_visual_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum__cases_v_version_closing_shot_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum_home_how_rows_visual_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum_home_about_extra_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum__home_v_version_how_rows_visual_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum__home_v_version_about_extra_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum_orbit_tiles_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';
  ALTER TYPE "public"."enum__orbit_v_version_tiles_wire" ADD VALUE 'adidas-member' BEFORE 'athliq-today';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cases_sections" ALTER COLUMN "shot_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum_cases_sections_shot_wire";
  CREATE TYPE "public"."enum_cases_sections_shot_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "cases_sections" ALTER COLUMN "shot_wire" SET DATA TYPE "public"."enum_cases_sections_shot_wire" USING "shot_wire"::"public"."enum_cases_sections_shot_wire";
  ALTER TABLE "cases" ALTER COLUMN "star_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum_cases_star_wire";
  CREATE TYPE "public"."enum_cases_star_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "cases" ALTER COLUMN "star_wire" SET DATA TYPE "public"."enum_cases_star_wire" USING "star_wire"::"public"."enum_cases_star_wire";
  ALTER TABLE "cases" ALTER COLUMN "chapter_visual_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum_cases_chapter_visual_wire";
  CREATE TYPE "public"."enum_cases_chapter_visual_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "cases" ALTER COLUMN "chapter_visual_wire" SET DATA TYPE "public"."enum_cases_chapter_visual_wire" USING "chapter_visual_wire"::"public"."enum_cases_chapter_visual_wire";
  ALTER TABLE "cases" ALTER COLUMN "closing_shot_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum_cases_closing_shot_wire";
  CREATE TYPE "public"."enum_cases_closing_shot_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "cases" ALTER COLUMN "closing_shot_wire" SET DATA TYPE "public"."enum_cases_closing_shot_wire" USING "closing_shot_wire"::"public"."enum_cases_closing_shot_wire";
  ALTER TABLE "_cases_v_version_sections" ALTER COLUMN "shot_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum__cases_v_version_sections_shot_wire";
  CREATE TYPE "public"."enum__cases_v_version_sections_shot_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "_cases_v_version_sections" ALTER COLUMN "shot_wire" SET DATA TYPE "public"."enum__cases_v_version_sections_shot_wire" USING "shot_wire"::"public"."enum__cases_v_version_sections_shot_wire";
  ALTER TABLE "_cases_v" ALTER COLUMN "version_star_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum__cases_v_version_star_wire";
  CREATE TYPE "public"."enum__cases_v_version_star_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "_cases_v" ALTER COLUMN "version_star_wire" SET DATA TYPE "public"."enum__cases_v_version_star_wire" USING "version_star_wire"::"public"."enum__cases_v_version_star_wire";
  ALTER TABLE "_cases_v" ALTER COLUMN "version_chapter_visual_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum__cases_v_version_chapter_visual_wire";
  CREATE TYPE "public"."enum__cases_v_version_chapter_visual_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "_cases_v" ALTER COLUMN "version_chapter_visual_wire" SET DATA TYPE "public"."enum__cases_v_version_chapter_visual_wire" USING "version_chapter_visual_wire"::"public"."enum__cases_v_version_chapter_visual_wire";
  ALTER TABLE "_cases_v" ALTER COLUMN "version_closing_shot_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum__cases_v_version_closing_shot_wire";
  CREATE TYPE "public"."enum__cases_v_version_closing_shot_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "_cases_v" ALTER COLUMN "version_closing_shot_wire" SET DATA TYPE "public"."enum__cases_v_version_closing_shot_wire" USING "version_closing_shot_wire"::"public"."enum__cases_v_version_closing_shot_wire";
  ALTER TABLE "home_how_rows" ALTER COLUMN "visual_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum_home_how_rows_visual_wire";
  CREATE TYPE "public"."enum_home_how_rows_visual_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "home_how_rows" ALTER COLUMN "visual_wire" SET DATA TYPE "public"."enum_home_how_rows_visual_wire" USING "visual_wire"::"public"."enum_home_how_rows_visual_wire";
  ALTER TABLE "home" ALTER COLUMN "about_extra_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum_home_about_extra_wire";
  CREATE TYPE "public"."enum_home_about_extra_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "home" ALTER COLUMN "about_extra_wire" SET DATA TYPE "public"."enum_home_about_extra_wire" USING "about_extra_wire"::"public"."enum_home_about_extra_wire";
  ALTER TABLE "_home_v_version_how_rows" ALTER COLUMN "visual_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum__home_v_version_how_rows_visual_wire";
  CREATE TYPE "public"."enum__home_v_version_how_rows_visual_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "_home_v_version_how_rows" ALTER COLUMN "visual_wire" SET DATA TYPE "public"."enum__home_v_version_how_rows_visual_wire" USING "visual_wire"::"public"."enum__home_v_version_how_rows_visual_wire";
  ALTER TABLE "_home_v" ALTER COLUMN "version_about_extra_wire" SET DATA TYPE text;
  DROP TYPE "public"."enum__home_v_version_about_extra_wire";
  CREATE TYPE "public"."enum__home_v_version_about_extra_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "_home_v" ALTER COLUMN "version_about_extra_wire" SET DATA TYPE "public"."enum__home_v_version_about_extra_wire" USING "version_about_extra_wire"::"public"."enum__home_v_version_about_extra_wire";
  ALTER TABLE "orbit_tiles" ALTER COLUMN "wire" SET DATA TYPE text;
  DROP TYPE "public"."enum_orbit_tiles_wire";
  CREATE TYPE "public"."enum_orbit_tiles_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "orbit_tiles" ALTER COLUMN "wire" SET DATA TYPE "public"."enum_orbit_tiles_wire" USING "wire"::"public"."enum_orbit_tiles_wire";
  ALTER TABLE "_orbit_v_version_tiles" ALTER COLUMN "wire" SET DATA TYPE text;
  DROP TYPE "public"."enum__orbit_v_version_tiles_wire";
  CREATE TYPE "public"."enum__orbit_v_version_tiles_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  ALTER TABLE "_orbit_v_version_tiles" ALTER COLUMN "wire" SET DATA TYPE "public"."enum__orbit_v_version_tiles_wire" USING "wire"::"public"."enum__orbit_v_version_tiles_wire";`)
}
