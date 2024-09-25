import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // Define protected paths
  const protectedPaths = ['/count', '/faculty', '/round', '/report'];

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some(path => request.nextUrl.pathname.startsWith(path));

  if (isProtectedPath) {
    if (!token) {
      // If no token, redirect to login
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Check if the user's email is allowed
    if (!token.allowed) {
      // Remove the session (sign out)
      return NextResponse.redirect(new URL('/login?error=AccessDenied', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/count', '/faculty', '/round', '/report'], // Specify paths for middleware
};
