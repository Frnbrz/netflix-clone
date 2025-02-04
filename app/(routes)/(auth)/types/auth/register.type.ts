import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";


export type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};


export const RegisterFormSchema: ZodType<RegisterFormData> = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormFieldProps = {
  type: string;
  placeholder?: string;
  name: RegisterValidFieldNames;
  register: UseFormRegister<RegisterFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};


export type RegisterValidFieldNames =
  | "email"
  | "password"
  | "confirmPassword";
