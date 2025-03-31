import axiosInstance from "./axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { GuestOnEvent } from "@/util/types/guest";

const getGuests = async (eventId: string) => {
    try {
        const { data } = await axiosInstance.get(`/guests/by-event/${eventId}`);
        return data as GuestOnEvent;
    } catch (error) {
        console.error("Erro ao carregar eventos:", error);
        throw error;
    }
};
export const useGetGuestsByEvent = (eventId: string) => {
    const query = useQuery({
        queryKey: ['guests-on-event'],
        queryFn: () => getGuests(eventId),
        enabled: !!eventId
    })

    return query
}