import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Only log if it's not the homepage and not a static file
  if (pathname !== '/' && !pathname.startsWith('/_next') && !pathname.includes('.')) {
    // Extract the path without leading slash
    const numbers = pathname.substring(1)
    console.log(numbers)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}