import { NextRequest, NextResponse } from 'next/server';

const AUTH_ROUTES = ['/auth', '/auth/sign-in', '/auth/sign-up', '/auth/forgot-password'];

export const proxy = async (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    if (pathname === AUTH_ROUTES[0]) {
        return NextResponse.redirect(new URL(AUTH_ROUTES[1], request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\.png$).*)'],
};
