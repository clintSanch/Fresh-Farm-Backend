import { Socket } from "socket.io";

export class Connection {

    onlineClients = new Set();

    disconnectClient = () =>{

    }

    removeClientOnline = (client: Socket) =>{

    }

    addClientOnline = (socket) =>{

        console.info(`Client ${socket.id} has connected`);
        this.onlineClients.add(socket.id);

        socket.on("disconnect", ()=>{
            this.onlineClients.delete(socket.id)
            console.info(`Socket ${socket.id} has disconnected.`)
        });
    }
}