import CallToAction from "@/components/general/CallToAction";
import { EventCard } from "@/components/general/EventCard";
import { EventCardSkeleton } from "@/components/general/EventCardSkeleton";
import Hero from "@/components/general/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      {/* Eventos Section */}
      <div className="container py-12 mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold tracking-tight mb-8">
          Ultimos Eventos{" "}
        </h1>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <EventCardSkeleton key={index} />
              ))}
            </div>
          }
        >
          <EventList />
        </Suspense>
      </div>
 
      <CallToAction />
    </div>
  );
}

async function EventList() {
  // Simula um carregamento de dados
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Dados mockados de eventos
  const events = [
    {
      id: "1",
      title: "Workshop de React",
      date: "2023-12-15T14:00:00",
      location: "São Paulo, SP",
      type: "Presencial",
      capacity: 50,
      registered: 35,
      imageUrl: "/images/initial-wireframe.png",
      isUserRegistered: true,
    },
    {
      id: "2",
      title: "Meetup de Desenvolvimento Web",
      date: "2023-12-20T19:00:00",
      location: "Online",
      type: "Online",
      capacity: 100,
      registered: 78,
      imageUrl: "/images/initial-wireframe.png",
      isUserRegistered: false,
    },
    {
      id: "3",
      title: "Conferência de UX/UI Design",
      date: "2024-01-10T09:00:00",
      location: "Rio de Janeiro, RJ",
      type: "Presencial",
      capacity: 80,
      registered: 45,
      imageUrl: "/images/initial-wireframe.png",
      isUserRegistered: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
