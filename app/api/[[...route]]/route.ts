import { Hono } from "hono";

import { handle } from "hono/vercel";

import summary from "./summary";
import accounts from "./accounts";
import categories from "./categories";
import transactions from "./transactions";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app
  .route("/summary", summary)
  .route("/accounts", accounts)
  .route("/categories", categories)
  .route("/transactions", transactions);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

// Enabling RPCs
export type AppType = typeof routes;
