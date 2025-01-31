import { FormFieldProps } from "@/types/auth/login.type"
import { CircleX } from "lucide-react";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
}) => {
  return (
    <div className="login-form__group">
      <input className="login-form__input"
        type={type}
        placeholder={placeholder}
        id={name}
        {...register(name)}
      />
      <label className="login-form__label" htmlFor={name}>
        {name}
      </label>
      {error && (
        <span id="email-error" className="login-form__error">
          <CircleX className="icon icon--small" />{error.message}
        </span>
      )}
    </div>
  )
}
export default FormField;
