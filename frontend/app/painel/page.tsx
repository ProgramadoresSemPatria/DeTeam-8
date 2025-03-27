"use client"
import { BarChart3, CheckSquare, Edit, Plus, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { upcomingEvents } from "@/mockedData";
import { formattedDate } from "@/util/functions/formattedDate";
import { EventStatus } from "@/util/types/event";
import EventModal from "@/components/general/EventModal";
import { Link } from "next-view-transitions";

export default function Painel() {

  const [search, setSearch] = useState('');
  const [eventStatus, setEventStatus] = useState<EventStatus>('ativo');
  const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);

  const filteredEvents = upcomingEvents.filter((event) => {
    const statusMatch = event.status === eventStatus;
    const titleMatch = event.title.toLowerCase().includes(search.toLowerCase());
    
    return statusMatch && titleMatch;
  });
  const eventsToDisplay = filteredEvents;

  return (
    <main className="container mx-auto py-8 px-4 space-y-5">
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="text-3xl font-bold">Painel do Organizador</h1>
              <p className="text-gray-700">Gerencie seus eventos e acompanhe inscrições</p>
            </div>
            <Button
                variant="outline"
                onClick={() => setIsCreateEventModalOpen(true)}
                className="cursor-pointer bg-blue-500 hover:bg-blue-500/90 hover:text-white text-white">
                  <Plus />
                  Criar novo evento
            </Button>
            {
              isCreateEventModalOpen && <EventModal isOpen={isCreateEventModalOpen} setIsOpen={setIsCreateEventModalOpen}/>
            }
          </div>
          <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="rounded-md border border-gray-200 px-6 py-8 w-full">
                <h2 className="text-3xl font-bold">{3}</h2>
                <p className="text-gray-700">Eventos ativos</p>
                <p className="text-gray-700">Eventos publicados e abertos 
                para inscrições</p>
              </div>
              <div className="rounded-md border border-gray-200 px-6 py-8 w-full">
                <h2 className="text-3xl font-bold">{68}</h2>
                <p className="text-gray-700">Total de inscriçoes</p>
                <p className="text-gray-700">Participantes confirmados em todos os eventos</p>
              </div>
              <div className="rounded-md border border-gray-200 px-6 py-8 w-full">
                <h2 className="text-3xl font-bold">{1}</h2>
                <p className="text-gray-700">Eventos Realizados</p>
                <p className="text-gray-700">Eventos concluídos com sucesso</p>
              </div>
          </div>
          <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                type="text" 
                placeholder="Buscar eventos..." 
                className="w-full rounded-md border border-input bg-background px-8 py-2 text-sm pl-10" 
              />
          </div>
          <div className="flex-1 space-y-3">
              <div className="flex-1 flex gap-1 p-1 bg-slate-200 rounded-md">
                  <Button 
                    className={cn(
                      "w-full cursor-pointer", 
                      eventStatus === 'ativo' ? "bg-white text-black hover:bg-white" : "bg-transparent text-slate-500 hover:bg-slate-100"
                    )}                
                    onClick={() => setEventStatus('ativo')}
                    >
                      Ativos
                  </Button>
                  <Button 
                    className={cn(
                      "w-full cursor-pointer", 
                      eventStatus === 'concluido' ? "bg-white text-black hover:bg-white" : "bg-transparent text-slate-500 hover:bg-slate-100"
                    )}                 
                    onClick={() => setEventStatus('concluido')}
                    >
                      Concluídos
                  </Button>
              </div>
              <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200 rounded-md overflow-x-scroll">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-gray-700">Evento</th>
                        <th className="px-4 py-2 text-left text-gray-700">Data</th>
                        <th className="px-4 py-2 text-left text-gray-700">Local</th>
                        <th className="px-4 py-2 text-left text-gray-700">Inscrições</th>
                        <th className="px-4 py-2 text-left text-gray-700">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eventsToDisplay.map((event) => (
                        <tr key={event.id} className="border-t border-gray-200">
                          <td className="px-4 py-2 font-semibold flex flex-col gap-1">
                            {event.title} 
                            <span 
                              className={`px-3 max-w-fit py-[0.15rem] rounded-2xl text-[.75rem] font-bold
                              ${event.type === "Presencial" ? "bg-black text-white" : "bg-slate-100 text-black"}`}
                            >
                              {event.type}
                            </span>
                          </td>
                          <td className="px-4 py-2">{formattedDate(event.date)}</td>
                          <td className="px-4 py-2">{event.location}</td>
                          <td className="px-4 py-2">{event.registered}</td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" asChild>
                                <Link href={`/eventos/${event.id}`}>
                                  <BarChart3 className="h-4 w-4" />
                                </Link>
                              </Button>
                              <Button variant="ghost" size="icon" asChild>
                                <Link href={`/eventos/${event.id}/`}>
                                  <CheckSquare className="h-4 w-4" />
                                </Link>
                              </Button>
                              <Button variant="ghost" size="icon" asChild>
                                <Link href={`/eventos/${event.id}/editar`}>
                                  <Edit className="h-4 w-4" />
                                </Link>
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                         </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
          </div>
      </main>
  );
}
