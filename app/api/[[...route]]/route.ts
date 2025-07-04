import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/hello", clerkMiddleware(), (c) => {
    const auth = getAuth(c);
    if (!auth?.userId) {
      return c.json({
        error: "Unauthorized!",
      });
    }
    return c.json({
      message: "Hello Next.js!",
      userId: auth.userId,
    });
  })
  .get("/hello/:testId", (c) => {
    const testId = c.req.param("testId");
    return c.json({
      message: "Hello World",
      testId: testId,
    });
  });

export const GET = handle(app);
export const POST = handle(app);
