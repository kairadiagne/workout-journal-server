# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Build
npm run build:api        # build workout-journal-api
npm run build:admin      # build workout-journal-admin

# Run (dev)
npm run start:api:dev
npm run start:admin:dev

# Lint & format
npm run lint             # eslint --fix across all apps and libs
npm run format           # prettier --write across all apps and libs

# Type-check (without emitting)
npx tsc -p tsconfig.build.json --noEmit

# Test
npm test                          # all unit tests
npm run test:watch                # watch mode
npm run test:cov                  # coverage
npm run test:e2e                  # e2e (API app only)

# Run a single test file
npx jest path/to/file.spec.ts

# MikroORM CLI (migrations / seeding)
npx mikro-orm migration:create
npx mikro-orm migration:up
npx mikro-orm seeder:run
```

## Architecture

This is a **NestJS monorepo** (via `nest-cli.json`) with two applications and two shared libraries.

### Apps

| App | Port env var | Purpose |
|-----|-------------|---------|
| `apps/workout-journal-api` | `PORT` | Public REST API for the workout journal |
| `apps/workout-journal-admin` | `PORT` | Internal admin app; currently only exposes `POST /admin/importexercises` |

### Libraries

**`libs/exercises`** (`@workoutjournal/exercises`)
- Domain layer: entities (`ExerciseEntity`, `MuscleGroupEntity`), enums, and **repository interfaces** (`IExercisesRepository`, `IMuscleGroupRepository`).
- Entities are defined with MikroORM v7's `defineEntity` + `p` property-builder API (not decorators).
- Consumers depend on the interfaces via Symbol tokens (`EXERCISES_REPOSITORY`, `MUSCLE_GROUP_REPOSITORY`), never on concrete implementations.

**`libs/database`** (`@workoutjournal/database`)
- Infrastructure layer: MikroORM PostgreSQL config, concrete repository implementations, migrations, and seeders.
- Exports `DatabaseModule`, which registers `MikroOrmModule.forRoot()` and provides the two repository implementations behind their Symbol tokens.
- Apps import `DatabaseModule` to get database access; they never instantiate repositories directly.

### Dependency flow

```
apps/workout-journal-api
  └── DatabaseModule  (provides repositories)
  └── ExercisesModule (NestJS wrapper, currently a placeholder)

apps/workout-journal-admin
  └── DatabaseModule
  └── ExercisesModule
```

### Repository pattern

Interfaces live in `libs/exercises`, implementations in `libs/database`. Injection uses Symbols:

```ts
// Inject
@Inject(EXERCISES_REPOSITORY)
private readonly repo: IExercisesRepository
```

When adding a new repository, define the interface + Symbol in `libs/exercises`, add the concrete class in `libs/database/src/repositories/`, and register it in `DatabaseModule`.

### Key conventions

- **Global `ValidationPipe`** (`whitelist`, `forbidNonWhitelisted`, `transform`) and **`GlobalExceptionFilter`** are registered in both `main.ts` files.
- **Enum validation**: use the `toEnum()` helper in `apps/workout-journal-admin/src/common/utils/enum.utils.ts` instead of bare `as EnumType` casts when mapping external data to enums.
- **MikroORM CLI config** (`libs/database/src/config/mikro-orm.config.ts`) loads env vars via `import 'dotenv/config'` because the CLI runs outside NestJS context.
- Environment variables required at runtime: `POSTGRES_HOST`, `POSTGRES_PORT`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`.
