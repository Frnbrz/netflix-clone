import Link from "next/link";
import { Terms } from "@/app/(routes)/(auth)/components/Terms/Terms";
import RegisterForm from "./RegisterForm/RegisterForm";

export default async function RegisterPage() {

  return (
    <div className="auth-page">
      <p className="auth-page__header">Registrarse</p>
      <RegisterForm />
      <div className="auth-page__footer">
        <p className="auth-page__footer__text">¿Ya tienes cuenta?</p>
        <Link href="/login" className="link auth-page__footer__link">
          Inicia sesión
        </Link>
      </div>
      <Terms />
    </div>
  )
}
