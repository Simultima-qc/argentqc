import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/routing";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/fr${search}`, request.url), 308);
  }

  if (pathname === "/questionnaire") {
    return NextResponse.redirect(new URL(`/fr/questionnaire${search}`, request.url), 308);
  }

  if (pathname === "/resultats") {
    return NextResponse.redirect(new URL(`/fr/resultats${search}`, request.url), 308);
  }

  const legacyRedirects: Record<string, string> = {
    "/budget": "/fr/budget",
    "/budget/calculateur": "/fr/budget/calculateur",
    "/allocation-logement-quebec": "/fr/budget/allocation-logement",
    "/credit-solidarite-quebec": "/fr/budget/credit-solidarite",
    "/cout-vie-quebec": "/fr/budget/cout-vie",
    "/impots": "/fr/impots",
    "/impots/dates": "/fr/impots/dates",
    "/impots/logiciels": "/fr/impots/logiciels",
    "/impots/remboursement": "/fr/impots/remboursement",
    "/retraite": "/fr/retraite",
    "/retraite/celi": "/fr/retraite/celi",
    "/retraite/celiapp": "/fr/retraite/celiapp",
    "/retraite/reer": "/fr/retraite/reer",
    "/transfert-reer": "/fr/retraite/transfert-reer",
    "/retraite/rrq": "/fr/retraite/rrq",
    "/assurances": "/fr/assurances",
    "/assurances/auto": "/fr/assurances/auto",
    "/assurances/comparateur": "/fr/assurances/comparateur",
    "/assurances/habitation": "/fr/assurances/habitation",
    "/assurances/vie": "/fr/assurances/vie",
    "/internet": "/fr/internet",
    "/internet/comparateur": "/fr/internet/comparateur",
    "/demenagement": "/fr/demenagement",
    "/demenagement/checklist": "/fr/demenagement/checklist",
    "/demenagement/cout": "/fr/demenagement/cout",
    "/demenagement/montreal": "/fr/demenagement/montreal",
  };

  const legacyTarget = legacyRedirects[pathname];
  if (legacyTarget) {
    return NextResponse.redirect(new URL(`${legacyTarget}${search}`, request.url), 308);
  }

  const requestHeaders = new Headers(request.headers);
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale = firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;

  requestHeaders.set("x-argentqc-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};
