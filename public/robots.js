// robots.js or robots.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    `User-agent: *
    Disallow: 
    Sitemap: https://www.boslightmulti-serviceslimited.com/sitemap.xml`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
}
