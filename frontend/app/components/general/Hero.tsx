"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-8 xl:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Receba. Converta. Gerencie.
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold md:leading-16 text-gray-900 mb-4 sm:mb-6">
                Gerencie seus <span className="text-blue-500">Pagamentos Internacionais</span> com Facilidade
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                Uma plataforma completa para desenvolvedores acompanharem taxas, impostos e escolherem as melhores opções de pagamento.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-blue-500 hover:bg-blue-600 px-6 sm:px-8">
                  <Link href="/">
                    Comece Agora
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-gray-200">
                  <Link href="/">Saiba Mais</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_120%,white,transparent_70%)]"></div>
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 sm:gap-4 p-3 sm:p-6">
                  {Array(9).fill(0).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                      className={cn(
                        "glass rounded-lg sm:rounded-xl",
                        i === 4 ? "col-span-1 row-span-1 bg-white/20" : "bg-white/10"
                      )}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}