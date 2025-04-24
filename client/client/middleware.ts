// client/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = path === '/login' || path === '/register' || path === '/';

  // Get the token from cookies or localStorage (we're using localStorage in our app)
  // Note: In middleware, we can't access localStorage directly, so we check cookies
  const token = request.cookies.get('token')?.value || '';

  // Redirect logic
  if (isPublicPath && token) {
    // If user is already logged in and tries to access public path, redirect to dashboard
    // We need to check user role, but we can't do that easily in middleware
    // A simple approach is to redirect to a route that will check the role and redirect accordingly
    return NextResponse.redirect(new URL('/redirect', request.url));
  }

  if (!isPublicPath && !token) {
    // If user is not logged in and tries to access protected path, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Specify the paths that this middleware should run on
export const config = {
  matcher: [
    '/',
    '/login',
    '/register',
    '/patient/:path*',
    '/doctor/:path*',
  ],
};