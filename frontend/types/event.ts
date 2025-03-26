export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "Presencial" | "Online";
  capacity: number;
  registered: number;
  imageUrl: string;
  isUserRegistered?: boolean;
}
