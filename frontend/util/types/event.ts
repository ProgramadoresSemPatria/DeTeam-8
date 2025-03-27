export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "Presencial" | "Online";
  capacity: number;
  registered: number;
  status: "ativo" | "concluido" | "cancelado";
  organizer: string;
  imageUrl: string;
  isUserRegistered?: boolean;
  isPublic: boolean;
}

export type EventType = 'Presencial' | 'Online';
export type EventStatus = 'ativo' | 'cancelado' | 'concluido';