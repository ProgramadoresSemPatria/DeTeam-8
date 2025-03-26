import { CalendarDays, MapPin, Users } from "lucide-react";
import Image from "next/image";

import { Event } from "@/types/event";
import { Link } from "next-view-transitions";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { EventCardSkeleton } from "./EventCardSkeleton";

interface EventCardProps {
  event: Event;
  isLoading?: boolean;
}

export function EventCard({ event, isLoading = false }: EventCardProps) {
  if (isLoading) {
    return <EventCardSkeleton />;
  }
  const formattedDate = new Date(event.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className=" bg-white rounded-md border border-gray-200">
      <div className="flex-1 h-[12rem] relative">
        <Image
          src={event.imageUrl}
          width={400}
          height={400}
          alt="Imagem do evento"
          className="w-full h-full object-cover rounded-t-md"
        />
        <Badge
          variant="secondary"
          aria-label="Presencial ou Online"
          className={`absolute top-2 right-2 text-[.65rem]
                    ${
                      event.type === "Presencial"
                        ? "border-gray-300 bg-gray-100/90 black"
                        : "text-blue-800 bg-blue-100/90 border-blue-300"
                    }`}
        >
          {event.type}
        </Badge>
      </div>
      <div className="p-4 flex w-full h-fit flex-col justify-between text-black space-y-1">
        <div className="space-y-3 text-sm h-[10rem]">
          <h3 className="text-xl font-bold line-clamp-2">{event.title}</h3>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>
              {event.registered} / {event.capacity} participantes
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="w-full bg-blue-500 hover:bg-blue-500/80 text-white mt-3 cursor-pointer">
            <Link href={`/eventos-publicos/${event.id}`}>
              <span>Ver detalhes</span>
            </Link>
          </Button>

          {event.isUserRegistered && (
            <Button className="w-full bg-blue-400 hover:bg-blue-500/80 text-white mt-3 cursor-pointer">
              <Link href={`/eventos-publicos/${event.id}`}>
                <span>Add to calendar</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
