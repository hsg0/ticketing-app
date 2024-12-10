import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from 'next/server';

export async function DELETE(req, { params}){
    try {
        const { id } = params;
        await Ticket.findByIdAndDelete(id);

        return NextResponse.json({ message: 'Ticket deleted successfully' });

}catch (error) {
    console.error(error);
    return NextResponses.json({ message: 'Error', error }, 500);
}
}