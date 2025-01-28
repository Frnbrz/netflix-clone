import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="login-page">
      <p className="login-page__header">Iniciar sesión</p>

      <div className="login-page__footer">
        <p className="login-page__footer--text">¿Todavía sin Netflix?</p>
        <Link href="/register" className="link">
          Suscríbete ya
        </Link>
      </div>
    </div>
  )
}
