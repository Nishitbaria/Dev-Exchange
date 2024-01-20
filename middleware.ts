import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    "/", // Home page
    "question/:id",
    "/tags",
    "/tags/:tag",
    "/profile/:id",
    "community",
  ],
  ignoredRoutes: [
    "/api/saveMessage",
    "/api/webhook",
    "api/chatgpt",
    "/api/createRoom",
    "/api/createChat",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
