"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
}

export function AuthLayout({
  children,
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/30 p-4 antialiased"
    >
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-blue-500 animate-slide-in"
            style={{ animationDelay: "0.1s" }}
          >
            {title}
          </h2>
          <p
            className="mt-2 text-sm text-muted-foreground animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            {subtitle}
          </p>
        </div>

        <div
          className="auth-card p-6 animate-slide-in"
          style={{ animationDelay: "0.3s" }}
        >
          {children}
        </div>

        <div
          className="text-center text-sm text-muted-foreground animate-slide-in"
          style={{ animationDelay: "0.4s" }}
        >
          {footerText}{" "}
          <Link
            href={footerLinkHref}
            className="font-medium text-blue-500 hover:text-blue-500/80 transition-colors"
          >
            {footerLinkText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
