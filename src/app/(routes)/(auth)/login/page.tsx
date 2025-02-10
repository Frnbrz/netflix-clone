import { auth } from "@/auth";
import Link from "next/link";
import { Terms } from "@/app/(routes)/(auth)/components/Terms/Terms"
import LoginForm from "@/app/(routes)/(auth)/login/LoginForm/LoginForm";


export default async function LoginPage() {
  const session = await auth()
  return (
    <div className="auth-page">
      <header className="auth-page__header">Iniciar sesión</header>

      <LoginForm />
      <p>Sesion: {JSON.stringify(session)}</p>
      <div className="auth-page__forget">
        <Link href="/" className="link">
          ¿Has olvidado tu contraseña?
        </Link>
      </div>
      <label htmlFor="remember">
        <input type="checkbox" id="remember" className="input" />
        <span>
          Recuérdame
        </span>
      </label>

      <div className="auth-page__footer">
        <p className="auth-page__footer__text">¿Todavía sin Netflix?</p>
        <Link href="/register" className="link auth-page__footer__link">
          Suscríbete ya
        </Link>
      </div>
      <Terms />
    </div>
  )
}
