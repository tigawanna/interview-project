import { Hono } from "hono";
import { handle } from "hono/vercel";
// file: _api/endpoint.ts

// Should run on edge runtime
export const edge = true;

// Always add those header to this endpoint
export const headers = {
  "Some-Header": "some value",
};

// Stream the response
export const streaming = true;

// Enable Incremental Static Regeneration for this endpoint
// export const isr = {
//   expiration: 30,
// };

// export default async function handler() {
//   return new Response("Edge Function: OK", {
//     status: 200,
//   });
// }

const app = new Hono().basePath("/api");
app.get("/", (c) => {
  return c.text("welcome to api routes ");
})
app.get("/hello", (c) => {
  return c.json({
    message: "api/hello Hello Next.js!",
  });
});

export default  handle(app);
