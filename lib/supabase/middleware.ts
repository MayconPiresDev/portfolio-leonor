import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          )
          response = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // REGRA DE SEGURANÇA:
  // Se o usuário tentar acessar qualquer rota que comece com /admin...
  // ...e NÃO estiver logado e NÃO estiver na página de login...
  if (request.nextUrl.pathname.startsWith('/admin') && !user && request.nextUrl.pathname !== '/admin/login') {
    // ...Redireciona para o login
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  // Se estiver logado e tentar acessar o login, manda pro dashboard
  if (request.nextUrl.pathname === '/admin/login' && user) {
     return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  return response
}
