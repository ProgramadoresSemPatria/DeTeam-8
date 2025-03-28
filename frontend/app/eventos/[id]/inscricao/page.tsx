"use client"
import React from 'react';
import { useParams } from "next/navigation";

import { upcomingEvents } from "@/mockedData";

import { toast } from 'sonner';
import EventRegistrationForm from '@/components/general/EventRegistrationForm';
import EventDetailsCard from '@/components/general/EventDetailsCard';

const EventSubscriptionPage: React.FC = () => {
  const params = useParams();
  const { id } = params;

  if (!id) return <p>Carregando...</p>;

  const event = upcomingEvents.find((event) => event.id === Number(id));
  if (!event) return <p className="text-center mt-5">Evento não encontrado</p>;

  const handleSubmit = (formData: {
    name: string;
    email: string;
    phone: string;
    contribution: string;
    termsAgreed: boolean;
  }) => {
    // Simular envio de inscrição
    toast.success('Inscrição confirmada!', {
      description: `Você está inscrito para ${event.title}. Um e-mail de confirmação foi enviado.`,
      action: {
        label: 'Fechar',
        onClick: () => {},
      },
    });

    console.log('Dados do formulário:', formData);
  };

  return (
    <main className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-700">{event.title}</h1>
          <p className="text-muted-foreground">Confirme sua presença no evento</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <EventRegistrationForm
              event={event}
              onSubmit={handleSubmit}
            />
          </div>

          <div>
            <EventDetailsCard event={event} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventSubscriptionPage;