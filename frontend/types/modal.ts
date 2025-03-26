interface Gift {
  id: string;
  name: string;
  value: string;
}

export interface EventFormData {
  name: string;
  description: string;
  date: Date | undefined;
  time: string;
  location: string;
  eventType: string;
  capacity: string;
  isPublic: boolean;
  eventLink: string;
  gifts: Gift[];
}

export interface EventModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSubmit?: (data: EventFormData) => void;
}
