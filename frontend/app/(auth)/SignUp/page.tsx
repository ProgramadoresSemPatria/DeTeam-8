import { SignUpForm } from "@/components/layout/AuthForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

export default function SignUp() {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Sign up to get started with our platform"
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkHref="/SignIn"
    >
      <SignUpForm />
    </AuthLayout>
  );
}
