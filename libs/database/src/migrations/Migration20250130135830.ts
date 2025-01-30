import { Migration } from '@mikro-orm/migrations';

export class Migration20250130135830 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table "muscle_group_entity" ("id" serial primary key, "public_id" uuid not null, "type" text check ("type" in ('Glutes', 'Back', 'Chest', 'Shoulders', 'Quadriceps', 'Hamstrings', 'Calves', 'Triceps', 'Biceps', 'Abs', 'Grip and Forearms')) not null);`,
    );
    this.addSql(
      `alter table "muscle_group_entity" add constraint "muscle_group_entity_public_id_unique" unique ("public_id");`,
    );

    this.addSql(
      `create table "exercise_entity" ("id" serial primary key, "public_id" uuid not null, "name" varchar(255) not null, "difficulty" text check ("difficulty" in ('Beginner', 'Intermediate', 'Advanced')) not null, "force_type" text check ("force_type" in ('Push', 'Pull', 'Static')) not null, "exercise_type" text check ("exercise_type" in ('Compound', 'Functional', 'Isolation', 'Plyometric')) not null, "mechanic" text check ("mechanic" in ('DynamicBodyWeight', 'DynamicOptionalWeight', 'DynamicRequiredWeight', 'DynamicAssistedWeight', 'StaticTimeBased')) not null, "equipment" text check ("equipment" in ('Barbell', 'Bench', 'Box', 'Cable', 'Dumbbell', 'Kettlebell', 'Machine', 'Medicine Ball', 'Plate', 'ResistanceBand', 'Sled', 'Other')) not null, "muscle_group_id" int not null, "primary_muscles" text[] not null, "secondary_muscles" text[] not null);`,
    );
    this.addSql(
      `alter table "exercise_entity" add constraint "exercise_entity_public_id_unique" unique ("public_id");`,
    );

    this.addSql(
      `alter table "exercise_entity" add constraint "exercise_entity_muscle_group_id_foreign" foreign key ("muscle_group_id") references "muscle_group_entity" ("id") on update cascade;`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table "exercise_entity" drop constraint "exercise_entity_muscle_group_id_foreign";`,
    );

    this.addSql(`drop table if exists "muscle_group_entity" cascade;`);

    this.addSql(`drop table if exists "exercise_entity" cascade;`);
  }
}
