import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export default defineConfig({
  schema: "./server/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});

// import * as dotenv from "dotenv";

// import type { Config } from "drizzle-kit";

// dotenv.config({
//   pat: ".env.local",
// });

// export default {
//   schema: "./server/schema.ts",
//   out: "./server/migrations",
//   dialect: "pg", // 'postgresql' | 'mysql' | 'sqlite'
//   dbCredentials: {
//     connectionString: process.env.POSTGRES_URL!,
//   },
// } satisfies Config;
