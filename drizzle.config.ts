import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/database/schema",
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
    authToken: process.env.DATABASE_AUTH_TOKEN as string,
  },
});