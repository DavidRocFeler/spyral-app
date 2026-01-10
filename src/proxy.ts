// src/proxy.ts
import { NextRequest, NextResponse, userAgent } from "next/server"

function proxy(req: NextRequest) {
  const { device } = userAgent(req)
  const pathname = req.nextUrl.pathname
  
  // Redirection depend the device 
  if (pathname === '/access') {
    if (device.type === "mobile" || device.type === "tablet") {
      return NextResponse.rewrite(new URL('/mobile/access', req.url))
    } else {
      return NextResponse.rewrite(new URL('/desktop/access', req.url))
    }
  }
  
  return NextResponse.next()
}

export default proxy

export const config = {
  matcher: ['/access']
}