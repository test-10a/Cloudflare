import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Only log if it's not the homepage and not a static file
  if (pathname !== '/' && !pathname.startsWith('/_next') && !pathname.includes('.')) {
    // Extract the path without leading slash
    const numbers = pathname.substring(1)
    
    // Try multiple logging methods
    console.log(numbers)
    console.error(numbers) // Sometimes error logs show up better
    
    // Add to response headers for debugging
    const response = NextResponse.next()
    response.headers.set('x-logged-path', numbers)
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}