import Link from "next/link";
import { Terms } from "@/app/(routes)/(auth)/components/Terms/Terms";
import LoginForm from "@/app/(routes)/(auth)/login/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className="login-page">
      <p className="login-page__header">Iniciar sesión</p>

      <LoginForm />
      <div className="login-page__forget">
        <Link href="/" className="link">
          ¿Has olvidado tu contraseña?
        </Link>
      </div>
      <div className="input--checkbox">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          Recuérdame
        </label>
      </div>

      <div className="login-page__footer">
        <p className="login-page__footer__text">¿Todavía sin Netflix?</p>
        <Link href="/register" className="link login-page__footer__link">
          Suscríbete ya
        </Link>
      </div>
      <Terms />
    </div>
  )
}
