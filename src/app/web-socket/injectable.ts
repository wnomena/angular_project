import { Injectable } from "@angular/core";
import { Socket , io } from "socket.io-client";

@Injectable({
    providedIn : "root"
})
export class SocketCOnfig {
    socket: any;
    constructor(){
        this.socket = io("http://localhost:5000")
    }
}