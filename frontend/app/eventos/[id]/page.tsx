"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Users, Clock, Share2 } from "lucide-react"
import Image from "next/image"
import { upcomingEvents } from "@/mockedData"
import { formattedDate } from "@/util/functions/formattedDate"
import { useState } from "react"
import { useParams } from "next/navigation"
import { cn } from "@/lib/utils"
import EventDetailsSection from "@/components/general/EventDetailsSection"
import EventParticipantsSection from "@/components/general/EventParticipantsSection"

export default function EventPage() {

    const [eventInfo, setEventInfo] = useState<'detalhes' | 'participantes' | 'contribuicoes'>('detalhes');

    const params = useParams();
    const { id } = params;
    if (!id) return <p>Carregando...</p>;

    const event = upcomingEvents.find((event) => event.id === Number(id));
    if (!event) return <p className="text-center mt-5">Evento não encontrado</p>;

    return (
        <main className="container max-w-7xl mx-auto py-8 px-4">
            <div className="grid grid-cols-1 gap-8">
                <div className="lg:col-span-2 space-y-8">
                <div className="relative rounded-xl overflow-hidden">
                    <Image 
                        src={event?.imageUrl || "/placeholder.svg"} 
                        alt={event?.title || "Imagem do evento"} className="w-full h-[300px] object-cover" 
                        width={400} 
                        height={400}
                        />
                    <div className="absolute top-4 right-4 flex gap-2">
                    <div className={`px-2 py-1 rounded ${event?.type === "Presencial" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                        {event?.type === "Presencial" ? "Presencial" : "Online"}
                    </div>
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-4">{event?.title}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center">
                            <CalendarDays className="h-5 w-5 mr-2 text-primary" />
                            <span>{formattedDate(event?.date || new Date().toLocaleString())}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="h-5 w-5 mr-2 text-primary" />
                            <span>{event?.time}</span>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="h-5 w-5 mr-2 text-primary" />
                            <span>{event?.location}</span>
                        </div>
                        <div className="flex items-center">
                            <Users className="h-5 w-5 mr-2 text-primary" />
                            <span>
                            {event?.registered} / {event?.capacity} participantes
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                        <Button asChild className="bg-blue-500 hover:bg-blue-500/90 cursor-pointer">
                            <Link href={`/eventos/${id}/inscricao`}>Inscrever-se</Link>
                        </Button>
                        {/* TODO: adicionar link do evento para compartilhar */}
                        <Button variant="outline" className="cursor-pointer">
                            <Share2 className="h-4 w-4 mr-2" />
                            Compartilhar
                        </Button>
                    </div>

                    <div>
                    <div className="flex flex-1 bg-slate-200 rounded-md p-1 mb-4">
                        <Button 
                            className={cn(
                            "w-full cursor-pointer", 
                            eventInfo === 'detalhes' ? "bg-white text-black hover:bg-white" : "bg-transparent text-slate-500 hover:bg-slate-100"
                            )}                
                            onClick={() => setEventInfo('detalhes')}
                            >
                            Detalhes
                        </Button>
                        <Button 
                            className={cn(
                            "w-full cursor-pointer", 
                            eventInfo === 'participantes' ? "bg-white text-black hover:bg-white" : "bg-transparent text-slate-500 hover:bg-slate-100"
                            )}                 
                            onClick={() => setEventInfo('participantes')}
                            >
                            Participantes
                        </Button>
                    </div>
                    {eventInfo === 'detalhes' && <EventDetailsSection event={event} />}
                    {eventInfo === 'participantes' && <EventParticipantsSection />}
                    <div className="">
                            
                    </div>
                </div>

                </div>
                </div>
            </div>
        </main>
    )
}