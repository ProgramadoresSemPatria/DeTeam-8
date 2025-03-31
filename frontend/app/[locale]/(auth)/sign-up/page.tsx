import { SignUpForm } from "@/components/layout/AuthForm";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { useTranslations } from "next-intl";

export default function SignUp() {
  const t = useTranslations("Auth");

  return (
    <AuthLayout
    title={t("title-up")}
    subtitle={t("subtitle-up")}
    footerText={t("footer-text-up")}
    footerLinkText={t("footer-link-up")}
    footerLinkHref="/sign-in"
    >
      <SignUpForm />
    </AuthLayout>
  );
}
