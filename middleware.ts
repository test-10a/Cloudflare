import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip logging for these paths
  const excludedPaths = [
    '/_next',     // Next.js internal routes
    '/api/_next', // Next.js API routes
    '/favicon',   // Favicon requests
    '/.well-known', // Well-known routes
    '/robots.txt',
    '/sitemap.xml',
  ]
  
  // Skip logging for static assets
  const staticExtensions = [
    '.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.ico', 
    '.svg', '.woff', '.woff2', '.ttf', '.eot', '.map'
  ]
  
  // Check if should skip logging
  const shouldSkip = 
    excludedPaths.some(path => pathname.startsWith(path)) ||
    staticExtensions.some(ext => pathname.endsWith(ext))
  
  if (shouldSkip) {
    return NextResponse.next()
  }
  
  // Only log the path value (what's appended to the URL)
  // Skip logging the homepage itself
  if (pathname === '/') {
    return NextResponse.next()
  }
  
  // Extract just the path without the leading slash
  const pathValue = pathname.substring(1)
  
  console.log('[PATH_LOGGER]', pathValue)
  console.log('MIDDLEWARE TEST - PATH DETECTED:', pathValue)
  
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}