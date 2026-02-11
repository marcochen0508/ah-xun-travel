import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        request.cookies.set(name, value)
                    );
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();

    // Protect /admin routes
    const isLoginPage = request.nextUrl.pathname.startsWith("/admin/login");
    const isForgotPasswordPage = request.nextUrl.pathname.startsWith("/admin/forgot-password");
    const isUpdatePasswordPage = request.nextUrl.pathname.startsWith("/admin/update-password");

    if (request.nextUrl.pathname.startsWith("/admin") && !isLoginPage && !isForgotPasswordPage && !isUpdatePasswordPage) {
        if (!user) {
            const url = request.nextUrl.clone();
            url.pathname = "/admin/login";
            return NextResponse.redirect(url);
        }
    }

    // Redirect to admin dashboard if already logged in and visiting login page
    if (request.nextUrl.pathname === "/admin/login" && user) {
        const url = request.nextUrl.clone();
        url.pathname = "/admin";
        return NextResponse.redirect(url);
    }

    return response;
}
