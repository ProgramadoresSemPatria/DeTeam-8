import { CalendarDays, CheckSquare, Gift, Users } from "lucide-react";

export default function Resources() {
  return (
    <section className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Recursos Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
            <CalendarDays className="h-12 w-12 mb-4 text-primary text-blue-700" />
            <h3 className="text-xl font-semibold mb-2">Gerenciamento de Eventos</h3>
            <p className="text-muted-foreground">
              Crie e edite eventos com todos os detalhes necessários: data, horário, local e capacidade.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
            <Users className="h-12 w-12 mb-4 text-primary text-blue-700" />
            <h3 className="text-xl font-semibold mb-2">Inscrições Simplificadas</h3>
            <p className="text-muted-foreground">
              Formulários personalizados para inscrições e gerenciamento completo de participantes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
            <Gift className="h-12 w-12 mb-4 text-primary text-blue-700" />
            <h3 className="text-xl font-semibold mb-2">Lista de Presentes</h3>
            <p className="text-muted-foreground">
              Organize contribuições, presentes ou itens necessários para seu evento.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
            <CheckSquare className="h-12 w-12 mb-4 text-primary text-blue-700" />
            <h3 className="text-xl font-semibold mb-2">Controle de Presença</h3>
            <p className="text-muted-foreground">Registre facilmente quem compareceu ao evento no dia.</p>
          </div>
        </div>
    </section>
  )
}
