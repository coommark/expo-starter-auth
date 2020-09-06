import * as Yup from "yup";

export class SignInData {
  constructor( email, password) {
  }

  static empty() {
    return new SignInData(
      '',
      '',
    );
  }
}

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
  password: Yup.string().min(6, 'Password must be at least 6 characters'),
});

