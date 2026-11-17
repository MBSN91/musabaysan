import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_cases_star_notes_side" AS ENUM('r', 'l');
  CREATE TYPE "public"."enum_cases_sections_shot_kind" AS ENUM('none', 'image', 'device', 'slot');
  CREATE TYPE "public"."enum_cases_sections_shot_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum_cases_sections_shot_ratio" AS ENUM('3 / 2', '16 / 9', '16 / 10', '4 / 3', '1 / 1', '9 / 16');
  CREATE TYPE "public"."enum_cases_colour" AS ENUM('lime', 'green', 'light');
  CREATE TYPE "public"."enum_cases_star_kind" AS ENUM('device', 'comp');
  CREATE TYPE "public"."enum_cases_star_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum_cases_chapter_visual_kind" AS ENUM('screens', 'wire', 'image');
  CREATE TYPE "public"."enum_cases_chapter_visual_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum_cases_closing_shot_kind" AS ENUM('none', 'image', 'device', 'slot');
  CREATE TYPE "public"."enum_cases_closing_shot_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum_cases_closing_shot_ratio" AS ENUM('3 / 2', '16 / 9', '16 / 10', '4 / 3', '1 / 1', '9 / 16');
  CREATE TYPE "public"."enum_cases_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__cases_v_version_star_notes_side" AS ENUM('r', 'l');
  CREATE TYPE "public"."enum__cases_v_version_sections_shot_kind" AS ENUM('none', 'image', 'device', 'slot');
  CREATE TYPE "public"."enum__cases_v_version_sections_shot_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum__cases_v_version_sections_shot_ratio" AS ENUM('3 / 2', '16 / 9', '16 / 10', '4 / 3', '1 / 1', '9 / 16');
  CREATE TYPE "public"."enum__cases_v_version_colour" AS ENUM('lime', 'green', 'light');
  CREATE TYPE "public"."enum__cases_v_version_star_kind" AS ENUM('device', 'comp');
  CREATE TYPE "public"."enum__cases_v_version_star_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum__cases_v_version_chapter_visual_kind" AS ENUM('screens', 'wire', 'image');
  CREATE TYPE "public"."enum__cases_v_version_chapter_visual_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum__cases_v_version_closing_shot_kind" AS ENUM('none', 'image', 'device', 'slot');
  CREATE TYPE "public"."enum__cases_v_version_closing_shot_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum__cases_v_version_closing_shot_ratio" AS ENUM('3 / 2', '16 / 9', '16 / 10', '4 / 3', '1 / 1', '9 / 16');
  CREATE TYPE "public"."enum__cases_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_home_how_rows_visual_kind" AS ENUM('none', 'image', 'device', 'phone', 'slot');
  CREATE TYPE "public"."enum_home_how_rows_visual_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum_home_how_rows_visual_ratio" AS ENUM('3 / 2', '16 / 9', '16 / 10', '4 / 3', '1 / 1', '9 / 16');
  CREATE TYPE "public"."enum_home_about_extra_kind" AS ENUM('none', 'image', 'device', 'slot');
  CREATE TYPE "public"."enum_home_about_extra_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum_home_about_extra_ratio" AS ENUM('3 / 2', '16 / 9', '16 / 10', '4 / 3', '1 / 1', '9 / 16');
  CREATE TYPE "public"."enum_home_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__home_v_version_how_rows_visual_kind" AS ENUM('none', 'image', 'device', 'phone', 'slot');
  CREATE TYPE "public"."enum__home_v_version_how_rows_visual_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum__home_v_version_how_rows_visual_ratio" AS ENUM('3 / 2', '16 / 9', '16 / 10', '4 / 3', '1 / 1', '9 / 16');
  CREATE TYPE "public"."enum__home_v_version_about_extra_kind" AS ENUM('none', 'image', 'device', 'slot');
  CREATE TYPE "public"."enum__home_v_version_about_extra_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum__home_v_version_about_extra_ratio" AS ENUM('3 / 2', '16 / 9', '16 / 10', '4 / 3', '1 / 1', '9 / 16');
  CREATE TYPE "public"."enum__home_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_orbit_tiles_kind" AS ENUM('phone', 'video', 'site', 'comp', 'wire');
  CREATE TYPE "public"."enum_orbit_tiles_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum_orbit_tiles_ring" AS ENUM('outer', 'inner');
  CREATE TYPE "public"."enum_orbit_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__orbit_v_version_tiles_kind" AS ENUM('phone', 'video', 'site', 'comp', 'wire');
  CREATE TYPE "public"."enum__orbit_v_version_tiles_wire" AS ENUM('adidas-bulkscan', 'athliq-today', 'athliq-diary', 'athliq-player', 'athliq-recovery');
  CREATE TYPE "public"."enum__orbit_v_version_tiles_ring" AS ENUM('outer', 'inner');
  CREATE TYPE "public"."enum__orbit_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_contact_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__contact_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "cases_facts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "cases_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "cases_star_notes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"x" numeric,
  	"y" numeric,
  	"side" "enum_cases_star_notes_side" DEFAULT 'r'
  );
  
  CREATE TABLE "cases_chapter_visual_screens" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar
  );
  
  CREATE TABLE "cases_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"shot_kind" "enum_cases_sections_shot_kind" DEFAULT 'none',
  	"shot_image_id" integer,
  	"shot_wire" "enum_cases_sections_shot_wire",
  	"shot_alt" varchar,
  	"shot_slot_label" varchar,
  	"shot_spec" varchar,
  	"shot_ratio" "enum_cases_sections_shot_ratio" DEFAULT '3 / 2',
  	"shot_blur" boolean
  );
  
  CREATE TABLE "cases" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"name" varchar,
  	"slug" varchar,
  	"colour" "enum_cases_colour" DEFAULT 'lime',
  	"title" varchar,
  	"summary" varchar,
  	"mast" varchar,
  	"struck" varchar,
  	"cover_title" varchar,
  	"star_kind" "enum_cases_star_kind" DEFAULT 'device',
  	"star_wire" "enum_cases_star_wire",
  	"star_image_id" integer,
  	"star_alt" varchar,
  	"star_caption" varchar,
  	"chapter_body" varchar,
  	"chapter_visual_kind" "enum_cases_chapter_visual_kind" DEFAULT 'screens',
  	"chapter_visual_wire" "enum_cases_chapter_visual_wire",
  	"chapter_visual_image_id" integer,
  	"chapter_visual_alt" varchar,
  	"chapter_visual_note" varchar,
  	"closing_heading" varchar,
  	"closing_body" varchar,
  	"closing_shot_kind" "enum_cases_closing_shot_kind" DEFAULT 'none',
  	"closing_shot_image_id" integer,
  	"closing_shot_wire" "enum_cases_closing_shot_wire",
  	"closing_shot_alt" varchar,
  	"closing_shot_slot_label" varchar,
  	"closing_shot_spec" varchar,
  	"closing_shot_ratio" "enum_cases_closing_shot_ratio" DEFAULT '3 / 2',
  	"closing_shot_blur" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_cases_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_cases_v_version_facts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cases_v_version_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cases_v_version_star_notes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"x" numeric,
  	"y" numeric,
  	"side" "enum__cases_v_version_star_notes_side" DEFAULT 'r',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cases_v_version_chapter_visual_screens" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cases_v_version_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"shot_kind" "enum__cases_v_version_sections_shot_kind" DEFAULT 'none',
  	"shot_image_id" integer,
  	"shot_wire" "enum__cases_v_version_sections_shot_wire",
  	"shot_alt" varchar,
  	"shot_slot_label" varchar,
  	"shot_spec" varchar,
  	"shot_ratio" "enum__cases_v_version_sections_shot_ratio" DEFAULT '3 / 2',
  	"shot_blur" boolean,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cases_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_colour" "enum__cases_v_version_colour" DEFAULT 'lime',
  	"version_title" varchar,
  	"version_summary" varchar,
  	"version_mast" varchar,
  	"version_struck" varchar,
  	"version_cover_title" varchar,
  	"version_star_kind" "enum__cases_v_version_star_kind" DEFAULT 'device',
  	"version_star_wire" "enum__cases_v_version_star_wire",
  	"version_star_image_id" integer,
  	"version_star_alt" varchar,
  	"version_star_caption" varchar,
  	"version_chapter_body" varchar,
  	"version_chapter_visual_kind" "enum__cases_v_version_chapter_visual_kind" DEFAULT 'screens',
  	"version_chapter_visual_wire" "enum__cases_v_version_chapter_visual_wire",
  	"version_chapter_visual_image_id" integer,
  	"version_chapter_visual_alt" varchar,
  	"version_chapter_visual_note" varchar,
  	"version_closing_heading" varchar,
  	"version_closing_body" varchar,
  	"version_closing_shot_kind" "enum__cases_v_version_closing_shot_kind" DEFAULT 'none',
  	"version_closing_shot_image_id" integer,
  	"version_closing_shot_wire" "enum__cases_v_version_closing_shot_wire",
  	"version_closing_shot_alt" varchar,
  	"version_closing_shot_slot_label" varchar,
  	"version_closing_shot_spec" varchar,
  	"version_closing_shot_ratio" "enum__cases_v_version_closing_shot_ratio" DEFAULT '3 / 2',
  	"version_closing_shot_blur" boolean,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__cases_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_web_url" varchar,
  	"sizes_web_width" numeric,
  	"sizes_web_height" numeric,
  	"sizes_web_mime_type" varchar,
  	"sizes_web_filesize" numeric,
  	"sizes_web_filename" varchar,
  	"sizes_phone_url" varchar,
  	"sizes_phone_width" numeric,
  	"sizes_phone_height" numeric,
  	"sizes_phone_mime_type" varchar,
  	"sizes_phone_filesize" numeric,
  	"sizes_phone_filename" varchar,
  	"sizes_phone2x_url" varchar,
  	"sizes_phone2x_width" numeric,
  	"sizes_phone2x_height" numeric,
  	"sizes_phone2x_mime_type" varchar,
  	"sizes_phone2x_filesize" numeric,
  	"sizes_phone2x_filename" varchar
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"enable_a_p_i_key" boolean,
  	"api_key" varchar,
  	"api_key_index" varchar,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"cases_id" integer,
  	"media_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "home_ticker" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "home_sites_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"alt" varchar
  );
  
  CREATE TABLE "home_how_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"word" varchar,
  	"text" varchar,
  	"visual_kind" "enum_home_how_rows_visual_kind" DEFAULT 'none',
  	"visual_image_id" integer,
  	"visual_wire" "enum_home_how_rows_visual_wire",
  	"visual_alt" varchar,
  	"visual_slot_label" varchar,
  	"visual_spec" varchar,
  	"visual_ratio" "enum_home_how_rows_visual_ratio" DEFAULT '3 / 2',
  	"visual_blur" boolean
  );
  
  CREATE TABLE "home_years_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"lead" varchar,
  	"cta" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"statement" varchar,
  	"work_bar_label" varchar,
  	"work_bar_meta" varchar,
  	"work_title" varchar,
  	"sites_title" varchar,
  	"sites_text" varchar,
  	"how_bar_label" varchar,
  	"how_bar_meta" varchar,
  	"how_title" varchar,
  	"years_bar_label" varchar,
  	"years_bar_meta" varchar,
  	"years_title" varchar,
  	"about_bar_label" varchar,
  	"about_bar_meta" varchar,
  	"about_title" varchar,
  	"about_portrait_id" integer,
  	"about_portrait_alt" varchar,
  	"about_paragraphs" varchar,
  	"about_extra_kind" "enum_home_about_extra_kind" DEFAULT 'none',
  	"about_extra_image_id" integer,
  	"about_extra_wire" "enum_home_about_extra_wire",
  	"about_extra_alt" varchar,
  	"about_extra_slot_label" varchar,
  	"about_extra_spec" varchar,
  	"about_extra_ratio" "enum_home_about_extra_ratio" DEFAULT '3 / 2',
  	"about_extra_blur" boolean,
  	"_status" "enum_home_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_home_v_version_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_ticker" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_sites_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar,
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_how_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"word" varchar,
  	"text" varchar,
  	"visual_kind" "enum__home_v_version_how_rows_visual_kind" DEFAULT 'none',
  	"visual_image_id" integer,
  	"visual_wire" "enum__home_v_version_how_rows_visual_wire",
  	"visual_alt" varchar,
  	"visual_slot_label" varchar,
  	"visual_spec" varchar,
  	"visual_ratio" "enum__home_v_version_how_rows_visual_ratio" DEFAULT '3 / 2',
  	"visual_blur" boolean,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_years_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_lead" varchar,
  	"version_cta" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_statement" varchar,
  	"version_work_bar_label" varchar,
  	"version_work_bar_meta" varchar,
  	"version_work_title" varchar,
  	"version_sites_title" varchar,
  	"version_sites_text" varchar,
  	"version_how_bar_label" varchar,
  	"version_how_bar_meta" varchar,
  	"version_how_title" varchar,
  	"version_years_bar_label" varchar,
  	"version_years_bar_meta" varchar,
  	"version_years_title" varchar,
  	"version_about_bar_label" varchar,
  	"version_about_bar_meta" varchar,
  	"version_about_title" varchar,
  	"version_about_portrait_id" integer,
  	"version_about_portrait_alt" varchar,
  	"version_about_paragraphs" varchar,
  	"version_about_extra_kind" "enum__home_v_version_about_extra_kind" DEFAULT 'none',
  	"version_about_extra_image_id" integer,
  	"version_about_extra_wire" "enum__home_v_version_about_extra_wire",
  	"version_about_extra_alt" varchar,
  	"version_about_extra_slot_label" varchar,
  	"version_about_extra_spec" varchar,
  	"version_about_extra_ratio" "enum__home_v_version_about_extra_ratio" DEFAULT '3 / 2',
  	"version_about_extra_blur" boolean,
  	"version__status" "enum__home_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "orbit_tiles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" "enum_orbit_tiles_kind" DEFAULT 'site',
  	"label" varchar,
  	"file_id" integer,
  	"poster_id" integer,
  	"wire" "enum_orbit_tiles_wire",
  	"ring" "enum_orbit_tiles_ring" DEFAULT 'outer',
  	"angle" numeric DEFAULT 0,
  	"height" numeric DEFAULT 0,
  	"desktop_only" boolean
  );
  
  CREATE TABLE "orbit" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_status" "enum_orbit_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_orbit_v_version_tiles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kind" "enum__orbit_v_version_tiles_kind" DEFAULT 'site',
  	"label" varchar,
  	"file_id" integer,
  	"poster_id" integer,
  	"wire" "enum__orbit_v_version_tiles_wire",
  	"ring" "enum__orbit_v_version_tiles_ring" DEFAULT 'outer',
  	"angle" numeric DEFAULT 0,
  	"height" numeric DEFAULT 0,
  	"desktop_only" boolean,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_orbit_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version__status" "enum__orbit_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"bar_label" varchar,
  	"bar_meta" varchar,
  	"title" varchar,
  	"lead" varchar,
  	"email" varchar,
  	"linkedin" varchar,
  	"linkedin_label" varchar,
  	"based_in" varchar,
  	"small" varchar,
  	"_status" "enum_contact_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_contact_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_bar_label" varchar,
  	"version_bar_meta" varchar,
  	"version_title" varchar,
  	"version_lead" varchar,
  	"version_email" varchar,
  	"version_linkedin" varchar,
  	"version_linkedin_label" varchar,
  	"version_based_in" varchar,
  	"version_small" varchar,
  	"version__status" "enum__contact_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  ALTER TABLE "cases_facts" ADD CONSTRAINT "cases_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cases_lines" ADD CONSTRAINT "cases_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cases_star_notes" ADD CONSTRAINT "cases_star_notes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cases_chapter_visual_screens" ADD CONSTRAINT "cases_chapter_visual_screens_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cases_chapter_visual_screens" ADD CONSTRAINT "cases_chapter_visual_screens_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cases_sections" ADD CONSTRAINT "cases_sections_shot_image_id_media_id_fk" FOREIGN KEY ("shot_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cases_sections" ADD CONSTRAINT "cases_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cases" ADD CONSTRAINT "cases_star_image_id_media_id_fk" FOREIGN KEY ("star_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cases" ADD CONSTRAINT "cases_chapter_visual_image_id_media_id_fk" FOREIGN KEY ("chapter_visual_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cases" ADD CONSTRAINT "cases_closing_shot_image_id_media_id_fk" FOREIGN KEY ("closing_shot_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cases_v_version_facts" ADD CONSTRAINT "_cases_v_version_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cases_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cases_v_version_lines" ADD CONSTRAINT "_cases_v_version_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cases_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cases_v_version_star_notes" ADD CONSTRAINT "_cases_v_version_star_notes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cases_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cases_v_version_chapter_visual_screens" ADD CONSTRAINT "_cases_v_version_chapter_visual_screens_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cases_v_version_chapter_visual_screens" ADD CONSTRAINT "_cases_v_version_chapter_visual_screens_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cases_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cases_v_version_sections" ADD CONSTRAINT "_cases_v_version_sections_shot_image_id_media_id_fk" FOREIGN KEY ("shot_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cases_v_version_sections" ADD CONSTRAINT "_cases_v_version_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cases_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cases_v" ADD CONSTRAINT "_cases_v_parent_id_cases_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cases"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cases_v" ADD CONSTRAINT "_cases_v_version_star_image_id_media_id_fk" FOREIGN KEY ("version_star_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cases_v" ADD CONSTRAINT "_cases_v_version_chapter_visual_image_id_media_id_fk" FOREIGN KEY ("version_chapter_visual_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cases_v" ADD CONSTRAINT "_cases_v_version_closing_shot_image_id_media_id_fk" FOREIGN KEY ("version_closing_shot_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_cases_fk" FOREIGN KEY ("cases_id") REFERENCES "public"."cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_lines" ADD CONSTRAINT "home_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_ticker" ADD CONSTRAINT "home_ticker_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_sites_items" ADD CONSTRAINT "home_sites_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_sites_items" ADD CONSTRAINT "home_sites_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_how_rows" ADD CONSTRAINT "home_how_rows_visual_image_id_media_id_fk" FOREIGN KEY ("visual_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_how_rows" ADD CONSTRAINT "home_how_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_years_items" ADD CONSTRAINT "home_years_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_about_portrait_id_media_id_fk" FOREIGN KEY ("about_portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_about_extra_image_id_media_id_fk" FOREIGN KEY ("about_extra_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v_version_lines" ADD CONSTRAINT "_home_v_version_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_ticker" ADD CONSTRAINT "_home_v_version_ticker_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_sites_items" ADD CONSTRAINT "_home_v_version_sites_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v_version_sites_items" ADD CONSTRAINT "_home_v_version_sites_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_how_rows" ADD CONSTRAINT "_home_v_version_how_rows_visual_image_id_media_id_fk" FOREIGN KEY ("visual_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v_version_how_rows" ADD CONSTRAINT "_home_v_version_how_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_years_items" ADD CONSTRAINT "_home_v_version_years_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v" ADD CONSTRAINT "_home_v_version_about_portrait_id_media_id_fk" FOREIGN KEY ("version_about_portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v" ADD CONSTRAINT "_home_v_version_about_extra_image_id_media_id_fk" FOREIGN KEY ("version_about_extra_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "orbit_tiles" ADD CONSTRAINT "orbit_tiles_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "orbit_tiles" ADD CONSTRAINT "orbit_tiles_poster_id_media_id_fk" FOREIGN KEY ("poster_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "orbit_tiles" ADD CONSTRAINT "orbit_tiles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."orbit"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_orbit_v_version_tiles" ADD CONSTRAINT "_orbit_v_version_tiles_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_orbit_v_version_tiles" ADD CONSTRAINT "_orbit_v_version_tiles_poster_id_media_id_fk" FOREIGN KEY ("poster_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_orbit_v_version_tiles" ADD CONSTRAINT "_orbit_v_version_tiles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_orbit_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "cases_facts_order_idx" ON "cases_facts" USING btree ("_order");
  CREATE INDEX "cases_facts_parent_id_idx" ON "cases_facts" USING btree ("_parent_id");
  CREATE INDEX "cases_lines_order_idx" ON "cases_lines" USING btree ("_order");
  CREATE INDEX "cases_lines_parent_id_idx" ON "cases_lines" USING btree ("_parent_id");
  CREATE INDEX "cases_star_notes_order_idx" ON "cases_star_notes" USING btree ("_order");
  CREATE INDEX "cases_star_notes_parent_id_idx" ON "cases_star_notes" USING btree ("_parent_id");
  CREATE INDEX "cases_chapter_visual_screens_order_idx" ON "cases_chapter_visual_screens" USING btree ("_order");
  CREATE INDEX "cases_chapter_visual_screens_parent_id_idx" ON "cases_chapter_visual_screens" USING btree ("_parent_id");
  CREATE INDEX "cases_chapter_visual_screens_image_idx" ON "cases_chapter_visual_screens" USING btree ("image_id");
  CREATE INDEX "cases_sections_order_idx" ON "cases_sections" USING btree ("_order");
  CREATE INDEX "cases_sections_parent_id_idx" ON "cases_sections" USING btree ("_parent_id");
  CREATE INDEX "cases_sections_shot_shot_image_idx" ON "cases_sections" USING btree ("shot_image_id");
  CREATE INDEX "cases__order_idx" ON "cases" USING btree ("_order");
  CREATE UNIQUE INDEX "cases_slug_idx" ON "cases" USING btree ("slug");
  CREATE INDEX "cases_star_star_image_idx" ON "cases" USING btree ("star_image_id");
  CREATE INDEX "cases_chapter_visual_chapter_visual_image_idx" ON "cases" USING btree ("chapter_visual_image_id");
  CREATE INDEX "cases_closing_shot_closing_shot_image_idx" ON "cases" USING btree ("closing_shot_image_id");
  CREATE INDEX "cases_updated_at_idx" ON "cases" USING btree ("updated_at");
  CREATE INDEX "cases_created_at_idx" ON "cases" USING btree ("created_at");
  CREATE INDEX "cases__status_idx" ON "cases" USING btree ("_status");
  CREATE INDEX "_cases_v_version_facts_order_idx" ON "_cases_v_version_facts" USING btree ("_order");
  CREATE INDEX "_cases_v_version_facts_parent_id_idx" ON "_cases_v_version_facts" USING btree ("_parent_id");
  CREATE INDEX "_cases_v_version_lines_order_idx" ON "_cases_v_version_lines" USING btree ("_order");
  CREATE INDEX "_cases_v_version_lines_parent_id_idx" ON "_cases_v_version_lines" USING btree ("_parent_id");
  CREATE INDEX "_cases_v_version_star_notes_order_idx" ON "_cases_v_version_star_notes" USING btree ("_order");
  CREATE INDEX "_cases_v_version_star_notes_parent_id_idx" ON "_cases_v_version_star_notes" USING btree ("_parent_id");
  CREATE INDEX "_cases_v_version_chapter_visual_screens_order_idx" ON "_cases_v_version_chapter_visual_screens" USING btree ("_order");
  CREATE INDEX "_cases_v_version_chapter_visual_screens_parent_id_idx" ON "_cases_v_version_chapter_visual_screens" USING btree ("_parent_id");
  CREATE INDEX "_cases_v_version_chapter_visual_screens_image_idx" ON "_cases_v_version_chapter_visual_screens" USING btree ("image_id");
  CREATE INDEX "_cases_v_version_sections_order_idx" ON "_cases_v_version_sections" USING btree ("_order");
  CREATE INDEX "_cases_v_version_sections_parent_id_idx" ON "_cases_v_version_sections" USING btree ("_parent_id");
  CREATE INDEX "_cases_v_version_sections_shot_shot_image_idx" ON "_cases_v_version_sections" USING btree ("shot_image_id");
  CREATE INDEX "_cases_v_parent_idx" ON "_cases_v" USING btree ("parent_id");
  CREATE INDEX "_cases_v_version_version__order_idx" ON "_cases_v" USING btree ("version__order");
  CREATE INDEX "_cases_v_version_version_slug_idx" ON "_cases_v" USING btree ("version_slug");
  CREATE INDEX "_cases_v_version_star_version_star_image_idx" ON "_cases_v" USING btree ("version_star_image_id");
  CREATE INDEX "_cases_v_version_chapter_visual_version_chapter_visual_i_idx" ON "_cases_v" USING btree ("version_chapter_visual_image_id");
  CREATE INDEX "_cases_v_version_closing_shot_version_closing_shot_image_idx" ON "_cases_v" USING btree ("version_closing_shot_image_id");
  CREATE INDEX "_cases_v_version_version_updated_at_idx" ON "_cases_v" USING btree ("version_updated_at");
  CREATE INDEX "_cases_v_version_version_created_at_idx" ON "_cases_v" USING btree ("version_created_at");
  CREATE INDEX "_cases_v_version_version__status_idx" ON "_cases_v" USING btree ("version__status");
  CREATE INDEX "_cases_v_created_at_idx" ON "_cases_v" USING btree ("created_at");
  CREATE INDEX "_cases_v_updated_at_idx" ON "_cases_v" USING btree ("updated_at");
  CREATE INDEX "_cases_v_latest_idx" ON "_cases_v" USING btree ("latest");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_web_sizes_web_filename_idx" ON "media" USING btree ("sizes_web_filename");
  CREATE INDEX "media_sizes_phone_sizes_phone_filename_idx" ON "media" USING btree ("sizes_phone_filename");
  CREATE INDEX "media_sizes_phone2x_sizes_phone2x_filename_idx" ON "media" USING btree ("sizes_phone2x_filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_cases_id_idx" ON "payload_locked_documents_rels" USING btree ("cases_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "home_lines_order_idx" ON "home_lines" USING btree ("_order");
  CREATE INDEX "home_lines_parent_id_idx" ON "home_lines" USING btree ("_parent_id");
  CREATE INDEX "home_ticker_order_idx" ON "home_ticker" USING btree ("_order");
  CREATE INDEX "home_ticker_parent_id_idx" ON "home_ticker" USING btree ("_parent_id");
  CREATE INDEX "home_sites_items_order_idx" ON "home_sites_items" USING btree ("_order");
  CREATE INDEX "home_sites_items_parent_id_idx" ON "home_sites_items" USING btree ("_parent_id");
  CREATE INDEX "home_sites_items_image_idx" ON "home_sites_items" USING btree ("image_id");
  CREATE INDEX "home_how_rows_order_idx" ON "home_how_rows" USING btree ("_order");
  CREATE INDEX "home_how_rows_parent_id_idx" ON "home_how_rows" USING btree ("_parent_id");
  CREATE INDEX "home_how_rows_visual_visual_image_idx" ON "home_how_rows" USING btree ("visual_image_id");
  CREATE INDEX "home_years_items_order_idx" ON "home_years_items" USING btree ("_order");
  CREATE INDEX "home_years_items_parent_id_idx" ON "home_years_items" USING btree ("_parent_id");
  CREATE INDEX "home_about_about_portrait_idx" ON "home" USING btree ("about_portrait_id");
  CREATE INDEX "home_about_extra_about_extra_image_idx" ON "home" USING btree ("about_extra_image_id");
  CREATE INDEX "home__status_idx" ON "home" USING btree ("_status");
  CREATE INDEX "_home_v_version_lines_order_idx" ON "_home_v_version_lines" USING btree ("_order");
  CREATE INDEX "_home_v_version_lines_parent_id_idx" ON "_home_v_version_lines" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_ticker_order_idx" ON "_home_v_version_ticker" USING btree ("_order");
  CREATE INDEX "_home_v_version_ticker_parent_id_idx" ON "_home_v_version_ticker" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_sites_items_order_idx" ON "_home_v_version_sites_items" USING btree ("_order");
  CREATE INDEX "_home_v_version_sites_items_parent_id_idx" ON "_home_v_version_sites_items" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_sites_items_image_idx" ON "_home_v_version_sites_items" USING btree ("image_id");
  CREATE INDEX "_home_v_version_how_rows_order_idx" ON "_home_v_version_how_rows" USING btree ("_order");
  CREATE INDEX "_home_v_version_how_rows_parent_id_idx" ON "_home_v_version_how_rows" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_how_rows_visual_visual_image_idx" ON "_home_v_version_how_rows" USING btree ("visual_image_id");
  CREATE INDEX "_home_v_version_years_items_order_idx" ON "_home_v_version_years_items" USING btree ("_order");
  CREATE INDEX "_home_v_version_years_items_parent_id_idx" ON "_home_v_version_years_items" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_about_version_about_portrait_idx" ON "_home_v" USING btree ("version_about_portrait_id");
  CREATE INDEX "_home_v_version_about_extra_version_about_extra_image_idx" ON "_home_v" USING btree ("version_about_extra_image_id");
  CREATE INDEX "_home_v_version_version__status_idx" ON "_home_v" USING btree ("version__status");
  CREATE INDEX "_home_v_created_at_idx" ON "_home_v" USING btree ("created_at");
  CREATE INDEX "_home_v_updated_at_idx" ON "_home_v" USING btree ("updated_at");
  CREATE INDEX "_home_v_latest_idx" ON "_home_v" USING btree ("latest");
  CREATE INDEX "orbit_tiles_order_idx" ON "orbit_tiles" USING btree ("_order");
  CREATE INDEX "orbit_tiles_parent_id_idx" ON "orbit_tiles" USING btree ("_parent_id");
  CREATE INDEX "orbit_tiles_file_idx" ON "orbit_tiles" USING btree ("file_id");
  CREATE INDEX "orbit_tiles_poster_idx" ON "orbit_tiles" USING btree ("poster_id");
  CREATE INDEX "orbit__status_idx" ON "orbit" USING btree ("_status");
  CREATE INDEX "_orbit_v_version_tiles_order_idx" ON "_orbit_v_version_tiles" USING btree ("_order");
  CREATE INDEX "_orbit_v_version_tiles_parent_id_idx" ON "_orbit_v_version_tiles" USING btree ("_parent_id");
  CREATE INDEX "_orbit_v_version_tiles_file_idx" ON "_orbit_v_version_tiles" USING btree ("file_id");
  CREATE INDEX "_orbit_v_version_tiles_poster_idx" ON "_orbit_v_version_tiles" USING btree ("poster_id");
  CREATE INDEX "_orbit_v_version_version__status_idx" ON "_orbit_v" USING btree ("version__status");
  CREATE INDEX "_orbit_v_created_at_idx" ON "_orbit_v" USING btree ("created_at");
  CREATE INDEX "_orbit_v_updated_at_idx" ON "_orbit_v" USING btree ("updated_at");
  CREATE INDEX "_orbit_v_latest_idx" ON "_orbit_v" USING btree ("latest");
  CREATE INDEX "contact__status_idx" ON "contact" USING btree ("_status");
  CREATE INDEX "_contact_v_version_version__status_idx" ON "_contact_v" USING btree ("version__status");
  CREATE INDEX "_contact_v_created_at_idx" ON "_contact_v" USING btree ("created_at");
  CREATE INDEX "_contact_v_updated_at_idx" ON "_contact_v" USING btree ("updated_at");
  CREATE INDEX "_contact_v_latest_idx" ON "_contact_v" USING btree ("latest");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "cases_facts" CASCADE;
  DROP TABLE "cases_lines" CASCADE;
  DROP TABLE "cases_star_notes" CASCADE;
  DROP TABLE "cases_chapter_visual_screens" CASCADE;
  DROP TABLE "cases_sections" CASCADE;
  DROP TABLE "cases" CASCADE;
  DROP TABLE "_cases_v_version_facts" CASCADE;
  DROP TABLE "_cases_v_version_lines" CASCADE;
  DROP TABLE "_cases_v_version_star_notes" CASCADE;
  DROP TABLE "_cases_v_version_chapter_visual_screens" CASCADE;
  DROP TABLE "_cases_v_version_sections" CASCADE;
  DROP TABLE "_cases_v" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_lines" CASCADE;
  DROP TABLE "home_ticker" CASCADE;
  DROP TABLE "home_sites_items" CASCADE;
  DROP TABLE "home_how_rows" CASCADE;
  DROP TABLE "home_years_items" CASCADE;
  DROP TABLE "home" CASCADE;
  DROP TABLE "_home_v_version_lines" CASCADE;
  DROP TABLE "_home_v_version_ticker" CASCADE;
  DROP TABLE "_home_v_version_sites_items" CASCADE;
  DROP TABLE "_home_v_version_how_rows" CASCADE;
  DROP TABLE "_home_v_version_years_items" CASCADE;
  DROP TABLE "_home_v" CASCADE;
  DROP TABLE "orbit_tiles" CASCADE;
  DROP TABLE "orbit" CASCADE;
  DROP TABLE "_orbit_v_version_tiles" CASCADE;
  DROP TABLE "_orbit_v" CASCADE;
  DROP TABLE "contact" CASCADE;
  DROP TABLE "_contact_v" CASCADE;
  DROP TYPE "public"."enum_cases_star_notes_side";
  DROP TYPE "public"."enum_cases_sections_shot_kind";
  DROP TYPE "public"."enum_cases_sections_shot_wire";
  DROP TYPE "public"."enum_cases_sections_shot_ratio";
  DROP TYPE "public"."enum_cases_colour";
  DROP TYPE "public"."enum_cases_star_kind";
  DROP TYPE "public"."enum_cases_star_wire";
  DROP TYPE "public"."enum_cases_chapter_visual_kind";
  DROP TYPE "public"."enum_cases_chapter_visual_wire";
  DROP TYPE "public"."enum_cases_closing_shot_kind";
  DROP TYPE "public"."enum_cases_closing_shot_wire";
  DROP TYPE "public"."enum_cases_closing_shot_ratio";
  DROP TYPE "public"."enum_cases_status";
  DROP TYPE "public"."enum__cases_v_version_star_notes_side";
  DROP TYPE "public"."enum__cases_v_version_sections_shot_kind";
  DROP TYPE "public"."enum__cases_v_version_sections_shot_wire";
  DROP TYPE "public"."enum__cases_v_version_sections_shot_ratio";
  DROP TYPE "public"."enum__cases_v_version_colour";
  DROP TYPE "public"."enum__cases_v_version_star_kind";
  DROP TYPE "public"."enum__cases_v_version_star_wire";
  DROP TYPE "public"."enum__cases_v_version_chapter_visual_kind";
  DROP TYPE "public"."enum__cases_v_version_chapter_visual_wire";
  DROP TYPE "public"."enum__cases_v_version_closing_shot_kind";
  DROP TYPE "public"."enum__cases_v_version_closing_shot_wire";
  DROP TYPE "public"."enum__cases_v_version_closing_shot_ratio";
  DROP TYPE "public"."enum__cases_v_version_status";
  DROP TYPE "public"."enum_home_how_rows_visual_kind";
  DROP TYPE "public"."enum_home_how_rows_visual_wire";
  DROP TYPE "public"."enum_home_how_rows_visual_ratio";
  DROP TYPE "public"."enum_home_about_extra_kind";
  DROP TYPE "public"."enum_home_about_extra_wire";
  DROP TYPE "public"."enum_home_about_extra_ratio";
  DROP TYPE "public"."enum_home_status";
  DROP TYPE "public"."enum__home_v_version_how_rows_visual_kind";
  DROP TYPE "public"."enum__home_v_version_how_rows_visual_wire";
  DROP TYPE "public"."enum__home_v_version_how_rows_visual_ratio";
  DROP TYPE "public"."enum__home_v_version_about_extra_kind";
  DROP TYPE "public"."enum__home_v_version_about_extra_wire";
  DROP TYPE "public"."enum__home_v_version_about_extra_ratio";
  DROP TYPE "public"."enum__home_v_version_status";
  DROP TYPE "public"."enum_orbit_tiles_kind";
  DROP TYPE "public"."enum_orbit_tiles_wire";
  DROP TYPE "public"."enum_orbit_tiles_ring";
  DROP TYPE "public"."enum_orbit_status";
  DROP TYPE "public"."enum__orbit_v_version_tiles_kind";
  DROP TYPE "public"."enum__orbit_v_version_tiles_wire";
  DROP TYPE "public"."enum__orbit_v_version_tiles_ring";
  DROP TYPE "public"."enum__orbit_v_version_status";
  DROP TYPE "public"."enum_contact_status";
  DROP TYPE "public"."enum__contact_v_version_status";`)
}
