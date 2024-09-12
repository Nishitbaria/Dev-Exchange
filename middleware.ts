import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isRootRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();

  // For other protected routes, simply protect them without redirect
  const isProtectedRoute = createRouteMatcher([
    '/question/:id',
    '/tags',
    '/tags/:tag',
    '/profile/:id',
    'community',
  ]);
  if (isProtectedRoute(req)) {
    if (!userId) {
      auth().protect();
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
