import { NextRequest, NextResponse } from "next/server";

function cleanPathname(pathname: string) {
  let decoded = pathname;

  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    decoded = pathname;
  }

  return decoded
    // remove zero-width / invisible Unicode characters
    .replace(/[\u200B-\u200D\u2060\uFEFF]/g, "")
    // remove normal whitespace
    .trim()
    // remove accidental trailing dot
    .replace(/\.+$/g, "");
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  const originalPathname = url.pathname;
  const cleanedPathname = cleanPathname(originalPathname);

  // Fix links like:
  // /program%E2%81%A0
  // /program.
  // /program%20
  // /program%0A
  if (originalPathname !== "/program" && cleanedPathname === "/program") {
    url.pathname = "/program";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};