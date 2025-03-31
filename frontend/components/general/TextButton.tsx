"use client"

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function TextButton() {
  const t = useTranslations("TextButton");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 sm:mb-8">
        {t("title")}
      </h2>
      <Button
        asChild
        className="text-sm font-medium transition-colors disabled:opacity-50 h-11 rounded-full bg-blue-500 hover:bg-blue-600 px-4 sm:px-6"
      >
        <Link href="/eventos/publicos" className="flex items-center gap-2">
          <span>{t("button")}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  )
}
