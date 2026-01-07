// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const isInternal = hostname.startsWith('internal.');
  
  const url = request.nextUrl.clone();
  const path = url.pathname;
  
  // Skip api routes and static files
  if (
    path.startsWith('/api') ||
    path.startsWith('/_next') ||
    path.includes('.')
  ) {
    return NextResponse.next();
  }

  // Rewrite to appropriate route group
  if (isInternal) {
    url.pathname = `/internal${path}`;
  } else {
    url.pathname = `/public${path}`;
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};