"use client";
import { SignInForm } from "@/components/layout/AuthForm";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { useAutoLogin } from "@/hooks/auth/useAutoLogin";
import { useTranslations } from "next-intl";

export default function SignIn() {
  const t = useTranslations("Auth");

    useAutoLogin();

    return (
      <AuthLayout
        title={t("title")}
        subtitle={t("subtitle")}
        footerText={t("footer-text")}
        footerLinkText={t("footer-link")}
        footerLinkHref="/sign-up"
      >
        <SignInForm />
      </AuthLayout>
    );
}
