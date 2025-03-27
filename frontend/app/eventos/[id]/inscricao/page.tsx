"use client"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Clock, Gift } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation";
import { upcomingEvents } from "@/mockedData";
import { formattedDate } from "@/util/functions/formattedDate"
import { useState } from "react";

export default function EventSubscription() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        contribution: '',
    })
    const params = useParams();
    const { id } = params;
    if (!id) return <p>Carregando...</p>;
    
    const event = upcomingEvents.find((event) => event.id === Number(id));
    if (!event) return <p className="text-center mt-5">Evento não encontrado</p>;

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
    }

    return (
        <main className="container mx-auto py-8 px-4 max-w-7xl">
            <div className="mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">{event.title}</h1>
                    <p className="text-muted-foreground">Confirme sua presença no evento</p>
                </div>

                <div className="h-fit grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubscribe}>
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-col space-y-1.5 p-6">
                                <h2 className="text-2xl font-semibold leading-none tracking-tight">
                                    Informações Pessoais
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Preencha seus dados para confirmar sua presença
                                </p>
                                </div>
                                <div className="p-6 pt-0 space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Nome Completo</label>
                                    <input 
                                    id="name" 
                                    name="name" 
                                    required 
                                    type="text"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required 
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
                                    <input 
                                    id="phone" 
                                    name="phone" 
                                    type="tel"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>

                                {event.hasContribution.length > 0 && (
                                    <div className="space-y-3 pt-4 border-t">
                                    <div>
                                        <label className="text-base font-medium">Contribuição</label>
                                        <p className="text-sm text-muted-foreground mb-3">
                                        Selecione um item para contribuir com o evento
                                        </p>
                                    </div>

                                    <div role="radiogroup" className="space-y-3">
                                        {event.hasContribution.map((item) => (
                                        <div key={item.id} className="flex items-center space-x-2 border p-3 rounded-md">
                                            <input 
                                                type="radio" 
                                                id={`item-${item.id}`} 
                                                name="contribution" 
                                                value={item.id} 
                                                required
                                                onClick={(e) => setFormData({ ...formData, contribution: (e.target as HTMLInputElement).value })}
                                                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                            />
                                            <div className="flex-1">
                                            <label htmlFor={`item-${item.id}`} className="font-medium">
                                                {item.name} - R$ {item.value}
                                            </label>
                                            
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                    </div>
                                )}
                        
                                <div className="flex items-center space-x-2 pt-2">
                                    <input 
                                    type="checkbox" 
                                    id="terms" 
                                    name="terms" 
                                    required 
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                    />
                                    <label htmlFor="terms" className="text-sm">
                                        Concordo com os termos e condições do evento
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-center p-6 pt-0">
                            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-500/90 cursor-pointer">
                                Confirmar Presença
                            </Button>
                            </div>
                            </div>
                        </form>
                    </div>

                    <div className="hidden lg:block  w-80">                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                Detalhes do Evento
                                </h3>
                            </div>
                            <div className="p-6 pt-0 space-y-4">
                                <div className="aspect-video w-full overflow-hidden rounded-md">
                                <Image
                                    src={event.imageUrl || "/placeholder.svg"}
                                    width={400}
                                    height={400}
                                    alt={event.title}
                                    className="h-full w-full object-cover"
                                />
                                </div>

                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center">
                                        <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
                                        <span>{formattedDate(event.date)}</span>
                                    </div>
                                <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                                    <span>{event.location}</span>
                                </div>
                                {event.hasContribution.length > 0 && (
                                    <div className="flex items-center">
                                    <Gift className="h-4 w-4 mr-2 text-muted-foreground" />
                                    <span>Contribuições disponíveis</span>
                                    </div>
                                )}
                                </div>

                                <div className="pt-2 text-sm">
                                    <p className="text-muted-foreground">{event.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}