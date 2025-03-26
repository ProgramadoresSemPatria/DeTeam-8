import { AuthLayout } from "@/app/components/general/AuthLayout";
import { SignUpForm } from "@/app/components/general/AuthForm";

export default function SignUp() {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Sign up to get started with our platform"
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkHref="/SignUp"
    >
      <SignUpForm />
    </AuthLayout>
  );
}
