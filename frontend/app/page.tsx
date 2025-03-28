import CallToAction from "@/components/general/CallToAction";
import EventCard from "@/components/general/EventCard";
import { EventCardSkeleton } from "@/components/general/EventCardSkeleton";
import Hero from "@/components/general/Hero";
import { Button } from "@/components/ui/button";
import { upcomingEvents } from "@/mockedData";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <div className="container py-12 mx-auto max-w-6xl">
      <div className="flex justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 sm:mb-8">
            Eventos Públicos em Destaque
          </h2>
          <Button
            asChild
            className="text-sm font-medium transition-colors disabled:opacity-50 h-11 rounded-full bg-blue-500 hover:bg-blue-600 px-4 sm:px-6"
          >
            <Link href="/eventos/publicos" className="flex items-center gap-2">
              <span className="hidden sm:inline">Ver todos</span>
              <span className="sm:hidden">Ver todos</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <EventCardSkeleton key={index} />
              ))}
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Suspense>
      </div>

      <CallToAction />
    </div>
  );
}
