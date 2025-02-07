import { CircleX } from "lucide-react";
import { RegisterFormFieldProps } from "../types/auth/register.type";

export const RegisterFormField: React.FC<RegisterFormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
}) => {
  return (
    <div className="form__group">
      <input className="form__input input"
        type={type}
        placeholder={placeholder}
        id={name}
        {...register(name)}
      />
      <label className="form__label" htmlFor={name}>
        {name}
      </label>
      {error && (
        <span id="email-error" className="form__error">
          <CircleX className="icon icon--small" />{error.message}
        </span>
      )}
    </div>
  )
}
