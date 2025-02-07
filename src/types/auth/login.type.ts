import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";


export type LoginFormData = {
  email: string;
  password: string;
};

export const LoginFormSchema: ZodType<LoginFormData> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" })
})




export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: LoginValidFieldNames;
  register: UseFormRegister<LoginFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};



export type LoginValidFieldNames =
  | "email"
  | "password"
