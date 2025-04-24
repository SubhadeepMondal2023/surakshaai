// In your middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Define public paths that don't require authentication
  const isPublicPath = path === '/login' || path === '/register' || path === '/' || path === '/redirect';
  
  // Get the token from cookies
  const token = request.cookies.get('token')?.value || '';
  
  // Redirect logic
  if (isPublicPath && token && path !== '/redirect') {
    // If user is already logged in and tries to access public path, redirect to redirect page
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
    '/redirect',
    '/patient/:path*',
    '/doctor/:path*',
  ],
};