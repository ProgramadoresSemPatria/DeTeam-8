"use client"
import EventModal from "@/components/general/EventModal/EventModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formattedDate } from "@/util/functions/formattedDate";
import { EventStatus, EventTypes } from "@/util/types/event";
import { BarChart3, CheckSquare, Edit, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { deleteEvent, useGetMyEvents } from "@/services/eventFunctions";
import { getTypeKeyByValue, statusMap } from "@/util/constants";

export default function Painel() {

    const [search, setSearch] = useState('');
    const [eventStatus, setEventStatus] = useState<EventStatus>('ativo');
    const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
    const [eventsToDisplay, setEventsToDisplay] = useState<EventTypes[]>([]);
    const [eventToEdit, setEventToEdit] = useState<EventTypes | undefined>();
    const { data: MyEvents, refetch: refetchMyEvents } = useGetMyEvents();
    
    useEffect(() => {
      if (!MyEvents || MyEvents.length === 0) {
          return;
      }
    
      const filteredEvents = MyEvents.filter((event) => {
          const statusMatch = event.status === statusMap[eventStatus];
          const titleMatch = event.title.toLowerCase().includes(search.toLowerCase());
          return statusMatch && titleMatch;
      });
  
      setEventsToDisplay(filteredEvents);
    }, [MyEvents, eventStatus, search]);

    function handleEditEvent(id: string): void {
      const eventToEdit = MyEvents?.find((event) => event.id === id) || undefined;
      setEventToEdit(eventToEdit);
      setIsCreateEventModalOpen(true);
    }

    async function handleDeleteEvent(id: string): Promise<void> {
      try {
        await deleteEvent(id);
        await refetchMyEvents();
      }
      catch (error) {
        console.error("Erro ao deletar evento:", error); 
      }
    }

    useEffect(() => {
      if (!isCreateEventModalOpen) {
        refetchMyEvents();
        setEventToEdit(undefined);
      }
    }, [isCreateEventModalOpen, refetchMyEvents]);


    return (
      <ProtectedRoute>
          <main className="container mx-auto py-8 px-4 space-y-5">
                <div className="flex justify-between items-center">
                  <div className="">
                    <h1 className="text-2xl sm:text-3xl font-bold">Painel do Organizador</h1>
                    <p className="text-sm sm:text-base text-gray-700">Gerencie seus eventos e acompanhe inscrições</p>
                  </div>
                  <Button
                      variant="outline"
                      onClick={() => setIsCreateEventModalOpen(true)}
                      className="cursor-pointer bg-blue-500 hover:bg-blue-500/90 hover:text-white text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">
                        <Plus />
                        <span className="ml-1 sm:ml-2">Criar evento</span>
                  </Button>
                  {
                    isCreateEventModalOpen &&
                    <EventModal 
                      isOpen={isCreateEventModalOpen} 
                      setIsOpen={setIsCreateEventModalOpen} 
                      eventToEdit={eventToEdit}
                      refetchMyEvents={refetchMyEvents}
                      />
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
                                  <Link href={`/eventos/${event.id}`}>{event.title} </Link>
                                  <Badge
                                    variant="secondary"
                                    className={`top-2 text-[.65rem]
                                    ${
                                      getTypeKeyByValue(event.type) === "presencial"
                                        ? "border-gray-300 bg-gray-100/90 black"
                                        : "text-blue-800 bg-blue-100/90 border-blue-300"
                                    }`}
                                  >
                                    {getTypeKeyByValue(event.type) === "presencial" ? "Presencial" : "Online"}
                                  </Badge>
                                </td>
                                <td className="px-4 py-2">{formattedDate(event.date)}</td>
                                <td className="px-4 py-2">{event.location}</td>
                                <td className="px-4 py-2">{/* event.registered || */ 0}</td>{/* TODO */}
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
                                    <Button 
                                      variant="ghost" 
                                      size="icon" 
                                      onClick={() => handleEditEvent(event.id)}
                                      className="cursor-pointer"
                                      >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button 
                                      variant="ghost" 
                                      size="icon" 
                                      onClick={() => handleDeleteEvent(event.id)}
                                      className="cursor-pointer"
                                      >
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
      </ProtectedRoute>
    );
}
