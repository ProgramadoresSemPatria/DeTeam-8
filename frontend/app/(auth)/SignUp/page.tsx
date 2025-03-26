import { AuthLayout } from "@/components/general/AuthLayout";
import { SignUpForm } from "@/components/general/AuthForm";

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
