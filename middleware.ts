import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.url
  const pathname = request.nextUrl.pathname
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