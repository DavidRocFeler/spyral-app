// src/middleware.ts
import { NextRequest, NextResponse, userAgent } from "next/server"

export function middleware(req: NextRequest) {
  const { device } = userAgent(req)
  const pathname = req.nextUrl.pathname

  // Interceptar /access y redirigir según dispositivo
  if (pathname === '/access') {
    if (device.type === "mobile" || device.type === "tablet") {
      return NextResponse.rewrite(new URL('/mobile/access', req.url))
    } else {
      return NextResponse.rewrite(new URL('/desktop/access', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/access']
}