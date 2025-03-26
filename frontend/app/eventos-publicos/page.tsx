"use client"
import { Filter, Search, } from "lucide-react";
import { EventCard } from "../components/general/EventCard";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { upcomingEvents } from "@/mockedData";


export default function PublicEvents() {
    
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    const filteredEvents = upcomingEvents.filter((event) => {
      const titleMatch = event.title.toLowerCase().includes(search.toLowerCase());
      const typeMatch = event.type === filter;
      return titleMatch || typeMatch;
    });

    return (
      <main className="container mx-auto py-8 px-4 space-y-5">
          <div className="">
            <h1 className="text-3xl font-bold">Eventos Públicos</h1>
            <p className="text-gray-700">Descubra eventos interessantes para participar</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                type="text" 
                placeholder="Buscar eventos..." 
                className="w-full rounded-md border border-input bg-background px-8 py-2 text-sm pl-10" 
              />
            </div>
            <Button 
                variant="outline" 
                onClick={() => setFilter('presencial')} 
                className="cursor-pointer">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtros
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredEvents?.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
          </div>
      </main>
    )
}
