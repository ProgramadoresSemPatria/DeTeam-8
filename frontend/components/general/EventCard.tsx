import { CalendarDays, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTransitionRouter } from 'next-view-transitions';

interface Event {
    id: string
    title: string
    date: string
    location: string
    type: "Presencial" | "Online"
    capacity: number
    registered: number
    imageUrl: string
  }

  interface EventCardProps {
    event: Event
  }

  export function EventCard({ event }: EventCardProps) {
    const router = useTransitionRouter();

    const formattedDate = new Date(event.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })

    return (
        <div className="bg-white rounded-md border border-gray-200">
            <div className="flex-1 h-[12rem] relative">
                <Image
                src={event.imageUrl}
                width={400}
                height={400}
                alt=""
                className="w-full h-full object-cover rounded-t-md"
                />
                <span
                    className={`absolute top-2 right-2 px-3 py-[0.15rem] rounded-2xl text-[.75rem] font-bold
                    ${event.type === "Presencial" ? "bg-black text-white" : "bg-white text-black"}`}
                    >
                        {event.type}
                    </span>
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
                <Button
                    asChild
                    className="w-full bg-gray-900 text-white mt-3 cursor-pointer"
                    onClick={() => router.push(`/eventos-publicos/${event.id}`)}
                >
                    <span>Ver detalhes</span>
                </Button>
            </div>
        </div>
    )
}
