import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Calendar } from '@/app/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Clock, MapPin, Plus } from 'lucide-react';
import { cn } from '../../lib/utils';


interface ContributionItem {
  id: string;
  description: string;
  value: string;
}

const EventModal = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [eventType, setEventType] = useState<string>('');
  const [showLinkField, setShowLinkField] = useState(false);
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [newContribution, setNewContribution] = useState<string>('');

  const handleEventTypeChange = (value: string) => {
    setEventType(value);
    setShowLinkField(value === 'online');
  };

  const handleAddContribution = () => {
    if (newContribution.trim()) {
      const newItem = {
        id: Date.now().toString(),
        description: 'Contribuição',
        value: newContribution
      };

      setContributions([...contributions, newItem]);
      setNewContribution('');
    }
  };

  const handleRemoveContribution = (id: string) => {
    setContributions(contributions.filter(item => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    setDate(undefined);
    setEventType('');
    setShowLinkField(false);
    setContributions([]);
    setNewContribution('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors">
          Criar Novo Evento
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden bg-white rounded-xl shadow-xl border border-gray-100">
        <DialogHeader className="px-6 pt-6 pb-4 bg-gradient-to-r from-purple-500 to-pink-400">
          <DialogTitle className="text-2xl font-bold text-center text-white">
            Criação do Evento
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className={`px-6 py-4 space-y-4 overflow-y-auto" : ""}`}>
          <div className="space-y-3">
            <div>
              <label htmlFor="eventName" className="event-form-label">Nome do Evento</label>
              <Input
                id="eventName"
                placeholder="Digite o nome do evento"
                className="event-form-input"
                required
              />
            </div>

            <div>
              <label htmlFor="eventDescription" className="event-form-label">Descrição do Evento</label>
              <Textarea
                id="eventDescription"
                placeholder="Digite a descrição do evento"
                className="event-form-input min-h-[80px]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="eventDate" className="event-form-label">Data</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "event-form-input justify-start text-left font-normal",
                        !date && "text-gray-400"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "dd/MM/yyyy") : "Selecione uma data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label htmlFor="eventTime" className="event-form-label">Horário</label>
                <div className="relative">
                  <Input
                    id="eventTime"
                    type="time"
                    className="event-form-input pl-10"
                    required
                  />
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="eventLocation" className="event-form-label">Local</label>
                <div className="relative">
                  <Input
                    id="eventLocation"
                    placeholder="Digite o local do evento"
                    className="event-form-input pl-10"
                    required
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="eventCapacity" className="event-form-label">Capacidade Máxima</label>
                <Input
                  id="eventCapacity"
                  type="number"
                  placeholder="Número de participantes"
                  className="event-form-input"
                  min={1}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="eventType" className="event-form-label">Tipo</label>
                <Select onValueChange={handleEventTypeChange}>
                  <SelectTrigger className="event-form-input">
                    <SelectValue placeholder="Presencial ou online" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="presencial">Presencial</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {showLinkField && (
                <div className="animate-fade-in">
                  <label htmlFor="eventLink" className="event-form-label">Link do Evento</label>
                  <Input
                    id="eventLink"
                    placeholder="https://meeting.zoom.us/..."
                    className="event-form-input"
                    required={showLinkField}
                  />
                </div>
              )}
            </div>

            <div>
              <label className="event-form-label">Presentes ou Contribuições</label>
              <div className="flex space-x-2">
                <Input
                  value={newContribution}
                  onChange={(e) => setNewContribution(e.target.value)}
                  placeholder="Ex: R$50,00"
                  className="event-form-input flex-1"
                />
                <Button
                  type="button"
                  onClick={handleAddContribution}
                  className="bg-purple-500 hover:bg-purple-600 text-white"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {contributions.length > 0 && (
                <div className="mt-3 animate-fade-in">

                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-4 space-x-3 border-t border-gray-100">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-gray-200 text-gray-600 hover:bg-gray-50"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white transition-colors"
            >
              Criar Evento
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;