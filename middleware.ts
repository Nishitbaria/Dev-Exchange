import { clerkMiddleware } from "@clerk/nextjs/server";


export default clerkMiddleware({
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
