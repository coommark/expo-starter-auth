import * as Yup from "yup";

export class SignUpData {
  constructor(email, password, name) {
  }

  static empty() {
    return new SignUpData(
      '',
      '',
      '',
    );
  }
}

export const SignUpValidationModel = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must have at least 2 characters "),
  email: Yup.string()
    .email("Enter a valid email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters "),
});
