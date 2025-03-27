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
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Eventos Públicos em Destaque
          </h2>
          <Button className="text-sm cursor-pointer font-medium transition-colors disabled:opacity-50 h-11 w-full text-white sm:w-auto rounded-full bg-blue-500 hover:bg-blue-600 px-6 sm:px-8">
            <Link href="/eventos/publicos">Ver todos</Link>
            <ArrowRight />
          </Button>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <EventCardSkeleton key={index} />
              ))}
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Suspense>
      </div>

      <CallToAction />
    </div>
  );
}
