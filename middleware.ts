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
  
  // Only log actual page visits
  const url = request.url
  const searchParams = request.nextUrl.searchParams.toString()
  const method = request.method
  const userAgent = request.headers.get('user-agent') || 'Unknown'
  const referer = request.headers.get('referer') || 'Direct'
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'
  
  const logEntry = {
    timestamp: new Date().toISOString(),
    method,
    pathname,
    searchParams,
    fullUrl: url,
    userAgent,
    referer,
    ip,
  }
  
  console.log('[URL_LOGGER]', JSON.stringify(logEntry, null, 2))
  
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}