import { SignInForm } from "@/components/layout/AuthForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

export default function SignIn() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
      footerText="Don't have an account?"
      footerLinkText="Create an account"
      footerLinkHref="/SignUp"
    >
      <SignInForm />
    </AuthLayout>
  );
}
