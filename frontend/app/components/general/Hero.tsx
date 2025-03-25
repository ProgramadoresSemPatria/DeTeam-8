import Link from "next/link";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 h-[calc(100vh-300px)]">
        <div className="container mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl sm:p-12 relative">
              <h1 className="text-center text-3xl sm:text-4xl lg:text-[4rem] font-bold text-black mb-4">
                Organize seus <span className="text-blue-700">eventos</span> com facilidade
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-gray-800">
                Plataforma completa para gerenciamento de eventos, inscrições e muito mais
              </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-8 sm:mt-0">
          <Button asChild size="lg" className="bg-blue-700 text-white font-semibold hover:bg-blue-800 ease-linear duration-200 transform transition-colors">
            <Link href="/login">
              <PlusCircle className="mr-2 h-5 w-5" />
              Criar Evento
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="font-semibold hover:bg-gray-100 ease-linear duration-200 transform transition-colors">
            <Link href="/login">Ver Meus Eventos</Link>
          </Button>
        </div>
    </section>
  )
}