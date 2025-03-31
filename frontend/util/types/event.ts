export interface EventTypes {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: "presencial" | "online";
  capacity: number;
  status: "ativo" | "concluido" | "cancelado";
  imageUrl: string;
  isPublic: boolean;
  user: UserOnEvent
}

export type UserOnEvent = {
  id: string;
  name: string;
  email: string;
}

export type EventType = 'presencial' | 'online';
export type EventStatus = 'ativo' | 'cancelado' | 'concluido';  