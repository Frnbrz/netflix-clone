import Link from "next/link";
import { Terms } from "@/app/(routes)/(auth)/components/Terms/Terms";

export default function LoginPage() {
  return (
    <div className="login-page">
      <p className="login-page__header">Iniciar sesión</p>

      <div className="login-page__remember">
        <input type="checkbox" id="terms" className="login-page__remember__input" />
        <label htmlFor="terms" className="login-page__remember__label">
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
