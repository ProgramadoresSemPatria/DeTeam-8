import { mockedParticipants } from '@/mockedData'
import React, { useState } from 'react'

export default function EventParticipantsSection() {

    const [isAdmin] = useState(true);

    return (
        <section className="overflow-x-auto overflow-y-auto max-h-[15rem]">
            { !isAdmin && <p className='py-5 md:py-10 text-center'>Somente o organizador consegue ver os participantes</p> }
            { isAdmin && (
                <table className="w-full border-collapse border border-gray-200 rounded-md overflow-x-scroll">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left text-gray-700">Nome</th>
                        <th className="px-4 py-2 text-left text-gray-700">Email</th>
                        <th className="px-4 py-2 text-left text-gray-700">Telefone</th>
                    </tr>
                    </thead>
                    <tbody>
                        {mockedParticipants.map((participant) => (
                            <tr key={participant.id} className="border-t border-gray-200">
                            <td className="px-4 py-2 font-semibold">{participant.name}</td>
                            <td className="px-4 py-2 font-semibold">{participant.email}</td>
                            <td className="px-4 py-2 font-semibold">{participant.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    )
}
